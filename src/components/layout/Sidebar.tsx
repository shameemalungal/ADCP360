import React from 'react';
import {
  LayoutDashboard,
  Boxes,
  Landmark,
  ShoppingCart,
  Users,
  Truck,
  Building2,
  FileText,
  FileSpreadsheet,
  Flag,
  TestTubes,
  Activity,
  Syringe,
  BarChart3,
  UserCheck,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  activeItem: string;
  setActiveItem: (item: string) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  badge?: string;
  badgeColor?: string;
}

const PRIMARY_NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'stock', label: 'Stock & Inventory', icon: Boxes, badge: '3', badgeColor: 'bg-amber-100 text-amber-800' },
  { id: 'finance', label: 'Finance & UC', icon: Landmark },
  { id: 'purchase', label: 'Purchase & Procurement', icon: ShoppingCart },
  { id: 'staff', label: 'Staff Management', icon: Users },
  { id: 'vehicles', label: 'Vehicle Management', icon: Truck },
  { id: 'office', label: 'Office Administration', icon: Building2 },
  { id: 'documents', label: 'Document Management', icon: FileText },
  { id: 'field-reporting', label: 'Field Reporting', icon: FileSpreadsheet },
  { id: 'campaigns', label: 'Campaign Management', icon: Flag, badge: '2', badgeColor: 'bg-teal-100 text-teal-800' },
  { id: 'samples', label: 'Sample Collection', icon: TestTubes },
  { id: 'surveillance', label: 'Disease Surveillance', icon: Activity, badge: 'Alert', badgeColor: 'bg-red-100 text-red-800' },
  { id: 'vaccination-reports', label: 'Vaccination Reports', icon: Syringe },
  { id: 'reporting-centre', label: 'Reporting Centre', icon: BarChart3 },
];

const SECONDARY_NAV_ITEMS: NavItem[] = [
  { id: 'users', label: 'User Management', icon: UserCheck },
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'help', label: 'Help & Support', icon: HelpCircle },
];

