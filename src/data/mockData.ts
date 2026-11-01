import {
  KpiCardData,
  SpeciesData,
  CampaignProgressPoint,
  ReportStatusData,
  VerificationWorkflowStage,
  SurveillanceData,
  FinancialHeadExpenditure,
  InventoryAlertItem,
  VehicleAllocationItem,
  WorkQueueItem,
  ActivityItem,
} from '../types/dashboard';

export const KPI_DATA: KpiCardData[] = [
  {
    id: 'active-campaigns',
    title: 'Active Campaigns',
    value: '2',
    supportingText: 'Campaigns currently active in district',
    iconName: 'Target',
    trend: { value: 'Phase 24 & Rabies Control', isPositive: true },
    accentColor: 'turquoise',
  },
  {
    id: 'total-vaccinations',
    title: 'Total Vaccinations',
    value: '1,24,850',
    supportingText: 'Current financial year (FY 2026-27)',
    iconName: 'Syringe',
    trend: { value: '83.2% of target', isPositive: true },
    accentColor: 'nature-green',
  },
  {
    id: 'pending-reports',
    title: 'Pending Completion Reports',
    value: '8',
    supportingText: 'Awaiting district receipt from taluks',
    iconName: 'ClipboardList',
    trend: { value: '4 blocks overdue', isPositive: false },
    accentColor: 'alert-orange',
  },
  {
    id: 'verification-pending',
    title: 'Verification Pending',
    value: '14',
    supportingText: 'Reports awaiting verification & sign-off',
    iconName: 'FileCheck',
    trend: { value: '2% DC quota sample', isPositive: true },
    accentColor: 'info-blue',
  },
  {
    id: 'stock-alerts',
    title: 'Vaccine Stock Alerts',
    value: '3',
    supportingText: 'Low stock items below safety buffer',
    iconName: 'Package',
    trend: { value: 'Cold room A critical', isPositive: false },
    accentColor: 'alert-orange',
  },
  {
    id: 'near-expiry',
    title: 'Near Expiry Items',
    value: '5',
    supportingText: 'Expiring within 90 days',
    iconName: 'CalendarClock',
    trend: { value: 'Batch FMD-980 prior', isPositive: false },
    accentColor: 'highlight-yellow',
  },
];

export const CAMPAIGN_PROGRESS: CampaignProgressPoint[] = [
  { month: 'May 2026', vaccinations: 18400, target: 25000 },
  { month: 'Jun 2026', vaccinations: 42100, target: 50000 },
  { month: 'Jul 2026', vaccinations: 68900, target: 75000 },
  { month: 'Aug 2026', vaccinations: 89400, target: 100000 },
  { month: 'Sep 2026', vaccinations: 109200, target: 125000 },
  { month: 'Oct 2026', vaccinations: 124850, target: 150000 },
];

export const SPECIES_DATA: SpeciesData[] = [
  { name: 'Cattle', value: 72400, percentage: 58, color: '#0E7D7A' },
  { name: 'Buffalo', value: 21250, percentage: 17, color: '#14B8A6' },
  { name: 'Goat', value: 16200, percentage: 13, color: '#84D46B' },
  { name: 'Sheep', value: 4350, percentage: 3.5, color: '#3B82F6' },
  { name: 'Dog', value: 8150, percentage: 6.5, color: '#F59E0B' },
  { name: 'Other species', value: 2500, percentage: 2.0, color: '#94A3B8' },
];

export const REPORT_STATUS: ReportStatusData = {
  expected: 120,
  received: 106,
  pending: 8,
  returned: 6,
};

export const VERIFICATION_STAGES: VerificationWorkflowStage[] = [
  {
    stage: 'Supervisor Level',
    role: 'Veterinary Surgeon / LS',
    pendingCount: 22,
    verifiedCount: 98,
    percentage: '100% field cross-check',
  },
  {
    stage: 'Taluk Coordinator',
    role: 'Senior Vet Surgeon',
    pendingCount: 11,
    verifiedCount: 45,
    percentage: '5% statutory quota',
  },
  {
    stage: 'District Coordinator',
    role: 'Dr. K. Narayanan (DC)',
    pendingCount: 14,
    verifiedCount: 18,
    percentage: '2% independent quota',
  },
];

export const SURVEILLANCE_DATA: SurveillanceData = {
  newOutbreaks: 1,
  labPending: 3,
  confirmed: 0,
  samplesAwaiting: 7,
};

export const FINANCIAL_HEADS: FinancialHeadExpenditure[] = [
  { head: 'Vaccines & Cold Chain Logistics', budget: 2400000, expenditure: 1780000, percentage: 74.2 },
  { head: 'Honorarium & Field Allowances', budget: 1250000, expenditure: 840000, percentage: 67.2 },
  { head: 'Mobility & POL Expenses', budget: 450000, expenditure: 295000, percentage: 65.5 },
  { head: 'IEC & Awareness Campaigns', budget: 350000, expenditure: 180000, percentage: 51.4 },
  { head: 'Lab Consumables & PPE Kits', budget: 250000, expenditure: 123450, percentage: 49.4 },
];

