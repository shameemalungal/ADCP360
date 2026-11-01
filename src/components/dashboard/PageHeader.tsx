import React from 'react';
import { Calendar, RefreshCw, ChevronDown, MapPin } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Badge } from '../common/Badge';

interface PageHeaderProps {
  financialYear: string;
  setFinancialYear: (fy: string) => void;
  onRefresh: () => void;
  isRefreshing: boolean;
  lastUpdated: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  financialYear,
  setFinancialYear,
  onRefresh,
  isRefreshing,
  lastUpdated,
}) => {
  const { activeRole } = useAuth();

  const getScopeTitle = () => {
    switch (activeRole.scope.type) {
      case 'district':
        return 'District Overview';
      case 'taluk':
        return 'Taluk Operations Overview';
      case 'institution':
        return 'Institution Operations Overview';
      default:
        return 'Operations Overview';
    }
  };

  return (
    <div className="flex flex-col gap-3 mb-6 pb-2">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Title & Subtitle with Dynamic Scope */}
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {getScopeTitle()}
            </h1>
            <Badge variant="teal" dot size="sm">
              Live Feed
            </Badge>
            {activeRole.isAdditionalCharge && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-bold">
                Additional Charge
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 mt-1">
            <MapPin size={14} className="text-[#0E7D7A] shrink-0" />
            <span className="font-semibold text-slate-800">
              {activeRole.institutionOrJurisdiction}
            </span>
            <span>•</span>
            <span>Active Role: <strong className="text-[#0E7D7A]">{activeRole.roleName}</strong></span>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {/* Date Display */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#E2E8F0] rounded-lg text-xs font-medium text-slate-700 shadow-2xs">
            <Calendar size={14} className="text-[#0E7D7A]" />
            <span>Sunday, 01 Nov 2026</span>
          </div>

          {/* Financial Year Selector */}
          <div className="relative">
            <select
              value={financialYear}
              onChange={(e) => setFinancialYear(e.target.value)}
              className="appearance-none pl-3 pr-8 py-1.5 bg-white border border-[#E2E8F0] rounded-lg text-xs font-semibold text-slate-800 shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 focus:border-[#14B8A6] cursor-pointer"
            >
              <option value="FY 2026-27">FY 2026-27 (Current)</option>
              <option value="FY 2025-26">FY 2025-26</option>
              <option value="FY 2024-25">FY 2024-25</option>
            </select>
            <ChevronDown
              size={14}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
          </div>

          {/* Refresh Button */}
          <button
            onClick={onRefresh}
            disabled={isRefreshing}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-50 border border-[#E2E8F0] text-slate-700 hover:text-[#0E7D7A] rounded-lg text-xs font-medium shadow-2xs transition-all active:scale-95 disabled:opacity-50"
            title={`Last updated: ${lastUpdated}`}
          >
            <RefreshCw
              size={14}
              className={`text-slate-500 transition-transform ${isRefreshing ? 'animate-spin text-[#14B8A6]' : ''}`}
            />
            <span className="hidden sm:inline">Refresh</span>
          </button>
        </div>
      </div>
    </div>
  );
};
