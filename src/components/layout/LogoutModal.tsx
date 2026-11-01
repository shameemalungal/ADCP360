import React from 'react';
import { LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const LogoutModal: React.FC = () => {
  const { showLogoutConfirm, setShowLogoutConfirm, logout, employee } = useAuth();

  if (!showLogoutConfirm) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-150">
        <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center mx-auto mb-4">
          <LogOut size={24} />
        </div>

        <div className="text-center">
          <h3 className="text-lg font-bold text-slate-900">
            Are you sure you want to log out?
          </h3>
          <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
            You will be signed out from ADCP 360° ({employee.name}). Any unsaved field records or draft verification forms should be submitted before logging out.
          </p>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button
            type="button"
            onClick={() => setShowLogoutConfirm(false)}
            className="flex-1 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={logout}
            className="flex-1 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors flex items-center justify-center gap-1.5"
          >
            <LogOut size={14} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};