export const INVENTORY_ALERTS: InventoryAlertItem[] = [
  {
    id: 'inv-1',
    item: 'FMD Oil Adjuvant Vaccine (Bivalent)',
    category: 'Vaccine',
    availableStock: '120 doses',
    alertType: 'Low Stock',
    expiryDate: '15 Jan 2027',
    location: 'District Central Walk-in Cooler',
  },
  {
    id: 'inv-2',
    item: 'Anti-Rabies Tissue Culture Vaccine',
    category: 'Vaccine',
    availableStock: '45 vials',
    alertType: 'Near Expiry',
    expiryDate: '28 Dec 2026',
    location: 'Sub-depot Tirur',
  },
  {
    id: 'inv-3',
    item: 'Auto-disable Syringes (2ml 21G)',
    category: 'Logistics',
    availableStock: '20 units (boxes)',
    alertType: 'Near Expiry',
    expiryDate: '10 Jan 2027',
    location: 'District Store Room 2',
  },
  {
    id: 'inv-4',
    item: 'Brucella Abortus S19 Vaccine',
    category: 'Vaccine',
    availableStock: '60 doses',
    alertType: 'Low Stock',
    expiryDate: '05 Mar 2027',
    location: 'District Central Walk-in Cooler',
  },
];

export const VEHICLE_ALLOCATIONS: VehicleAllocationItem[] = [
  {
    id: 'veh-1',
    vehicleNo: 'KL-10-AZ-4512',
    model: 'Mahindra Bolero (Mobile Vet)',
    driver: 'M. Sureshbabu',
    destination: 'Nilambur & Kalikavu Blocks',
    purpose: 'Cold Chain Vaccine Distribution',
    time: '08:30 AM - In Transit',
    status: 'In Transit',
  },
  {
    id: 'veh-2',
    vehicleNo: 'KL-10-BG-8821',
    model: 'Tata Winger (Surveillance Unit)',
    driver: 'Abdul Rasheed',
    destination: 'Tirur & Tanur Coastal Belt',
    purpose: 'Avian Serum Sample Collection',
    time: '09:15 AM - In Transit',
    status: 'In Transit',
  },
  {
    id: 'veh-3',
    vehicleNo: 'KL-10-CC-3109',
    model: 'Mahindra Scorpio (Admin / DC)',
    driver: 'P. Krishnakumar',
    destination: 'Collectorate Malappuram',
    purpose: 'District Task Force Coordination',
    time: '11:00 AM - Scheduled',
    status: 'Allocated',
  },
  {
    id: 'veh-4',
    vehicleNo: 'KL-10-DM-5420',
    model: 'Force Trax Cruiser',
    driver: 'Standby Driver Pool',
    destination: 'District HQ Parking Bay',
    purpose: 'Emergency Outbreak Standby',
    time: 'Ready for Deployment',
    status: 'Available',
  },
];

export const WORK_QUEUE: WorkQueueItem[] = [
  {
    id: 'wq-1',
    title: 'Completion report awaiting receipt',
    module: 'Campaign Management',
    date: '31 Oct 2026',
    priority: 'Urgent',
    talukOrBlock: 'Ernad Block (FMD Phase 24)',
    actionText: 'Review & Accept',
  },
  {
    id: 'wq-2',
    title: 'Verification report awaiting signature',
    module: 'Field Verification',
    date: '30 Oct 2026',
    priority: 'High',
    talukOrBlock: 'Tirur Taluk (280 animal checks)',
    actionText: 'Sign & Authorize',
  },
  {
    id: 'wq-3',
    title: 'Monthly UC awaiting reconciliation',
    module: 'Finance & UC',
    date: '28 Oct 2026',
    priority: 'Medium',
    talukOrBlock: 'Malappuram District Treasury',
    actionText: 'Reconcile UC',
  },
  {
    id: 'wq-4',
    title: 'Vaccine allocation awaiting completion',
    module: 'Stock & Inventory',
    date: '29 Oct 2026',
    priority: 'Medium',
    talukOrBlock: 'Ponnani & Perinthalmanna Depots',
    actionText: 'Authorize Transfer',
  },
  {
    id: 'wq-5',
    title: 'Vehicle insurance renewal approaching',
    module: 'Vehicle Management',
    date: 'Due in 12 days',
    priority: 'High',
    talukOrBlock: 'KL-10-AZ-4512 (Oriental Insurance)',
    actionText: 'Process Renewal',
  },
];

export const RECENT_ACTIVITY: ActivityItem[] = [
  {
    id: 'act-1',
    user: 'K. S. Raman',
    role: 'Store Officer',
    avatarColor: '#14B8A6',
    action: 'Stock supply completed',
    subject: '10,000 doses FMD Vaccine received from State Central Vaccine Depot, Palode',
    timestamp: '25 mins ago',
    category: 'Stock',
  },
  {
    id: 'act-2',
    user: 'Dr. Sheena Jacob',
    role: 'Taluk Coordinator, Kondotty',
    avatarColor: '#3B82F6',
    action: 'Campaign report received',
    subject: 'Kondotty Block submitted Day 14 vaccination report (3,420 animals completed)',
    timestamp: '1 hour ago',
    category: 'Campaign',
  },
  {
    id: 'act-3',
    user: 'Dr. K. Narayanan',
    role: 'District Coordinator',
    avatarColor: '#0E7D7A',
    action: 'Verification report digitally signed',
    subject: 'Nilambur Taluk 2% cross-verification audit batch authenticated with DSC',
    timestamp: '3 hours ago',
    category: 'Verification',
  },
  {
    id: 'act-4',
    user: 'M. Jayakrishnan',
    role: 'Accounts Officer',
    avatarColor: '#F59E0B',
    action: 'Bank reconciliation updated',
    subject: 'SBI Malappuram Treasury current account reconciled for September expenditure',
    timestamp: '5 hours ago',
    category: 'Finance',
  },
  {
    id: 'act-5',
    user: 'Dr. Preetha Menon',
    role: 'Veterinary Epidemiologist',
    avatarColor: '#84D46B',
    action: 'Laboratory report imported',
    subject: 'State Animal Disease Emergency Cell (AVSRI) negative swab report logged',
    timestamp: 'Yesterday at 4:30 PM',
    category: 'Lab',
  },
];

