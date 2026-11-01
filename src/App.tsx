import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { MainLayout } from './components/layout/MainLayout';
import { PageHeader } from './components/dashboard/PageHeader';
import { KpiGrid } from './components/dashboard/KpiGrid';
import { CampaignSection } from './components/dashboard/CampaignSection';
import { OperationalOverview } from './components/dashboard/OperationalOverview';
import { FinancialOverview } from './components/dashboard/FinancialOverview';
import { InventoryAndVehicles } from './components/dashboard/InventoryAndVehicles';
import { WorkQueue } from './components/dashboard/WorkQueue';
import { RecentActivity } from './components/dashboard/RecentActivity';
import { LogoutModal } from './components/layout/LogoutModal';
import { LoginPage } from './components/auth/LoginPage';
import { KPI_DATA } from './data/mockData';
import { Construction, ArrowLeft, X, User, Settings, KeyRound } from 'lucide-react';
import { KpiCardData } from './types/dashboard';

const MainDashboardApp: React.FC = () => {
  const { isAuthenticated, activeRole, employee, activeAccountModal, setActiveAccountModal } = useAuth();
  const [activeItem, setActiveItem] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [financialYear, setFinancialYear] = useState('FY 2026-27');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('Just now');

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastUpdated(new Date().toLocaleTimeString());
    }, 600);
  };

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  // Derive scoped KPI data based on active role
  const getScopedKpis = (): KpiCardData[] => {
    if (activeRole.scope.type === 'taluk') {
      return [
        {
          id: 'active-campaigns',
          title: 'Taluk Active Campaigns',
          value: '1',
          supportingText: 'FMD Phase 24 in Perinthalmanna',
          iconName: 'Target',
          trend: { value: 'Active in 6 blocks', isPositive: true },
          accentColor: 'turquoise',
        },
        {
          id: 'total-vaccinations',
          title: 'Taluk Vaccinations',
          value: '28,420',
          supportingText: 'Perinthalmanna Taluk FY 2026-27',
          iconName: 'Syringe',
          trend: { value: '88.8% of taluk target', isPositive: true },
          accentColor: 'nature-green',
        },
        {
          id: 'pending-reports',
          title: 'Pending Block Reports',
          value: '2',
          supportingText: 'Awaiting submission to Taluk',
          iconName: 'ClipboardList',
          trend: { value: 'Mankada due tomorrow', isPositive: false },
          accentColor: 'alert-orange',
        },
        {
          id: 'verification-pending',
          title: 'Taluk 5% Verification',
          value: '5',
          supportingText: 'Reports awaiting Taluk check',
          iconName: 'FileCheck',
          trend: { value: '5% statutory quota', isPositive: true },
          accentColor: 'info-blue',
        },
        {
          id: 'stock-alerts',
          title: 'Sub-Depot Stock Alerts',
          value: '1',
          supportingText: 'Perinthalmanna Cold Box buffer low',
          iconName: 'Package',
          trend: { value: 'Indent raised', isPositive: false },
          accentColor: 'alert-orange',
        },
        {
          id: 'near-expiry',
          title: 'Near Expiry Vials',
          value: '2',
          supportingText: 'Vials expiring < 60 days',
          iconName: 'CalendarClock',
          trend: { value: 'Priority dispatch', isPositive: false },
          accentColor: 'highlight-yellow',
        },
      ];
    }

    if (activeRole.scope.type === 'institution') {
      return [
        {
          id: 'active-campaigns',
          title: 'Institution Drives',
          value: '1',
          supportingText: 'FMD Phase 24 Booth & Door-to-Door',
          iconName: 'Target',
          trend: { value: 'Sub-centre active', isPositive: true },
          accentColor: 'turquoise',
        },
        {
          id: 'total-vaccinations',
          title: 'Institution Vaccinations',
          value: '4,120',
          supportingText: activeRole.institutionOrJurisdiction,
          iconName: 'Syringe',
          trend: { value: '91.5% coverage', isPositive: true },
          accentColor: 'nature-green',
        },
        {
          id: 'pending-reports',
          title: 'Daily Returns Logged',
          value: '14/14',
          supportingText: 'All field logs reconciled',
          iconName: 'ClipboardList',
          trend: { value: '100% on time', isPositive: true },
          accentColor: 'nature-green',
        },
        {
          id: 'verification-pending',
          title: 'Supervisor Cross-Checks',
          value: '3',
          supportingText: 'Farmer verifications pending',
          iconName: 'FileCheck',
          trend: { value: 'Scheduled for today', isPositive: true },
          accentColor: 'info-blue',
        },
        {
          id: 'stock-alerts',
          title: 'Vaccine Flask Stock',
          value: '0',
          supportingText: 'Cold storage in optimal 2-8°C',
          iconName: 'Package',
          trend: { value: 'Buffer safe', isPositive: true },
          accentColor: 'turquoise',
        },
        {
          id: 'near-expiry',
          title: 'Near Expiry Batches',
          value: '1',
          supportingText: 'Anti-rabies vials (20 doses)',
          iconName: 'CalendarClock',
          trend: { value: 'FIFO in progress', isPositive: false },
          accentColor: 'highlight-yellow',
        },
      ];
    }

    return KPI_DATA;
  };

  return (
    <MainLayout
      activeItem={activeItem}
      setActiveItem={setActiveItem}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    >
      {activeItem === 'dashboard' ? (
        <div className="space-y-1">
          {/* Page Heading & Controls */}
          <PageHeader
            financialYear={financialYear}
            setFinancialYear={setFinancialYear}
            onRefresh={handleRefresh}
            isRefreshing={isRefreshing}
            lastUpdated={lastUpdated}
          />

          {/* Section A: Key Operational Indicators */}
          <KpiGrid cards={getScopedKpis()} />

          {/* Section B: Campaign Vaccination Progress & Species Distribution */}
          <CampaignSection />

          {/* Section C: Operational Overview */}
          <OperationalOverview />

          {/* Section D: Financial Overview (Visible for District and Taluk Roles) */}
          {activeRole.permittedModules.includes('finance') && (
            <FinancialOverview />
          )}

          {/* Section E & F: Inventory Alerts & Vehicle Operations */}
          <InventoryAndVehicles />

          {/* Section G: My Work Queue */}
          <WorkQueue />

          {/* Section H: Recent Activity */}
          <RecentActivity />
        </div>
      ) : (
        /* Module Placeholder */
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-slate-200 text-center shadow-xs">
          <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-200 text-[#0E7D7A] flex items-center justify-center mb-4">
            <Construction size={32} />
          </div>
          <h2 className="text-xl font-bold text-slate-900 capitalize">
            {activeItem.replace('-', ' ')} Module
          </h2>
          <p className="text-sm text-slate-500 max-w-md mt-2">
            Scope: <strong>{activeRole.institutionOrJurisdiction}</strong>. This module is scheduled for implementation in the next phase. Current view is filtered for role: <strong>{activeRole.roleName}</strong>.
          </p>
          <button
            onClick={() => setActiveItem('dashboard')}
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-[#0E7D7A] hover:bg-[#14B8A6] text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Return to Dashboard</span>
          </button>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      <LogoutModal />

      {/* Account Option Modals */}
      {activeAccountModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                {activeAccountModal === 'profile' && <User size={18} className="text-[#0E7D7A]" />}
                {activeAccountModal === 'settings' && <Settings size={18} className="text-[#0E7D7A]" />}
                {activeAccountModal === 'password' && <KeyRound size={18} className="text-[#0E7D7A]" />}
                <h3 className="font-bold text-slate-900 text-sm">
                  {activeAccountModal === 'profile' && 'Employee Profile Details'}
                  {activeAccountModal === 'settings' && 'Account Settings'}
                  {activeAccountModal === 'password' && 'Change Account Password'}
                </h3>
              </div>
              <button
                onClick={() => setActiveAccountModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X size={16} />
              </button>
            </div>

            <div className="py-4 text-xs text-slate-600 space-y-3">
              {activeAccountModal === 'profile' && (
                <>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-[#0E7D7A] text-white flex items-center justify-center font-bold text-sm">
                      {employee.avatarText}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{employee.name}</p>
                      <p className="text-[11px] text-[#0E7D7A]">{employee.designation}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 border rounded-lg">
                      <span className="text-slate-400 block">PEN / Employee ID</span>
                      <span className="font-bold font-mono">{employee.id}</span>
                    </div>
                    <div className="p-2 border rounded-lg">
                      <span className="text-slate-400 block">Primary Office</span>
                      <span className="font-bold truncate block">{employee.primaryOffice}</span>
                    </div>
                  </div>
                </>
              )}

              {activeAccountModal === 'settings' && (
                <div className="space-y-2">
                  <p>System notification preferences, biometric login setup, and digital signature certificates (DSC).</p>
                  <div className="p-3 bg-teal-50 border border-teal-200 rounded-xl text-[#0E7D7A]">
                    <p className="font-bold">DSC Token Status: Active</p>
                    <p className="text-[11px]">Class 3 DSC valid until 14 Aug 2027.</p>
                  </div>
                </div>
              )}

              {activeAccountModal === 'password' && (
                <div className="space-y-2.5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700">Current Password</label>
                    <input type="password" placeholder="••••••••" className="w-full mt-1 p-2 border rounded-lg text-xs" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700">New Password</label>
                    <input type="password" placeholder="••••••••" className="w-full mt-1 p-2 border rounded-lg text-xs" />
                  </div>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveAccountModal(null)}
                className="px-4 py-2 bg-[#0E7D7A] hover:bg-[#14B8A6] text-white rounded-lg text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <MainDashboardApp />
    </AuthProvider>
  );
};

export default App;
