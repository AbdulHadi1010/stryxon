"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useForm, useFieldArray } from 'react-hook-form';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ContractDocument, ContractData, PaymentType, Milestone, ContractTheme } from '@/components/tools/ContractDocument';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Download, 
  Share2, 
  FileText, 
  CheckCircle2, 
  Shield, 
  Zap,
  ArrowRight,
  Sparkles,
  X,
  Plus,
  Trash2,
  DollarSign,
  Calendar,
  Clock,
  Percent,
  Upload,
  Image as ImageIcon,
  Palette
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// Dynamically import PDFViewer to avoid SSR issues
const PDFViewerWrapper = dynamic(
  () => import('@/components/tools/PDFViewerWrapper'),
  { 
    ssr: false, 
    loading: () => (
      <div className="h-full w-full bg-zinc-900 animate-pulse rounded-lg border border-zinc-800 flex items-center justify-center">
        <div className="text-zinc-500 text-sm">Loading preview...</div>
      </div>
    )
  }
);

// Success Modal Component
const SuccessModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-lg p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-500" />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2">
            Contract Downloaded!
          </h3>
          
          <p className="text-zinc-400 mb-6">
            Need a professional team to execute this project?
          </p>
          
          <div className="w-full space-y-3">
            <Link href="/services" className="block">
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                <Sparkles className="w-4 h-4 mr-2" />
                Hire Stryxon
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              className="w-full border-zinc-800 hover:bg-zinc-900"
              onClick={onClose}
            >
              Continue Editing
            </Button>
          </div>
          
          <p className="text-xs text-zinc-500 mt-6">
            Trusted by agencies worldwide for enterprise software development
          </p>
        </div>
      </div>
    </div>
  );
};

