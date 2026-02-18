import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Svg,
  Path,
  Rect,
  Circle,
  Line,
} from '@react-pdf/renderer';

export type ContractTheme = 'minimal' | 'consultant' | 'enterprise' | 'modern';

export interface Milestone {
  id: string;
  name: string;
  description: string;
  amount: number;
  dueDate: string;
}

export type PaymentType = 'hourly' | 'monthly' | 'fixed' | 'milestone';

export interface ContractData {
  clientName: string;
  projectName: string;
  projectDescription: string;
  deliverables: string;
  
  paymentType: PaymentType;
  hourlyRate: number;
  estimatedHours: number;
  monthlyRate: number;
  fixedPrice: number;
  upfrontPercentage: number;
  milestones: Milestone[];
  
  paymentTerms: string;
  scopeCreepProtection: boolean;
  ipProtection: boolean;
  startDate: string;
  completionDate: string;
}

interface ContractDocumentProps {
  data: ContractData;
  theme?: ContractTheme;
  logo?: string;
}

// MINIMAL THEME - Clean, whitespace-heavy, Helvetica
const minimalStyles = StyleSheet.create({
  page: { padding: 50, fontSize: 10, fontFamily: 'Helvetica', backgroundColor: '#ffffff' },
  header: { marginBottom: 30, paddingBottom: 15, borderBottom: '1 solid #e5e7eb', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  headerContent: { flex: 1 },
  logo: { width: 60, height: 60, objectFit: 'contain', marginLeft: 15 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 5, color: '#111827', letterSpacing: -0.5 },
  subtitle: { fontSize: 9, color: '#6b7280', marginTop: 5 },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 11, fontWeight: 'bold', marginBottom: 10, color: '#111827', textTransform: 'uppercase', letterSpacing: 1 },
  text: { fontSize: 10, lineHeight: 1.6, color: '#374151', marginBottom: 5 },
  boldText: { fontSize: 10, fontWeight: 'bold', color: '#111827' },
  row: { flexDirection: 'row', marginBottom: 6 },
  label: { width: '35%', fontSize: 10, color: '#6b7280' },
  value: { width: '65%', fontSize: 10, color: '#111827' },
  highlight: { backgroundColor: '#fef3c7', padding: 12, marginVertical: 10, borderLeft: '3 solid #f59e0b', borderRadius: 2 },
  highlightText: { fontSize: 9, lineHeight: 1.5, color: '#92400e' },
  signatureSection: { marginTop: 40, paddingTop: 20, borderTop: '1 solid #e5e7eb' },
  signatureRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 },
  signatureBox: { width: '45%' },
  signatureLine: { borderTop: '1 solid #000', marginTop: 40, marginBottom: 5 },
  signatureLabel: { fontSize: 9, color: '#6b7280' },
  signatureDate: { fontSize: 8, color: '#9ca3af', marginTop: 2 },
});

// CONSULTANT THEME - Full-width header/footer bars, two-column layout
const consultantStyles = StyleSheet.create({
  page: { fontSize: 10, fontFamily: 'Helvetica', backgroundColor: '#ffffff' },
  headerBar: { backgroundColor: '#1e293b', padding: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#ffffff', letterSpacing: 0.5 },
  subtitle: { fontSize: 9, color: '#cbd5e1', marginTop: 5 },
  logo: { width: 50, height: 50, objectFit: 'contain' },
  content: { padding: 40 },
  section: { marginBottom: 18 },
  sectionTitle: { fontSize: 12, fontWeight: 'bold', marginBottom: 10, color: '#1e293b', borderBottom: '2 solid #3b82f6', paddingBottom: 5 },
  twoColumnRow: { flexDirection: 'row', marginBottom: 8 },
  column: { width: '48%', marginRight: '4%' },
  label: { fontSize: 9, color: '#64748b', marginBottom: 3, fontWeight: 'bold' },
  value: { fontSize: 10, color: '#1e293b' },
  text: { fontSize: 10, lineHeight: 1.6, color: '#475569', marginBottom: 5 },
  highlight: { backgroundColor: '#dbeafe', padding: 12, marginVertical: 10, border: '2 solid #3b82f6' },
  highlightText: { fontSize: 9, lineHeight: 1.5, color: '#1e40af', fontWeight: 'bold' },
  signatureSection: { marginTop: 40, paddingTop: 20, borderTop: '2 solid #3b82f6' },
  signatureRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 },
  signatureBox: { width: '45%' },
  signatureLine: { borderTop: '2 solid #1e293b', marginTop: 40, marginBottom: 5 },
  signatureLabel: { fontSize: 9, color: '#475569', fontWeight: 'bold' },
  signatureDate: { fontSize: 8, color: '#64748b', marginTop: 2 },
});

