export interface KpiCardData {
  id: string;
  title: string;
  value: string | number;
  supportingText: string;
  iconName: 'Target' | 'Syringe' | 'ClipboardList' | 'FileCheck' | 'Package' | 'CalendarClock';
  trend?: {
    value: string;
    isPositive: boolean;
  };
  accentColor: 'turquoise' | 'nature-green' | 'alert-orange' | 'info-blue' | 'highlight-yellow' | 'deep-teal';
}

export interface SpeciesData {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

export interface CampaignProgressPoint {
  month: string;
  vaccinations: number;
  target: number;
}

export interface ReportStatusData {
  expected: number;
  received: number;
  pending: number;
  returned: number;
}

export interface VerificationWorkflowStage {
  stage: string;
  role: string;
  pendingCount: number;
  verifiedCount: number;
  percentage: string;
}

export interface SurveillanceData {
  newOutbreaks: number;
  labPending: number;
  confirmed: number;
  samplesAwaiting: number;
}

export interface FinancialHeadExpenditure {
  head: string;
  budget: number;
  expenditure: number;
  percentage: number;
}

export interface InventoryAlertItem {
  id: string;
  item: string;
  category: string;
  availableStock: string;
  alertType: 'Low Stock' | 'Near Expiry';
  expiryDate?: string;
  location?: string;
}

export interface VehicleAllocationItem {
  id: string;
  vehicleNo: string;
  model: string;
  driver: string;
  destination: string;
  purpose: string;
  time: string;
  status: 'In Transit' | 'Allocated' | 'Available';
}

export interface WorkQueueItem {
  id: string;
  title: string;
  module: string;
  date: string;
  priority: 'Urgent' | 'High' | 'Medium' | 'Routine';
  talukOrBlock: string;
  actionText: string;
}

export interface ActivityItem {
  id: string;
  user: string;
  role: string;
  avatarColor: string;
  action: string;
  subject: string;
  timestamp: string;
  category: 'Stock' | 'Campaign' | 'Verification' | 'Finance' | 'Lab';
}