export const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed,
  setIsCollapsed,
  activeItem,
  setActiveItem,
  mobileOpen,
  setMobileOpen,
}) => {
  const { employee, activeRole } = useAuth();

  // Filter modules by the active role's permitted permissions
  const filteredPrimaryItems = PRIMARY_NAV_ITEMS.filter((item) =>
    activeRole.permittedModules.includes(item.id)
  );

  const filteredSecondaryItems = SECONDARY_NAV_ITEMS.filter((item) =>
    activeRole.permittedModules.includes(item.id)
  );

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col bg-white border-r border-[#E2E8F0] transition-all duration-300 ease-in-out
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${isCollapsed ? 'w-[74px]' : 'w-[264px]'}
        `}
      >
        {/* Brand Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-[#F1F5F9] shrink-0">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#14B8A6] to-[#84D46B] p-0.5 shadow-sm shrink-0 flex items-center justify-center">
              <img
                src="/adcp-logo.png"
                alt="ADCP 360°"
                className="w-full h-full object-contain rounded-[10px] bg-white p-0.5"
              />
            </div>
            {!isCollapsed && (
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-[#0E7D7A] tracking-tight text-lg leading-none">
                    ADCP
                  </span>
                  <span className="font-extrabold text-[#14B8A6] tracking-tight text-lg leading-none">
                    360°
                  </span>
                </div>
                <p className="text-[9.5px] font-semibold text-slate-400 tracking-wider uppercase mt-1 leading-none">
                  ADMINISTRATION & OPERATIONS
                </p>
              </div>
            )}
          </div>

          {/* Desktop Collapse Toggle */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:flex w-7 h-7 rounded-lg bg-slate-50 hover:bg-teal-50 hover:text-[#0E7D7A] text-slate-400 border border-slate-200 items-center justify-center transition-colors"
            title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
          </button>
        </div>

        {/* Active Role Permission Scope Banner */}
        {!isCollapsed && (
          <div className="px-3 pt-2.5 pb-1">
            <div className="px-3 py-1.5 rounded-lg bg-teal-50/70 border border-teal-100 flex items-center justify-between">
              <div className="min-w-0">
                <span className="text-[9px] font-bold text-teal-800 uppercase tracking-wider block">
                  Active Role Scope
                </span>
                <span className="text-xs font-bold text-[#0E7D7A] truncate block">
                  {activeRole.roleName}
                </span>
              </div>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white text-teal-700 border border-teal-200 shrink-0">
                {activeRole.permittedModules.length} Modules
              </span>
            </div>
          </div>
        )}

        {/* Scrollable Navigation */}
        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1 flex items-center justify-between">
            <span>{!isCollapsed ? 'Permitted Modules' : '•••'}</span>
          </div>

          {filteredPrimaryItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveItem(item.id);
                  if (window.innerWidth < 1024) setMobileOpen(false);
                }}
                title={isCollapsed ? item.label : undefined}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs md:text-sm font-medium transition-all group relative
                  ${
                    isActive
                      ? 'bg-[#E6F8F6] text-[#0E7D7A] font-semibold shadow-xs'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }
                  ${isCollapsed ? 'justify-center px-0' : ''}
                `}
              >
                {isActive && (
                  <span className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-[#0E7D7A] rounded-r-md" />
                )}

                <Icon
                  size={18}
                  className={`shrink-0 transition-colors ${
                    isActive
                      ? 'text-[#0E7D7A]'
                      : 'text-slate-400 group-hover:text-slate-600'
                  }`}
                />

                {!isCollapsed && (
                  <span className="truncate text-left flex-1">{item.label}</span>
                )}

                {!isCollapsed && item.badge && (
                  <span
                    className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${item.badgeColor || 'bg-slate-100 text-slate-600'}`}
                  >
                    {item.badge}
                  </span>
                )}

                {isCollapsed && item.badge && (
                  <span className="absolute top-1.5 right-2 w-2 h-2 rounded-full bg-[#14B8A6]" />
                )}
              </button>
            );
          })}

          {filteredSecondaryItems.length > 0 && (
            <div className="pt-3 pb-1">
              <div className="border-t border-[#F1F5F9] my-2" />
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1">
                {!isCollapsed ? 'System & Support' : '•••'}
              </div>
              {filteredSecondaryItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeItem === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveItem(item.id);
                      if (window.innerWidth < 1024) setMobileOpen(false);
                    }}
                    title={isCollapsed ? item.label : undefined}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs md:text-sm font-medium transition-all group relative
                      ${
                        isActive
                          ? 'bg-[#E6F8F6] text-[#0E7D7A] font-semibold'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }
                      ${isCollapsed ? 'justify-center px-0' : ''}
                    `}
                  >
                    <Icon
                      size={18}
                      className={`shrink-0 ${
                        isActive
                          ? 'text-[#0E7D7A]'
                          : 'text-slate-400 group-hover:text-slate-600'
                      }`}
                    />
                    {!isCollapsed && (
                      <span className="truncate text-left flex-1">{item.label}</span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Active User Context Footer */}
        <div className="p-3 border-t border-[#F1F5F9] bg-[#F8FAFC]/70 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="relative shrink-0">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#0E7D7A] to-[#14B8A6] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                {employee.avatarText}
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#10B981] ring-2 ring-white" />
            </div>

            {!isCollapsed && (
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1">
                  <p className="text-xs font-bold text-slate-800 truncate">
                    {employee.name}
                  </p>
                  <ShieldCheck size={13} className="text-[#0E7D7A] shrink-0" />
                </div>
                <div className="flex items-center gap-1">
                  <p className="text-[10.5px] font-semibold text-[#0E7D7A] truncate">
                    {activeRole.roleName}
                  </p>
                  {activeRole.isAdditionalCharge && (
                    <span className="text-[8.5px] font-bold px-1 rounded bg-amber-100 text-amber-800 shrink-0">
                      Addl
                    </span>
                  )}
                </div>
                <p className="text-[9.5px] text-slate-400 truncate">
                  {activeRole.institutionOrJurisdiction}
                </p>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};
