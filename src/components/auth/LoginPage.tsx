import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const [empId, setEmpId] = useState('EMP-MPM-1002');
  const [password, setPassword] = useState('••••••••••••');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      login();
      setLoading(false);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#F0F9FF] flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        {/* Brand Emblem */}
        <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#14B8A6] to-[#84D46B] p-1 shadow-md mb-4 items-center justify-center">
          <img
            src="/adcp-logo.png"
            alt="ADCP 360°"
            className="w-full h-full object-contain rounded-xl bg-white p-1"
          />
        </div>

        <div className="flex items-center justify-center gap-1.5">
          <span className="font-extrabold text-[#0E7D7A] tracking-tight text-2xl">
            ADCP
          </span>
          <span className="font-extrabold text-[#14B8A6] tracking-tight text-2xl">
            360°
          </span>
        </div>
        <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mt-1">
          INTEGRATED ADMINISTRATION & OPERATIONS PLATFORM
        </p>
        <p className="text-xs text-[#0E7D7A] font-semibold mt-1">
          Animal Disease Control Project • Malappuram, Kerala
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-6 sm:px-10 rounded-2xl border border-slate-200 shadow-xl">
          <div className="mb-6 pb-4 border-b border-slate-100 text-center">
            <h3 className="text-base font-bold text-slate-900">
              Departmental Staff Authentication
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Enter credentials or resume with assigned employee profile.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Employee ID / PEN
              </label>
              <div className="mt-1 relative">
                <input
                  type="text"
                  required
                  value={empId}
                  onChange={(e) => setEmpId(e.target.value)}
                  className="w-full pl-3 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 focus:border-[#14B8A6]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-3 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 focus:border-[#14B8A6]"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0E7D7A] hover:bg-[#14B8A6] text-white rounded-xl text-xs font-bold shadow-md transition-all active:scale-[0.99] disabled:opacity-50"
              >
                {loading ? (
                  <span>Authenticating...</span>
                ) : (
                  <>
                    <span>Sign In to ADCP 360°</span>
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Quick Demo Re-sign-in Shortcut */}
          <div className="mt-6 pt-4 border-t border-slate-100">
            <p className="text-[10px] uppercase font-bold text-slate-400 text-center tracking-wider mb-2">
              Quick Test Profile
            </p>
            <button
              type="button"
              onClick={login}
              className="w-full p-2.5 bg-teal-50/60 hover:bg-teal-50 border border-teal-200/80 rounded-xl text-left flex items-center justify-between group transition-colors"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-[#0E7D7A] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  DC
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-900 group-hover:text-[#0E7D7A] truncate">
                    Dr. K. Narayanan
                  </p>
                  <p className="text-[10px] text-slate-500 truncate">
                    Senior Vet Surgeon (District Coordinator & Multiple Charges)
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-[#0E7D7A] shrink-0">
                Sign In →
              </span>
            </button>
          </div>
        </div>

        <p className="text-center text-[11px] text-slate-400 mt-6">
          ADCP 360° • Department of Animal Husbandry, Kerala
        </p>
      </div>
    </div>
  );
};