// ENTERPRISE THEME - Double border, serif headings, watermark
const enterpriseStyles = StyleSheet.create({
  page: { padding: 50, fontSize: 10, fontFamily: 'Helvetica', backgroundColor: '#ffffff' },
  watermark: { position: 'absolute', top: 200, left: 100, opacity: 0.05, width: 400, height: 400 },
  outerBorder: { border: '3 double #000000', padding: 15 },
  innerBorder: { border: '1 solid #000000', padding: 20 },
  header: { marginBottom: 25, paddingBottom: 15, borderBottom: '2 solid #000000', textAlign: 'center' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#000000', fontFamily: 'Times-Roman', letterSpacing: 1 },
  subtitle: { fontSize: 10, color: '#4b5563', marginTop: 8, fontFamily: 'Times-Roman', fontStyle: 'italic' },
  logo: { width: 70, height: 70, objectFit: 'contain', marginBottom: 10, alignSelf: 'center' },
  section: { marginBottom: 16 },
  sectionTitle: { fontSize: 13, fontWeight: 'bold', marginBottom: 10, color: '#000000', fontFamily: 'Times-Roman', textAlign: 'center', borderTop: '1 solid #000000', borderBottom: '1 solid #000000', paddingVertical: 6 },
  text: { fontSize: 10, lineHeight: 1.7, color: '#1f2937', marginBottom: 5, textAlign: 'justify' },
  boldText: { fontSize: 10, fontWeight: 'bold', color: '#000000', fontFamily: 'Times-Roman' },
  row: { flexDirection: 'row', marginBottom: 6, borderBottom: '1 dotted #d1d5db', paddingBottom: 4 },
  label: { width: '40%', fontSize: 10, fontWeight: 'bold', color: '#000000' },
  value: { width: '60%', fontSize: 10, color: '#374151' },
  highlight: { backgroundColor: '#f9fafb', padding: 12, marginVertical: 10, border: '1 solid #9ca3af' },
  highlightText: { fontSize: 9, lineHeight: 1.6, color: '#374151', fontFamily: 'Times-Roman', fontStyle: 'italic' },
  signatureSection: { marginTop: 30, paddingTop: 15, borderTop: '2 double #78716c' },
  signatureRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 25 },
  signatureBox: { width: '45%', textAlign: 'center' },
  signatureLine: { borderTop: '1 solid #000', marginTop: 35, marginBottom: 5 },
  signatureLabel: { fontSize: 9, color: '#78716c', fontFamily: 'Times-Roman', textAlign: 'center' },
  signatureDate: { fontSize: 8, color: '#a8a29e', marginTop: 2, textAlign: 'center' },
});

