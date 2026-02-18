"use client";

import React from 'react';
import { usePDF } from '@react-pdf/renderer';
import { ContractDocument, ContractData } from './ContractDocument';
import { Loader2 } from 'lucide-react';

interface PDFViewerWrapperProps {
  data: ContractData;
  theme: 'minimal' | 'consultant' | 'enterprise' | 'modern';
  logo?: string;
}

const PDFViewerWrapper: React.FC<PDFViewerWrapperProps> = ({ data, theme, logo }) => {
  const [instance] = usePDF({ 
    document: <ContractDocument data={data} theme={theme} logo={logo} /> 
  });

  if (instance.loading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-white">
        <div className="text-center">
          <Loader2 className="w-8 h-8 text-indigo-600 animate-spin mx-auto mb-2" />
          <p className="text-sm text-gray-600">Generating preview...</p>
        </div>
      </div>
    );
  }

  if (instance.error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-white">
        <div className="text-center p-8">
          <p className="text-sm text-red-600">Error loading preview</p>
          <p className="text-xs text-gray-500 mt-2">{instance.error}</p>
        </div>
      </div>
    );
  }

  if (instance.url) {
    return (
      <iframe
        src={instance.url}
        className="w-full h-full border-0"
        title="Contract Preview"
      />
    );
  }

  return null;
};

export default PDFViewerWrapper;

