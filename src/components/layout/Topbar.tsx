import React, { useState } from 'react';
import {
  Menu,
  Search,
  Bell,
  HelpCircle,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Clock,
  X,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { UserProfileDropdown } from './UserProfileDropdown';

interface TopbarProps {
  onMenuToggle: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Topbar: React.FC<TopbarProps> = ({
  onMenuToggle,
  searchQuery,
  setSearchQuery,
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const { activeRole } = useAuth();

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Ernad Block Report Received',
      desc: 'Completion report for FMD Phase 24 awaiting review',
      time: '12m ago',
      unread: true,
      type: 'report',
    },
    {
      id: 2,
      title: 'Vaccine Buffer Alert',
      desc: 'District Central Cooler below 15% threshold for FMD bivalent',
      time: '45m ago',
      unread: true,
      type: 'alert',
    },
    {
      id: 3,
      title: 'Vehicle Insurance Renewal',
      desc: 'KL-10-AZ-4512 policy renewal due on Nov 12',
      time: '2h ago',
      unread: true,
      type: 'vehicle',
    },
  ]);

  const unreadCount = notifications.filter((n) => n.unread).length;

  const markAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, unread: false })));
  };

  return (
    <header className="sticky top-0 z-30 h-16 bg-white border-b border-[#E2E8F0] px-4 lg:px-8 flex items-center justify-between gap-4 transition-all">
      {/* Left: Mobile Toggle & Breadcrumbs */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          <Menu size={20} />
        </button>

        {/* Dynamic Breadcrumb based on Active Scope */}
        <nav className="flex items-center gap-1.5 text-xs md:text-sm text-slate-500 font-medium">
          <span className="hover:text-[#0E7D7A] transition-colors cursor-pointer">
            Home
          </span>
          <ChevronRight size={14} className="text-slate-400" />
          <span className="text-slate-900 font-semibold">Dashboard</span>
          <span className="hidden sm:inline-flex items-center gap-1 ml-2 px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200/80 text-[#0E7D7A] text-[11px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse" />
            {activeRole.scope.name}
          </span>
        </nav>
      </div>

      {/* Center: Global Search Field */}
      <div className="flex-1 max-w-md mx-2 hidden lg:block">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search records, staff, documents..."
            className="w-full pl-10 pr-10 py-1.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-xs md:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 focus:border-[#14B8A6] transition-all"
          />
          {searchQuery ? (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X size={14} />
            </button>
          ) : (
            <kbd className="hidden lg:inline-block absolute right-3 top-1/2 -translate-y-1/2 text-[10px] bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-400 font-mono">
              ⌘K
            </kbd>
          )}
        </div>
      </div>

      {/* Right: Actions & User Profile Dropdown */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* System Online Badge */}
        <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F0FDF4] border border-[#DCFCE7] text-[11px] text-[#166534] font-medium">
          <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
          <span>Operations Active</span>
        </div>

        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-lg text-slate-500 hover:text-[#0E7D7A] hover:bg-slate-100 transition-colors"
            aria-label="Notifications"
          >
            <Bell size={19} />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 min-w-[16px] h-4 px-1 rounded-full bg-[#F59E0B] text-white text-[10px] font-bold flex items-center justify-center leading-none ring-2 ring-white">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notification Popover Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-xl shadow-xl border border-[#E2E8F0] py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="px-4 pb-2 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-slate-800 text-sm">
                    Notifications
                  </h4>
                  <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-teal-100 text-[#0E7D7A] font-bold">
                    {unreadCount} new
                  </span>
                </div>
                {unreadCount > 0 && (
                  <button
                    onClick={markAllRead}
                    className="text-xs text-[#0E7D7A] hover:underline font-medium"
                  >
                    Mark all read
                  </button>
                )}
              </div>

              <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto">
                {notifications.map((item) => (
                  <div
                    key={item.id}
                    className={`px-4 py-3 hover:bg-slate-50 transition-colors flex gap-3 ${
                      item.unread ? 'bg-[#F0FDFA]/40' : ''
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">
                      {item.type === 'alert' ? (
                        <div className="p-1 rounded bg-amber-50 text-amber-600">
                          <AlertTriangle size={15} />
                        </div>
                      ) : item.type === 'report' ? (
                        <div className="p-1 rounded bg-teal-50 text-[#0E7D7A]">
                          <CheckCircle2 size={15} />
                        </div>
                      ) : (
                        <div className="p-1 rounded bg-blue-50 text-blue-600">
                          <Clock size={15} />
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-slate-800 leading-snug">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5 leading-snug line-clamp-2">
                        {item.desc}
                      </p>
                      <span className="text-[10px] text-slate-400 mt-1 inline-block">
                        {item.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-4 pt-2 border-t border-slate-100 text-center">
                <button
                  onClick={() => setShowNotifications(false)}
                  className="text-xs text-slate-500 hover:text-[#0E7D7A] font-medium"
                >
                  Close notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Help Icon */}
        <button
          className="p-2 rounded-lg text-slate-500 hover:text-[#0E7D7A] hover:bg-slate-100 transition-colors"
          title="Help & SOP Documentation"
          aria-label="Help"
        >
          <HelpCircle size={19} />
        </button>

        {/* Multi-Role Profile Dropdown */}
        <UserProfileDropdown />
      </div>
    </header>
  );
};