// MODERN THEME - Sidebar with section numbers
const modernStyles = StyleSheet.create({
  page: { flexDirection: 'row', fontSize: 10, fontFamily: 'Helvetica', backgroundColor: '#ffffff' },
  sidebar: { width: '15%', backgroundColor: '#3b82f6', padding: 15, paddingTop: 30 },
  sectionNumber: { fontSize: 28, fontWeight: 'bold', color: '#ffffff', marginBottom: 5 },
  sectionLabel: { fontSize: 8, color: '#dbeafe', marginBottom: 25, textTransform: 'uppercase' },
  mainContent: { width: '85%', padding: 35 },
  header: { marginBottom: 25, paddingBottom: 15, borderBottom: '3 solid #3b82f6', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  headerContent: { flex: 1 },
  logo: { width: 55, height: 55, objectFit: 'contain', marginLeft: 10 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#1e293b', letterSpacing: -0.5 },
  subtitle: { fontSize: 9, color: '#64748b', marginTop: 5 },
  section: { marginBottom: 18 },
  sectionTitle: { fontSize: 13, fontWeight: 'bold', marginBottom: 10, color: '#3b82f6', textTransform: 'uppercase', letterSpacing: 0.5 },
  text: { fontSize: 10, lineHeight: 1.6, color: '#334155', marginBottom: 5 },
  boldText: { fontSize: 10, fontWeight: 'bold', color: '#1e293b' },
  row: { flexDirection: 'row', marginBottom: 6, backgroundColor: '#f8fafc', padding: 6 },
  label: { width: '35%', fontSize: 10, fontWeight: 'bold', color: '#475569' },
  value: { width: '65%', fontSize: 10, color: '#1e293b' },
  highlight: { backgroundColor: '#dbeafe', padding: 12, marginVertical: 10, borderLeft: '4 solid #3b82f6' },
  highlightText: { fontSize: 9, lineHeight: 1.5, color: '#1e40af' },
  signatureSection: { marginTop: 30, paddingTop: 15, borderTop: '2 solid #6366f1' },
  signatureRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 25 },
  signatureBox: { width: '45%' },
  signatureLine: { borderTop: '2 solid #6366f1', marginTop: 35, marginBottom: 5 },
  signatureLabel: { fontSize: 9, color: '#4b5563', fontWeight: 'bold' },
  signatureDate: { fontSize: 8, color: '#9ca3af', marginTop: 2 },
});

export const ContractDocument: React.FC<ContractDocumentProps> = ({ data, theme = 'minimal', logo }) => {
  const getTotalCost = () => {
    switch (data.paymentType) {
      case 'hourly': return data.hourlyRate * data.estimatedHours;
      case 'monthly': return data.monthlyRate;
      case 'fixed': return data.fixedPrice;
      case 'milestone': return data.milestones.reduce((sum, m) => sum + m.amount, 0);
      default: return 0;
    }
  };
  
  const totalCost = getTotalCost();
  const upfrontPayment = totalCost * (data.upfrontPercentage / 100);

  // MINIMAL THEME
  if (theme === 'minimal') {
    return (
      <Document>
        <Page size="A4" style={minimalStyles.page}>
          {/* Corner Decorations */}
          <Svg style={{ position: 'absolute', top: 20, left: 20 }} width="40" height="40">
            <Path d="M 0 20 L 0 0 L 20 0" stroke="#3b82f6" strokeWidth="2" fill="none" />
            <Circle cx="20" cy="20" r="2" fill="#3b82f6" />
          </Svg>
          <Svg style={{ position: 'absolute', top: 20, right: 20 }} width="40" height="40">
            <Path d="M 40 20 L 40 0 L 20 0" stroke="#3b82f6" strokeWidth="2" fill="none" />
            <Circle cx="20" cy="20" r="2" fill="#3b82f6" />
          </Svg>
          
          <View style={minimalStyles.header}>
            <View style={minimalStyles.headerContent}>
              <Text style={minimalStyles.title}>Software Development Contract</Text>
              <Text style={minimalStyles.subtitle}>Generated {new Date().toLocaleDateString()}</Text>
            </View>
            {logo && <Image src={logo} style={minimalStyles.logo} />}
          </View>
          <View style={minimalStyles.section}>
            <Text style={minimalStyles.sectionTitle}>Contract Parties</Text>
            <View style={minimalStyles.row}><Text style={minimalStyles.label}>Client:</Text><Text style={minimalStyles.value}>{data.clientName}</Text></View>
            <View style={minimalStyles.row}><Text style={minimalStyles.label}>Project:</Text><Text style={minimalStyles.value}>{data.projectName}</Text></View>
            <View style={minimalStyles.row}><Text style={minimalStyles.label}>Start Date:</Text><Text style={minimalStyles.value}>{data.startDate}</Text></View>
            <View style={minimalStyles.row}><Text style={minimalStyles.label}>Target Completion:</Text><Text style={minimalStyles.value}>{data.completionDate}</Text></View>
          </View>
          <View style={minimalStyles.section}>
            <Text style={minimalStyles.sectionTitle}>Scope of Services</Text>
            <Text style={minimalStyles.text}>{data.projectDescription}</Text>
            {data.deliverables && (
              <View style={{ marginTop: 8 }}>
                <Text style={minimalStyles.boldText}>Key Deliverables:</Text>
                <Text style={minimalStyles.text}>{data.deliverables}</Text>
              </View>
            )}
          </View>
          <View style={minimalStyles.section}>
            <Text style={minimalStyles.sectionTitle}>Payment Terms</Text>
            <View style={minimalStyles.row}><Text style={minimalStyles.label}>Payment Type:</Text><Text style={minimalStyles.value}>{data.paymentType.toUpperCase()}</Text></View>
            {data.paymentType === 'hourly' && (
              <><View style={minimalStyles.row}><Text style={minimalStyles.label}>Hourly Rate:</Text><Text style={minimalStyles.value}>${data.hourlyRate}/hour</Text></View>
              <View style={minimalStyles.row}><Text style={minimalStyles.label}>Estimated Hours:</Text><Text style={minimalStyles.value}>{data.estimatedHours} hours</Text></View></>
            )}
            {data.paymentType === 'monthly' && (
              <View style={minimalStyles.row}><Text style={minimalStyles.label}>Monthly Rate:</Text><Text style={minimalStyles.value}>${data.monthlyRate.toLocaleString()}/month</Text></View>
            )}
            {data.paymentType === 'fixed' && (
              <View style={minimalStyles.row}><Text style={minimalStyles.label}>Fixed Price:</Text><Text style={minimalStyles.value}>${data.fixedPrice.toLocaleString()}</Text></View>
            )}
            <View style={minimalStyles.row}><Text style={minimalStyles.label}>Total Project Value:</Text><Text style={minimalStyles.value}>${totalCost.toLocaleString()}</Text></View>
            <View style={minimalStyles.row}><Text style={minimalStyles.label}>Upfront Payment ({data.upfrontPercentage}%):</Text><Text style={minimalStyles.value}>${upfrontPayment.toLocaleString()}</Text></View>
            <View style={minimalStyles.row}><Text style={minimalStyles.label}>Remaining Balance:</Text><Text style={minimalStyles.value}>${(totalCost - upfrontPayment).toLocaleString()}</Text></View>
            {data.paymentTerms && <Text style={[minimalStyles.text, { marginTop: 6 }]}>{data.paymentTerms}</Text>}
          </View>
          <View style={minimalStyles.section}>
            <Text style={minimalStyles.sectionTitle}>Protection Clauses</Text>
            {data.scopeCreepProtection && (
              <View style={minimalStyles.highlight}>
                <Text style={minimalStyles.highlightText}>✓ SCOPE PROTECTION: Additional work outside the defined scope will be billed at ${data.hourlyRate}/hour</Text>
              </View>
            )}
            {data.ipProtection && (
              <View style={[minimalStyles.highlight, { marginTop: 8 }]}>
                <Text style={minimalStyles.highlightText}>✓ IP PROTECTION: Client receives code ownership upon full payment completion</Text>
              </View>
            )}
          </View>
          
          {/* Signature Section */}
          <View style={minimalStyles.signatureSection}>
            <Text style={minimalStyles.sectionTitle}>Agreement Signatures</Text>
            <View style={minimalStyles.signatureRow}>
              <View style={minimalStyles.signatureBox}>
                <View style={minimalStyles.signatureLine} />
                <Text style={minimalStyles.signatureLabel}>Client Signature</Text>
                <Text style={minimalStyles.signatureDate}>Date: _______________</Text>
              </View>
              <View style={minimalStyles.signatureBox}>
                <View style={minimalStyles.signatureLine} />
                <Text style={minimalStyles.signatureLabel}>Developer Signature</Text>
                <Text style={minimalStyles.signatureDate}>Date: _______________</Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    );
  }

  // CONSULTANT THEME
  if (theme === 'consultant') {
    return (
      <Document>
        <Page size="A4" style={consultantStyles.page}>
          <View style={consultantStyles.headerBar}>
            {/* Decorative stripes */}
            <Svg style={{ position: 'absolute', left: 0, top: 0 }} width="100" height="80">
              <Line x1="0" y1="20" x2="30" y2="0" stroke="#3b82f6" strokeWidth="3" opacity="0.3" />
              <Line x1="0" y1="40" x2="50" y2="0" stroke="#3b82f6" strokeWidth="3" opacity="0.2" />
              <Line x1="0" y1="60" x2="70" y2="0" stroke="#3b82f6" strokeWidth="3" opacity="0.1" />
            </Svg>
            
            <View>
              <Text style={consultantStyles.title}>Software Development Contract</Text>
              <Text style={consultantStyles.subtitle}>Professional Services Agreement</Text>
            </View>
            {logo && <Image src={logo} style={consultantStyles.logo} />}
          </View>
          <View style={consultantStyles.content}>
            <View style={consultantStyles.section}>
              <Text style={consultantStyles.sectionTitle}>1. Contract Parties & Timeline</Text>
              <View style={consultantStyles.twoColumnRow}>
                <View style={consultantStyles.column}>
                  <Text style={consultantStyles.label}>CLIENT</Text>
                  <Text style={consultantStyles.value}>{data.clientName}</Text>
                </View>
                <View style={consultantStyles.column}>
                  <Text style={consultantStyles.label}>PROJECT</Text>
                  <Text style={consultantStyles.value}>{data.projectName}</Text>
                </View>
              </View>
              <View style={consultantStyles.twoColumnRow}>
                <View style={consultantStyles.column}>
                  <Text style={consultantStyles.label}>START DATE</Text>
                  <Text style={consultantStyles.value}>{data.startDate}</Text>
                </View>
                <View style={consultantStyles.column}>
                  <Text style={consultantStyles.label}>COMPLETION</Text>
                  <Text style={consultantStyles.value}>{data.completionDate}</Text>
                </View>
              </View>
            </View>
            <View style={consultantStyles.section}>
              <Text style={consultantStyles.sectionTitle}>2. Scope of Services</Text>
              <Text style={consultantStyles.text}>{data.projectDescription}</Text>
              {data.deliverables && (
                <View style={{ marginTop: 8 }}>
                  <Text style={[consultantStyles.label, { marginBottom: 4 }]}>DELIVERABLES</Text>
                  <Text style={consultantStyles.text}>{data.deliverables}</Text>
                </View>
              )}
            </View>
            <View style={consultantStyles.section}>
              <Text style={consultantStyles.sectionTitle}>3. Financial Terms</Text>
              <View style={consultantStyles.twoColumnRow}>
                <View style={consultantStyles.column}>
                  <Text style={consultantStyles.label}>PAYMENT STRUCTURE</Text>
                  <Text style={consultantStyles.value}>{data.paymentType.toUpperCase()}</Text>
                  {data.paymentType === 'hourly' && <Text style={consultantStyles.text}>${data.hourlyRate}/hr × {data.estimatedHours} hours</Text>}
                  {data.paymentType === 'monthly' && <Text style={consultantStyles.text}>${data.monthlyRate.toLocaleString()}/month</Text>}
                  {data.paymentType === 'fixed' && <Text style={consultantStyles.text}>One-time payment</Text>}
                </View>
                <View style={consultantStyles.column}>
                  <Text style={consultantStyles.label}>TOTAL VALUE</Text>
                  <Text style={[consultantStyles.value, { fontSize: 14, fontWeight: 'bold' }]}>${totalCost.toLocaleString()}</Text>
                </View>
              </View>
              <View style={consultantStyles.twoColumnRow}>
                <View style={consultantStyles.column}>
                  <Text style={consultantStyles.label}>UPFRONT ({data.upfrontPercentage}%)</Text>
                  <Text style={consultantStyles.value}>${upfrontPayment.toLocaleString()}</Text>
                </View>
                <View style={consultantStyles.column}>
                  <Text style={consultantStyles.label}>REMAINING</Text>
                  <Text style={consultantStyles.value}>${(totalCost - upfrontPayment).toLocaleString()}</Text>
                </View>
              </View>
              {data.paymentTerms && <Text style={[consultantStyles.text, { marginTop: 8 }]}>{data.paymentTerms}</Text>}
            </View>
            <View style={consultantStyles.section}>
              <Text style={consultantStyles.sectionTitle}>4. Protection Clauses</Text>
              {data.scopeCreepProtection && (
                <View style={consultantStyles.highlight}>
                  <Text style={consultantStyles.highlightText}>✓ SCOPE PROTECTION: Out-of-scope work at ${data.hourlyRate}/hr</Text>
                </View>
              )}
              {data.ipProtection && (
                <View style={[consultantStyles.highlight, { marginTop: 8, backgroundColor: '#f0fdf4', borderColor: '#22c55e' }]}>
                  <Text style={[consultantStyles.highlightText, { color: '#15803d' }]}>✓ IP PROTECTION: Code ownership transfers upon final payment</Text>
                </View>
              )}
            </View>
          
            {/* Signature Section */}
            <View style={consultantStyles.signatureSection}>
              <Text style={consultantStyles.sectionTitle}>5. Agreement Execution</Text>
              <View style={consultantStyles.signatureRow}>
                <View style={consultantStyles.signatureBox}>
                  <View style={consultantStyles.signatureLine} />
                  <Text style={consultantStyles.signatureLabel}>CLIENT SIGNATURE</Text>
                  <Text style={consultantStyles.signatureDate}>Date: _______________</Text>
                </View>
                <View style={consultantStyles.signatureBox}>
                  <View style={consultantStyles.signatureLine} />
                  <Text style={consultantStyles.signatureLabel}>DEVELOPER SIGNATURE</Text>
                  <Text style={consultantStyles.signatureDate}>Date: _______________</Text>
                </View>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    );
  }

  // ENTERPRISE THEME
  if (theme === 'enterprise') {
    return (
      <Document>
        <Page size="A4" style={enterpriseStyles.page}>
          {logo && <Image src={logo} style={enterpriseStyles.watermark} />}
          
          {/* Ornamental corner flourishes */}
          <Svg style={{ position: 'absolute', top: 35, left: 35 }} width="30" height="30">
            <Path d="M 0 0 L 30 0 L 30 5 L 5 5 L 5 30 L 0 30 Z" fill="#92400e" />
            <Rect x="0" y="0" width="3" height="3" fill="#d97706" />
          </Svg>
          <Svg style={{ position: 'absolute', top: 35, right: 35 }} width="30" height="30">
            <Path d="M 30 0 L 0 0 L 0 5 L 25 5 L 25 30 L 30 30 Z" fill="#92400e" />
            <Rect x="27" y="0" width="3" height="3" fill="#d97706" />
          </Svg>
          <Svg style={{ position: 'absolute', bottom: 35, left: 35 }} width="30" height="30">
            <Path d="M 0 30 L 30 30 L 30 25 L 5 25 L 5 0 L 0 0 Z" fill="#92400e" />
            <Rect x="0" y="27" width="3" height="3" fill="#d97706" />
          </Svg>
          <Svg style={{ position: 'absolute', bottom: 35, right: 35 }} width="30" height="30">
            <Path d="M 30 30 L 0 30 L 0 25 L 25 25 L 25 0 L 30 0 Z" fill="#92400e" />
            <Rect x="27" y="27" width="3" height="3" fill="#d97706" />
          </Svg>
          
          <View style={enterpriseStyles.outerBorder}>
            <View style={enterpriseStyles.innerBorder}>
              <View style={enterpriseStyles.header}>
                {logo && <Image src={logo} style={enterpriseStyles.logo} />}
                <Text style={enterpriseStyles.title}>SOFTWARE DEVELOPMENT CONTRACT</Text>
                <Text style={enterpriseStyles.subtitle}>Entered into on {new Date().toLocaleDateString()}</Text>
              </View>
              <View style={enterpriseStyles.section}>
                <Text style={enterpriseStyles.sectionTitle}>ARTICLE I: PARTIES & TIMELINE</Text>
                <View style={enterpriseStyles.row}><Text style={enterpriseStyles.label}>Client:</Text><Text style={enterpriseStyles.value}>{data.clientName}</Text></View>
                <View style={enterpriseStyles.row}><Text style={enterpriseStyles.label}>Project:</Text><Text style={enterpriseStyles.value}>{data.projectName}</Text></View>
                <View style={enterpriseStyles.row}><Text style={enterpriseStyles.label}>Commencement Date:</Text><Text style={enterpriseStyles.value}>{data.startDate}</Text></View>
                <View style={enterpriseStyles.row}><Text style={enterpriseStyles.label}>Completion Date:</Text><Text style={enterpriseStyles.value}>{data.completionDate}</Text></View>
              </View>
              <View style={enterpriseStyles.section}>
                <Text style={enterpriseStyles.sectionTitle}>ARTICLE II: SCOPE OF SERVICES</Text>
                <Text style={enterpriseStyles.text}>{data.projectDescription}</Text>
                {data.deliverables && (
                  <View style={{ marginTop: 8 }}>
                    <Text style={[enterpriseStyles.text, { fontWeight: 'bold', fontFamily: 'Times-Bold' }]}>Deliverables:</Text>
                    <Text style={enterpriseStyles.text}>{data.deliverables}</Text>
                  </View>
                )}
              </View>
              <View style={enterpriseStyles.section}>
                <Text style={enterpriseStyles.sectionTitle}>ARTICLE III: COMPENSATION</Text>
                <View style={enterpriseStyles.row}><Text style={enterpriseStyles.label}>Payment Structure:</Text><Text style={enterpriseStyles.value}>{data.paymentType.toUpperCase()}</Text></View>
                {data.paymentType === 'hourly' && (
                  <><View style={enterpriseStyles.row}><Text style={enterpriseStyles.label}>Hourly Rate:</Text><Text style={enterpriseStyles.value}>${data.hourlyRate} per hour</Text></View>
                  <View style={enterpriseStyles.row}><Text style={enterpriseStyles.label}>Estimated Hours:</Text><Text style={enterpriseStyles.value}>{data.estimatedHours} hours</Text></View></>
                )}
                {data.paymentType === 'monthly' && (
                  <View style={enterpriseStyles.row}><Text style={enterpriseStyles.label}>Monthly Retainer:</Text><Text style={enterpriseStyles.value}>${data.monthlyRate.toLocaleString()}</Text></View>
                )}
                {data.paymentType === 'fixed' && (
                  <View style={enterpriseStyles.row}><Text style={enterpriseStyles.label}>Fixed Project Fee:</Text><Text style={enterpriseStyles.value}>${data.fixedPrice.toLocaleString()}</Text></View>
                )}
                <View style={enterpriseStyles.row}><Text style={enterpriseStyles.label}>Total Contract Value:</Text><Text style={enterpriseStyles.value}>${totalCost.toLocaleString()}</Text></View>
                <View style={enterpriseStyles.row}><Text style={enterpriseStyles.label}>Initial Payment ({data.upfrontPercentage}%):</Text><Text style={enterpriseStyles.value}>${upfrontPayment.toLocaleString()}</Text></View>
                <View style={enterpriseStyles.row}><Text style={enterpriseStyles.label}>Balance Due:</Text><Text style={enterpriseStyles.value}>${(totalCost - upfrontPayment).toLocaleString()}</Text></View>
                {data.paymentTerms && <Text style={[enterpriseStyles.text, { marginTop: 6 }]}>{data.paymentTerms}</Text>}
              </View>
              <View style={enterpriseStyles.section}>
                <Text style={enterpriseStyles.sectionTitle}>ARTICLE IV: PROTECTIVE CLAUSES</Text>
                {data.scopeCreepProtection && (
                  <View style={enterpriseStyles.highlight}>
                    <Text style={enterpriseStyles.highlightText}>SCOPE LIMITATION: Work beyond the defined scope shall be billed separately at ${data.hourlyRate}/hour</Text>
                  </View>
                )}
                {data.ipProtection && (
                  <View style={[enterpriseStyles.highlight, { marginTop: 8 }]}>
                    <Text style={enterpriseStyles.highlightText}>INTELLECTUAL PROPERTY: All code and deliverables remain property of Developer until full payment is received</Text>
                  </View>
                )}
              </View>
              
              {/* Signature Section */}
              <View style={enterpriseStyles.signatureSection}>
                <Text style={enterpriseStyles.sectionTitle}>ARTICLE V: EXECUTION</Text>
                <View style={enterpriseStyles.signatureRow}>
                  <View style={enterpriseStyles.signatureBox}>
                    <View style={enterpriseStyles.signatureLine} />
                    <Text style={enterpriseStyles.signatureLabel}>Client Signature</Text>
                    <Text style={enterpriseStyles.signatureDate}>Date: _______________</Text>
                  </View>
                  <View style={enterpriseStyles.signatureBox}>
                    <View style={enterpriseStyles.signatureLine} />
                    <Text style={enterpriseStyles.signatureLabel}>Developer Signature</Text>
                    <Text style={enterpriseStyles.signatureDate}>Date: _______________</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    );
  }

  // MODERN THEME
  return (
    <Document>
      <Page size="A4" style={modernStyles.page}>
        <View style={modernStyles.sidebar}>
          {/* Geometric accent shapes */}
          <Svg style={{ position: 'absolute', top: 10, left: 10 }} width="60" height="60">
            <Circle cx="30" cy="30" r="25" fill="none" stroke="#6366f1" strokeWidth="2" />
            <Circle cx="30" cy="30" r="15" fill="#6366f1" opacity="0.2" />
            <Rect x="20" y="20" width="20" height="20" fill="none" stroke="#6366f1" strokeWidth="1.5" />
          </Svg>
          
          <View><Text style={modernStyles.sectionNumber}>01</Text><Text style={modernStyles.sectionLabel}>Parties</Text></View>
          <View><Text style={modernStyles.sectionNumber}>02</Text><Text style={modernStyles.sectionLabel}>Scope</Text></View>
          <View><Text style={modernStyles.sectionNumber}>03</Text><Text style={modernStyles.sectionLabel}>Payment</Text></View>
          <View><Text style={modernStyles.sectionNumber}>04</Text><Text style={modernStyles.sectionLabel}>Protection</Text></View>
        </View>
        <View style={modernStyles.mainContent}>
          {/* Header accent line */}
          <Svg style={{ position: 'absolute', top: 0, left: 0, right: 0 }} width="100%" height="5">
            <Rect x="0" y="0" width="100%" height="5" fill="#6366f1" />
          </Svg>
          
          <View style={modernStyles.header}>
            <View style={modernStyles.headerContent}>
              <Text style={modernStyles.title}>Development Contract</Text>
              <Text style={modernStyles.subtitle}>Generated {new Date().toLocaleDateString()}</Text>
            </View>
            {logo && <Image src={logo} style={modernStyles.logo} />}
          </View>
          <View style={modernStyles.section}>
            <Text style={modernStyles.sectionTitle}>Contract Parties</Text>
            <View style={modernStyles.row}><Text style={modernStyles.label}>Client:</Text><Text style={modernStyles.value}>{data.clientName}</Text></View>
            <View style={modernStyles.row}><Text style={modernStyles.label}>Project:</Text><Text style={modernStyles.value}>{data.projectName}</Text></View>
            <View style={modernStyles.row}><Text style={modernStyles.label}>Start Date:</Text><Text style={modernStyles.value}>{data.startDate}</Text></View>
            <View style={modernStyles.row}><Text style={modernStyles.label}>Target Completion:</Text><Text style={modernStyles.value}>{data.completionDate}</Text></View>
          </View>
          <View style={modernStyles.section}>
            <Text style={modernStyles.sectionTitle}>Project Scope</Text>
            <Text style={modernStyles.text}>{data.projectDescription}</Text>
            {data.deliverables && (
              <View style={{ marginTop: 8 }}>
                <Text style={[modernStyles.text, { fontWeight: 'bold' }]}>Deliverables:</Text>
                <Text style={modernStyles.text}>{data.deliverables}</Text>
              </View>
            )}
          </View>
          <View style={modernStyles.section}>
            <Text style={modernStyles.sectionTitle}>Payment Terms</Text>
            <View style={modernStyles.row}><Text style={modernStyles.label}>Type:</Text><Text style={modernStyles.value}>{data.paymentType.toUpperCase()}</Text></View>
            {data.paymentType === 'hourly' && (
              <><View style={modernStyles.row}><Text style={modernStyles.label}>Rate:</Text><Text style={modernStyles.value}>${data.hourlyRate}/hr</Text></View>
              <View style={modernStyles.row}><Text style={modernStyles.label}>Hours:</Text><Text style={modernStyles.value}>{data.estimatedHours} hours</Text></View></>
            )}
            {data.paymentType === 'monthly' && (
              <View style={modernStyles.row}><Text style={modernStyles.label}>Monthly:</Text><Text style={modernStyles.value}>${data.monthlyRate.toLocaleString()}</Text></View>
            )}
            {data.paymentType === 'fixed' && (
              <View style={modernStyles.row}><Text style={modernStyles.label}>Fixed:</Text><Text style={modernStyles.value}>${data.fixedPrice.toLocaleString()}</Text></View>
            )}
            <View style={modernStyles.row}><Text style={modernStyles.label}>Total Value:</Text><Text style={modernStyles.value}>${totalCost.toLocaleString()}</Text></View>
            <View style={modernStyles.row}><Text style={modernStyles.label}>Upfront ({data.upfrontPercentage}%):</Text><Text style={modernStyles.value}>${upfrontPayment.toLocaleString()}</Text></View>
            <View style={modernStyles.row}><Text style={modernStyles.label}>Remaining:</Text><Text style={modernStyles.value}>${(totalCost - upfrontPayment).toLocaleString()}</Text></View>
            {data.paymentTerms && <Text style={[modernStyles.text, { marginTop: 6 }]}>{data.paymentTerms}</Text>}
          </View>
          <View style={modernStyles.section}>
            <Text style={modernStyles.sectionTitle}>Protection Clauses</Text>
            {data.scopeCreepProtection && (
              <View style={modernStyles.highlight}>
                <Text style={modernStyles.highlightText}>⚡ SCOPE PROTECTION: Additional requests at ${data.hourlyRate}/hour</Text>
              </View>
            )}
            {data.ipProtection && (
              <View style={[modernStyles.highlight, { marginTop: 8, backgroundColor: '#f0f9ff', borderColor: '#3b82f6' }]}>
                <Text style={[modernStyles.highlightText, { color: '#1e40af' }]}>🔒 IP PROTECTION: Code ownership upon final payment</Text>
              </View>
            )}
          </View>
          
          {/* Signature Section */}
          <View style={modernStyles.signatureSection}>
            <Text style={modernStyles.sectionTitle}>Signatures</Text>
            <View style={modernStyles.signatureRow}>
              <View style={modernStyles.signatureBox}>
                <View style={modernStyles.signatureLine} />
                <Text style={modernStyles.signatureLabel}>Client Signature</Text>
                <Text style={modernStyles.signatureDate}>Date: _______________</Text>
              </View>
              <View style={modernStyles.signatureBox}>
                <View style={modernStyles.signatureLine} />
                <Text style={modernStyles.signatureLabel}>Developer Signature</Text>
                <Text style={modernStyles.signatureDate}>Date: _______________</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
