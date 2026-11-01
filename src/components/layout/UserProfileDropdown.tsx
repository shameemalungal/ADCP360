import React, { useState, useRef, useEffect } from 'react';
import {
  User,
  Settings,
  KeyRound,
  LogOut,
  CheckCircle2,
  Building,
  ShieldCheck,
  ChevronDown,
  Layers,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Badge } from '../common/Badge';

export const UserProfileDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { employee, roles, activeRole, switchRole, setShowLogoutConfirm, setActiveAccountModal } = useAuth();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleRoleSelect = (roleId: string) => {
    switchRole(roleId);
    setIsOpen(false);
  };

  const handleLogoutClick = () => {
    setIsOpen(false);
    setShowLogoutConfirm(true);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button in Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2.5 p-1 sm:pl-2 sm:pr-2.5 rounded-xl border transition-all text-left group
          ${
            isOpen
              ? 'bg-teal-50/80 border-[#14B8A6]/50 ring-2 ring-[#14B8A6]/20'
              : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-teal-200 shadow-2xs'
          }
        `}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="relative shrink-0">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0E7D7A] to-[#14B8A6] text-white flex items-center justify-center font-bold text-xs shadow-xs ring-1 ring-white">
            {employee.avatarText}
          </div>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#10B981] ring-2 ring-white" />
        </div>

        <div className="hidden sm:block min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-slate-900 group-hover:text-[#0E7D7A] transition-colors truncate max-w-[140px]">
              {employee.name}
            </span>
            <ChevronDown
              size={13}
              className={`text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#0E7D7A]' : ''}`}
            />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-semibold text-[#0E7D7A] truncate max-w-[130px]">
              {activeRole.roleName}
            </span>
            {activeRole.isAdditionalCharge && (
              <span className="text-[9px] font-bold px-1 py-0.2 rounded bg-amber-100 text-amber-800 shrink-0">
                Addl
              </span>
            )}
          </div>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-slate-200 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
          {/* Section 1: User Identity */}
          <div className="p-4 bg-gradient-to-br from-[#F0FDF4]/70 via-[#F0FDFA] to-white border-b border-slate-100">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0E7D7A] to-[#14B8A6] text-white flex items-center justify-center font-black text-base shadow-sm shrink-0 ring-2 ring-teal-100">
                {employee.avatarText}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-slate-900 text-sm truncate">
                    {employee.name}
                  </h4>
                  <ShieldCheck size={14} className="text-[#0E7D7A] shrink-0" />
                </div>
                <p className="text-xs font-semibold text-[#0E7D7A] mt-0.5 truncate">
                  {employee.designation}
                </p>
                <div className="flex items-start gap-1 mt-1 text-[11px] text-slate-500">
                  <Building size={12} className="text-slate-400 mt-0.5 shrink-0" />
                  <span className="line-clamp-2 leading-tight">
                    {employee.primaryOffice}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold">
                    {employee.id}
                  </span>
                  <span className="text-[10.5px] text-slate-400 truncate">
                    {employee.email}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: My Roles & Assignments */}
          <div className="p-3 bg-slate-50/60 border-b border-slate-100">
            <div className="flex items-center justify-between px-2 pb-2">
              <div className="flex items-center gap-1.5">
                <Layers size={13} className="text-[#0E7D7A]" />
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                  My Roles & Assignments
                </span>
              </div>
              <span className="text-[10.5px] font-semibold text-slate-400">
                {roles.length} Roles Assigned
              </span>
            </div>

            {roles.length > 1 ? (
              <div className="space-y-1.5 max-h-56 overflow-y-auto pr-0.5">
                {roles.map((role) => {
                  const isActive = role.id === activeRole.id;
                  return (
                    <button
                      key={role.id}
                      onClick={() => handleRoleSelect(role.id)}
                      className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-start justify-between gap-2.5 group
                        ${
                          isActive
                            ? 'bg-[#E6F8F6] border-[#14B8A6]/60 shadow-xs'
                            : 'bg-white hover:bg-teal-50/40 border-slate-200/80 hover:border-teal-200'
                        }
                      `}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs font-bold leading-tight ${
                              isActive ? 'text-[#0E7D7A]' : 'text-slate-800 group-hover:text-[#0E7D7A]'
                            }`}
                          >
                            {role.roleName}
                          </span>
                          {role.isAdditionalCharge && (
                            <span className="text-[9.5px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 border border-amber-200">
                              Additional Charge
                            </span>
                          )}
                        </div>

                        <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                          {role.institutionOrJurisdiction}
                        </p>

                        <div className="mt-1.5 flex items-center gap-2 text-[10px] text-slate-400">
                          <span className="capitalize font-semibold text-[#0E7D7A]/80">
                            Scope: {role.scope.type}
                          </span>
                          <span>•</span>
                          <span>{role.permittedModules.length} Modules</span>
                        </div>
                      </div>

                      {/* Active indicator */}
                      <div className="mt-0.5 shrink-0">
                        {isActive ? (
                          <div className="flex items-center gap-1 text-[11px] font-bold text-[#0E7D7A] bg-white px-2 py-0.5 rounded-full border border-teal-200 shadow-2xs">
                            <CheckCircle2 size={12} className="text-[#14B8A6]" />
                            <span>Active</span>
                          </div>
                        ) : (
                          <span className="text-[11px] text-slate-400 group-hover:text-[#0E7D7A] font-medium transition-colors">
                            Switch →
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              /* Single Role Display without unnecessary switcher */
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">
                    {roles[0].roleName}
                  </span>
                  <Badge variant="teal" size="sm">Primary Role</Badge>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  {roles[0].institutionOrJurisdiction}
                </p>
              </div>
            )}

            <p className="px-2 pt-2 text-[10px] text-slate-400 italic">
              Switching roles updates dashboard scope, data boundaries and permitted modules without re-authenticating.
            </p>
          </div>

          {/* Section 4: Account Options */}
          <div className="p-2 space-y-0.5">
            <button
              onClick={() => {
                setIsOpen(false);
                setActiveAccountModal('profile');
              }}
              className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <User size={15} className="text-slate-400" />
              <span>My Profile</span>
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                setActiveAccountModal('settings');
              }}
              className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <Settings size={15} className="text-slate-400" />
              <span>Account Settings</span>
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                setActiveAccountModal('password');
              }}
              className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <KeyRound size={15} className="text-slate-400" />
              <span>Change Password</span>
            </button>

            <div className="border-t border-slate-100 my-1" />

            {/* Logout Action */}
            <button
              onClick={handleLogoutClick}
              className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut size={15} className="text-red-500" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