export default function ContractGeneratorPage() {
  const [showPreview, setShowPreview] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<ContractTheme>('minimal');
  const [logoUrl, setLogoUrl] = useState<string>('');
  const [wizardStep, setWizardStep] = useState<1 | 2>(1);
  
  // Dummy data for Step 1 preview
  const dummyData: ContractData = {
    clientName: 'Acme Corporation',
    projectName: 'Enterprise Web Application',
    projectDescription: 'Development of a modern, scalable web application with real-time features, user authentication, admin dashboard, and third-party API integrations.',
    deliverables: 'Responsive web application, Admin panel, API documentation, Source code repository',
    paymentType: 'hourly',
    hourlyRate: 150,
    estimatedHours: 80,
    monthlyRate: 8000,
    fixedPrice: 15000,
    upfrontPercentage: 50,
    milestones: [],
    paymentTerms: 'Payment due within 7 days of invoice.',
    scopeCreepProtection: true,
    ipProtection: true,
    startDate: new Date().toISOString().split('T')[0],
    completionDate: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  };
  
  const { register, watch, setValue, control, formState: { errors } } = useForm<ContractData>({
    defaultValues: {
      clientName: '',
      projectName: '',
      projectDescription: '',
      deliverables: '',
      
      // Payment defaults
      paymentType: 'hourly',
      hourlyRate: 100,
      estimatedHours: 40,
      monthlyRate: 5000,
      fixedPrice: 10000,
      upfrontPercentage: 50,
      milestones: [],
      
      paymentTerms: 'Payment due within 7 days of invoice.',
      scopeCreepProtection: true,
      ipProtection: true,
      startDate: new Date().toISOString().split('T')[0],
      completionDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    },
  });

  const { fields: milestoneFields, append: appendMilestone, remove: removeMilestone } = useFieldArray({
    control,
    name: 'milestones',
  });

  const formData = watch();
  const isFormValid = formData.clientName && formData.projectName && formData.projectDescription;
  
  // Use dummy data for step 1, real data for step 2
  const previewData = wizardStep === 1 ? dummyData : formData;
  
  const paymentType = watch('paymentType');
  const upfrontPercentage = watch('upfrontPercentage');

  // Auto-adjust upfront percentage when payment type changes
  React.useEffect(() => {
    if (paymentType === 'milestone' && upfrontPercentage > 50) {
      setValue('upfrontPercentage', 20);
    }
  }, [paymentType, upfrontPercentage, setValue]);

  // Calculate total cost based on payment type
  const getTotalCost = () => {
    switch (paymentType) {
      case 'hourly':
        return formData.hourlyRate * formData.estimatedHours;
      case 'monthly':
        return formData.monthlyRate;
      case 'fixed':
        return formData.fixedPrice;
      case 'milestone':
        return formData.milestones.reduce((sum: number, m: Milestone) => sum + (m.amount || 0), 0);
      default:
        return 0;
    }
  };
  
  const totalCost = getTotalCost();
  const upfrontAmount = totalCost * (upfrontPercentage / 100);
  const remainingAmount = totalCost - upfrontAmount;

  const addMilestone = () => {
    appendMilestone({
      id: `milestone-${Date.now()}`,
      name: '',
      description: '',
      amount: 0,
      dueDate: new Date().toISOString().split('T')[0],
    });
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }
      
      // Validate file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert('Image size should be less than 2MB');
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    setLogoUrl('');
  };

  const handleShare = async () => {
    const url = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Free Software Development Contract Generator',
          text: 'Generate professional software development contracts in seconds - completely free!',
          url: url,
        });
      } catch (err) {
        // User cancelled share
      }
    } else {
      // Fallback to copying URL
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    // Show success modal after download
    setTimeout(() => {
      setShowSuccessModal(true);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-zinc-800 bg-black/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">Contract Generator</h1>
                <p className="text-xs text-zinc-400">Free • Instant • Secure</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="border-zinc-800 hover:bg-zinc-900 hidden sm:flex"
              >
                <Share2 className="w-4 h-4 mr-2" />
                {copied ? 'Copied!' : 'Share'}
              </Button>
              
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white">
                  Back to Stryxon
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="border-b border-zinc-800 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-6">
              <Zap className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-indigo-400 font-medium">100% Free Forever</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Software Development Contract Generator
            </h1>
            
            <p className="text-lg text-zinc-400 mb-8">
              Create professional, legally-sound contracts in minutes. No signup required.
              <br className="hidden sm:block" />
              Protect your projects with built-in scope creep and IP clauses.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Client-Side Only</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-400">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Your Data Never Leaves Your Browser</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-400">
                <Zap className="w-4 h-4 text-green-500" />
                <span>Instant PDF Generation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Split View */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={cn(
          "grid gap-8",
          wizardStep === 1 ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2"
        )}>
          {/* Left Side - Form */}
          <div className="space-y-6">
            {/* Template Selector */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Palette className="w-5 h-5 text-indigo-400 mr-2" />
                <h2 className="text-xl font-bold">Choose Your Design</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {[
                  { 
                    value: 'minimal', 
                    label: 'Minimal', 
                    desc: 'Clean lines with corner accents'
                  },
                  { 
                    value: 'consultant', 
                    label: 'Consultant', 
                    desc: 'Professional header bar with stripes'
                  },
                  { 
                    value: 'enterprise', 
                    label: 'Enterprise', 
                    desc: 'Formal double border with flourishes'
                  },
                  { 
                    value: 'modern', 
                    label: 'Modern', 
                    desc: 'Sidebar navigation with geometric shapes'
                  },
                ].map((template) => (
                  <button
                    key={template.value}
                    type="button"
                    onClick={() => setSelectedTheme(template.value as ContractTheme)}
                    className={cn(
                      "relative rounded-lg border-2 transition-all overflow-hidden group",
                      selectedTheme === template.value
                        ? "border-indigo-600 shadow-lg shadow-indigo-600/20"
                        : "border-zinc-800 hover:border-zinc-600"
                    )}
                  >
                    {/* PDF Preview Thumbnail */}
                    <div className="aspect-[8.5/11] bg-white relative">
                      <PDFViewerWrapper 
                        data={dummyData}
                        theme={template.value as ContractTheme}
                        logo={logoUrl}
                      />
                      {/* Overlay on hover */}
                      <div className={cn(
                        "absolute inset-0 transition-opacity pointer-events-none",
                        selectedTheme === template.value 
                          ? "bg-indigo-600/10" 
                          : "bg-transparent group-hover:bg-black/5"
                      )} />
                    </div>
                    
                    {/* Label */}
                    <div className={cn(
                      "p-3 text-center border-t-2",
                      selectedTheme === template.value
                        ? "bg-indigo-600/10 border-indigo-600"
                        : "bg-zinc-950 border-zinc-800"
                    )}>
                      <div className={cn(
                        "font-bold text-sm mb-1",
                        selectedTheme === template.value ? "text-indigo-400" : "text-white"
                      )}>
                        {template.label}
                      </div>
                      <div className="text-xs text-zinc-500">
                        {template.desc}
                      </div>
                    </div>
                    
                    {/* Selected Indicator */}
                    {selectedTheme === template.value && (
                      <div className="absolute top-2 right-2 bg-indigo-600 rounded-full p-1">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Logo Upload */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <ImageIcon className="w-5 h-5 text-indigo-400 mr-2" />
                <h2 className="text-xl font-bold">Company Logo</h2>
                <span className="ml-2 text-xs text-zinc-500">(Optional)</span>
              </div>
              
              {!logoUrl ? (
                <div>
                  <label
                    htmlFor="logo-upload"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-zinc-800 rounded-lg cursor-pointer hover:border-zinc-700 transition-colors"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 text-zinc-600 mb-2" />
                      <p className="text-sm text-zinc-400">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-zinc-500 mt-1">
                        PNG, JPG, or SVG (max 2MB)
                      </p>
                    </div>
                    <input
                      id="logo-upload"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleLogoUpload}
                    />
                  </label>
                </div>
              ) : (
                <div className="relative">
                  <div className="flex items-center justify-between p-4 bg-black border border-zinc-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <img
                        src={logoUrl}
                        alt="Company logo"
                        className="w-16 h-16 object-contain bg-white rounded p-1"
                      />
                      <div>
                        <p className="text-sm font-medium text-white">Logo uploaded</p>
                        <p className="text-xs text-zinc-500">Will appear on contract</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removeLogo}
                      className="text-red-500 hover:text-red-400 p-2"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Next Button (Step 1) */}
            {wizardStep === 1 && (
              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 border border-indigo-500 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Ready to customize your contract?</h3>
                <p className="text-indigo-100 text-sm mb-4">
                  You've chosen the <span className="capitalize font-semibold">{selectedTheme}</span> theme. 
                  Now let's add your project details.
                </p>
                <Button
                  onClick={() => setWizardStep(2)}
                  size="lg"
                  className="w-full bg-white text-indigo-600 hover:bg-gray-100 font-semibold"
                >
                  Next: Enter Contract Details
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            )}

            {/* Back Button & Forms (Step 2) */}
            {wizardStep === 2 && (
              <>
                <Button
                  variant="outline"
                  onClick={() => setWizardStep(1)}
                  className="border-zinc-800 hover:bg-zinc-900 w-full"
                >
                  <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                  Back to Design Selection
                </Button>

            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-sm mr-3">1</span>
                Contract Details
              </h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="clientName" className="text-zinc-300">
                    Client Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="clientName"
                    {...register('clientName', { required: true })}
                    placeholder="Acme Corporation"
                    className="mt-1.5 bg-black border-zinc-800 text-white placeholder:text-zinc-600"
                  />
                  {errors.clientName && (
                    <p className="text-xs text-red-500 mt-1">Client name is required</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="projectName" className="text-zinc-300">
                    Project Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="projectName"
                    {...register('projectName', { required: true })}
                    placeholder="E-commerce Platform Development"
                    className="mt-1.5 bg-black border-zinc-800 text-white placeholder:text-zinc-600"
                  />
                </div>

                <div>
                  <Label htmlFor="projectDescription" className="text-zinc-300">
                    Project Scope <span className="text-red-500">*</span>
                  </Label>
                  <textarea
                    id="projectDescription"
                    {...register('projectDescription', { required: true })}
                    placeholder="Describe the project scope, objectives, and requirements..."
                    rows={4}
                    className="mt-1.5 w-full rounded-md border border-zinc-800 bg-black px-3 py-2 text-sm text-white placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>

                <div>
                  <Label htmlFor="deliverables" className="text-zinc-300">
                    Key Deliverables
                  </Label>
                  <textarea
                    id="deliverables"
                    {...register('deliverables')}
                    placeholder="List the main deliverables (e.g., Responsive website, Admin dashboard, API integration...)"
                    rows={3}
                    className="mt-1.5 w-full rounded-md border border-zinc-800 bg-black px-3 py-2 text-sm text-white placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="startDate" className="text-zinc-300">
                      Start Date
                    </Label>
                    <Input
                      id="startDate"
                      type="date"
                      {...register('startDate')}
                      className="mt-1.5 bg-black border-zinc-800 text-white"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="completionDate" className="text-zinc-300">
                      Target Completion
                    </Label>
                    <Input
                      id="completionDate"
                      type="date"
                      {...register('completionDate')}
                      className="mt-1.5 bg-black border-zinc-800 text-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-sm mr-3">2</span>
                Pricing & Terms
              </h2>
              
              <div className="space-y-4">
                {/* Payment Type Selector */}
                <div>
                  <Label className="text-zinc-300 mb-3 block">
                    Payment Structure <span className="text-red-500">*</span>
                  </Label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'hourly', label: 'Hourly Rate', icon: Clock },
                      { value: 'monthly', label: 'Monthly Retainer', icon: Calendar },
                      { value: 'fixed', label: 'Fixed Price', icon: DollarSign },
                      { value: 'milestone', label: 'Milestones', icon: CheckCircle2 },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={cn(
                          "flex items-center space-x-2 p-3 rounded-lg border-2 cursor-pointer transition-all",
                          paymentType === option.value
                            ? "border-indigo-600 bg-indigo-600/10"
                            : "border-zinc-800 hover:border-zinc-700"
                        )}
                      >
                        <input
                          type="radio"
                          value={option.value}
                          {...register('paymentType')}
                          className="sr-only"
                        />
                        <option.icon className={cn(
                          "w-4 h-4",
                          paymentType === option.value ? "text-indigo-400" : "text-zinc-500"
                        )} />
                        <span className={cn(
                          "text-sm font-medium",
                          paymentType === option.value ? "text-white" : "text-zinc-400"
                        )}>
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Conditional Payment Fields */}
                {paymentType === 'hourly' && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="hourlyRate" className="text-zinc-300">
                        Hourly Rate ($)
                      </Label>
                      <Input
                        id="hourlyRate"
                        type="number"
                        {...register('hourlyRate', { required: true, min: 1 })}
                        className="mt-1.5 bg-black border-zinc-800 text-white"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="estimatedHours" className="text-zinc-300">
                        Estimated Hours
                      </Label>
                      <Input
                        id="estimatedHours"
                        type="number"
                        {...register('estimatedHours', { required: true, min: 1 })}
                        className="mt-1.5 bg-black border-zinc-800 text-white"
                      />
                    </div>
                  </div>
                )}

                {paymentType === 'monthly' && (
                  <div>
                    <Label htmlFor="monthlyRate" className="text-zinc-300">
                      Monthly Retainer ($)
                    </Label>
                    <Input
                      id="monthlyRate"
                      type="number"
                      {...register('monthlyRate', { required: true, min: 1 })}
                      className="mt-1.5 bg-black border-zinc-800 text-white"
                    />
                  </div>
                )}

                {paymentType === 'fixed' && (
                  <div>
                    <Label htmlFor="fixedPrice" className="text-zinc-300">
                      Total Project Price ($)
                    </Label>
                    <Input
                      id="fixedPrice"
                      type="number"
                      {...register('fixedPrice', { required: true, min: 1 })}
                      className="mt-1.5 bg-black border-zinc-800 text-white"
                    />
                  </div>
                )}

                {/* Milestone Builder */}
                {paymentType === 'milestone' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-zinc-300">Project Milestones</Label>
                      <Button
                        type="button"
                        size="sm"
                        onClick={addMilestone}
                        className="bg-indigo-600 hover:bg-indigo-700"
                      >
                        <Plus className="w-4 h-4 mr-1" />
                        Add Milestone
                      </Button>
                    </div>
                    
                    {milestoneFields.length === 0 && (
                      <div className="text-center py-8 border border-dashed border-zinc-800 rounded-lg">
                        <FileText className="w-12 h-12 text-zinc-700 mx-auto mb-2" />
                        <p className="text-sm text-zinc-500">
                          No milestones yet. Click "Add Milestone" to get started.
                        </p>
                      </div>
                    )}
                    
                    {milestoneFields.map((field, index) => (
                      <div
                        key={field.id}
                        className="p-4 bg-black border border-zinc-800 rounded-lg space-y-3"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-indigo-400">
                            Milestone {index + 1}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeMilestone(index)}
                            className="text-red-500 hover:text-red-400"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div>
                          <Label htmlFor={`milestones.${index}.name`} className="text-zinc-300 text-xs">
                            Milestone Name
                          </Label>
                          <Input
                            id={`milestones.${index}.name`}
                            {...register(`milestones.${index}.name` as const)}
                            placeholder="e.g., MVP Delivery"
                            className="mt-1 bg-zinc-950 border-zinc-800 text-white text-sm"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor={`milestones.${index}.description`} className="text-zinc-300 text-xs">
                            Description
                          </Label>
                          <textarea
                            id={`milestones.${index}.description`}
                            {...register(`milestones.${index}.description` as const)}
                            placeholder="Describe what will be delivered..."
                            rows={2}
                            className="mt-1 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <Label htmlFor={`milestones.${index}.amount`} className="text-zinc-300 text-xs">
                              Payment ($)
                            </Label>
                            <Input
                              id={`milestones.${index}.amount`}
                              type="number"
                              {...register(`milestones.${index}.amount` as const, { valueAsNumber: true })}
                              placeholder="0"
                              className="mt-1 bg-zinc-950 border-zinc-800 text-white text-sm"
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor={`milestones.${index}.dueDate`} className="text-zinc-300 text-xs">
                              Target Date
                            </Label>
                            <Input
                              id={`milestones.${index}.dueDate`}
                              type="date"
                              {...register(`milestones.${index}.dueDate` as const)}
                              className="mt-1 bg-zinc-950 border-zinc-800 text-white text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Upfront Percentage Slider */}
                {paymentType !== 'milestone' && (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Label className="text-zinc-300 flex items-center">
                        <Percent className="w-4 h-4 mr-2" />
                        Upfront Payment
                      </Label>
                      <span className="text-lg font-bold text-indigo-400">
                        {upfrontPercentage}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="5"
                      {...register('upfrontPercentage', { valueAsNumber: true })}
                      className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                    />
                    <div className="flex justify-between text-xs text-zinc-500 mt-1">
                      <span>0%</span>
                      <span>50%</span>
                      <span>100%</span>
                    </div>
                  </div>
                )}

                {/* Upfront percentage for milestone */}
                {paymentType === 'milestone' && (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Label className="text-zinc-300 flex items-center">
                        <Percent className="w-4 h-4 mr-2" />
                        Initial Upfront Payment
                      </Label>
                      <span className="text-lg font-bold text-indigo-400">
                        {upfrontPercentage}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="50"
                      step="5"
                      {...register('upfrontPercentage', { valueAsNumber: true })}
                      className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                    />
                    <p className="text-xs text-zinc-500 mt-2">
                      This will be charged on contract signing, before milestones begin
                    </p>
                  </div>
                )}

                {/* Total Cost Summary */}
                <div className="bg-black border border-zinc-800 rounded-lg p-4">
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-zinc-400">Total Project Value:</span>
                    <span className="text-2xl font-bold text-white">
                      ${totalCost.toLocaleString()}
                    </span>
                  </div>
                  
                  {paymentType !== 'milestone' && (
                    <>
                      <div className="flex justify-between items-center text-xs text-zinc-500">
                        <span>Upfront ({upfrontPercentage}%):</span>
                        <span>${upfrontAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs text-zinc-500">
                        <span>Remaining ({100 - upfrontPercentage}%):</span>
                        <span>${remainingAmount.toLocaleString()}</span>
                      </div>
                    </>
                  )}
                  
                  {paymentType === 'milestone' && milestoneFields.length > 0 && (
                    <>
                      <div className="flex justify-between items-center text-xs text-zinc-500">
                        <span>Upfront ({upfrontPercentage}%):</span>
                        <span>${upfrontAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs text-zinc-500">
                        <span>Via Milestones:</span>
                        <span>${formData.milestones.reduce((sum: number, m: Milestone) => sum + (m.amount || 0), 0).toLocaleString()}</span>
                      </div>
                    </>
                  )}
                </div>

                <div>
                  <Label htmlFor="paymentTerms" className="text-zinc-300">
                    Additional Payment Terms
                  </Label>
                  <Input
                    id="paymentTerms"
                    {...register('paymentTerms')}
                    placeholder="e.g., Payment due within 7 days of invoice"
                    className="mt-1.5 bg-black border-zinc-800 text-white placeholder:text-zinc-600"
                  />
                </div>
              </div>
            </div>

            {/* Protection Clauses */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-sm mr-3">3</span>
                Protection Clauses
              </h2>
              
              <div className="space-y-4">
                <label className="flex items-start space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    {...register('scopeCreepProtection')}
                    className="mt-1 w-4 h-4 rounded border-zinc-700 bg-black text-indigo-600 focus:ring-indigo-600 focus:ring-offset-0"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-white group-hover:text-indigo-400 transition-colors">
                      Scope Creep Protection
                    </div>
                    <p className="text-sm text-zinc-400 mt-1">
                      Automatically bill additional work outside the defined scope at your hourly rate
                    </p>
                  </div>
                </label>

                <label className="flex items-start space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    {...register('ipProtection')}
                    className="mt-1 w-4 h-4 rounded border-zinc-700 bg-black text-indigo-600 focus:ring-indigo-600 focus:ring-offset-0"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-white group-hover:text-indigo-400 transition-colors">
                      IP Protection Clause
                    </div>
                    <p className="text-sm text-zinc-400 mt-1">
                      Retain ownership of code until full payment is received
                    </p>
                  </div>
                </label>
              </div>
            </div>
              </>
            )}

            {/* Mobile Preview Button */}
            <div className="lg:hidden">
              <Button
                onClick={() => setShowPreview(true)}
                disabled={wizardStep === 2 && !isFormValid}
                className="w-full bg-indigo-600 hover:bg-indigo-700"
              >
                <FileText className="w-4 h-4 mr-2" />
                Preview Contract
              </Button>
            </div>
          </div>

          {/* Right Side - PDF Preview (Step 2 Only) */}
          {wizardStep === 2 && (
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold">Live Preview</h2>
                    <p className="text-xs text-zinc-500 mt-1">
                      Theme: <span className="text-indigo-400 capitalize">{selectedTheme}</span>
                      {logoUrl && ' • Logo included'}
                    </p>
                  </div>
                  
                  {isFormValid && (
                    <PDFDownloadLink
                      document={<ContractDocument data={previewData} theme={selectedTheme} logo={logoUrl} />}
                      fileName={`${previewData.projectName.replace(/\s+/g, '-')}-contract.pdf`}
                      className="inline-flex"
                    >
                      {({ loading }) => (
                        <Button
                          size="sm"
                          onClick={handleDownload}
                          disabled={loading}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          {loading ? 'Generating...' : 'Download PDF'}
                        </Button>
                      )}
                    </PDFDownloadLink>
                  )}
                </div>

                {!isFormValid ? (
                  <div className="aspect-[8.5/11] bg-black border border-zinc-800 rounded-lg flex items-center justify-center">
                    <div className="text-center p-8">
                      <FileText className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
                      <p className="text-zinc-500 text-sm">
                        Fill in the required fields to see your contract preview
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-[8.5/11] bg-white rounded-lg overflow-hidden border-2 border-zinc-800">
                    <PDFViewerWrapper 
                      data={previewData}
                      theme={selectedTheme}
                      logo={logoUrl}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="border-t border-zinc-800 bg-gradient-to-b from-black to-zinc-950 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need Help Building Your Project?</h2>
            <p className="text-zinc-400 mb-8">
              Stryxon specializes in enterprise web applications, cloud infrastructure, and AI engineering.
              We've helped 100+ agencies deliver world-class software.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  <Sparkles className="w-5 h-5 mr-2" />
                  View Our Services
                </Button>
              </Link>
              
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="border-zinc-800 hover:bg-zinc-900">
                  See Case Studies
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
    </div>
  );
}
