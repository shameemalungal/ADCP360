import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import {
  FileCheck2,
  Workflow,
  ShieldAlert,
  CheckCircle2,
  Clock,
  RotateCcw,
  Microscope,
} from 'lucide-react';
import {
  REPORT_STATUS,
  VERIFICATION_STAGES,
  SURVEILLANCE_DATA,
} from '../../data/mockData';

export const OperationalOverview: React.FC = () => {
  const { expected, received, pending, returned } = REPORT_STATUS;
  const receivedPct = ((received / expected) * 100).toFixed(0);
  const pendingPct = ((pending / expected) * 100).toFixed(0);
  const returnedPct = ((returned / expected) * 100).toFixed(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      {/* 1. Report Submission Status */}
      <Card
        title="Report Submission Status"
        subtitle="Block & Taluk completion returns"
        icon={<FileCheck2 size={18} />}
        badge={
          <Badge variant="teal" size="sm">
            {receivedPct}% Completed
          </Badge>
        }
      >
        <div className="space-y-4">
          {/* Stacked Progress Bar */}
          <div>
            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex shadow-inner">
              <div
                style={{ width: `${receivedPct}%` }}
                className="bg-[#14B8A6] h-full transition-all"
                title={`Received: ${received} (${receivedPct}%)`}
              />
              <div
                style={{ width: `${pendingPct}%` }}
                className="bg-[#F59E0B] h-full transition-all"
                title={`Pending: ${pending} (${pendingPct}%)`}
              />
              <div
                style={{ width: `${returnedPct}%` }}
                className="bg-[#EF4444] h-full transition-all"
                title={`Returned: ${returned} (${returnedPct}%)`}
              />
            </div>
            <div className="flex items-center justify-between mt-1 text-[11px] text-slate-400">
              <span>{expected} Total Expected Reports</span>
              <span>{received} Received</span>
            </div>
          </div>

          {/* Metric Grid */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <div className="p-2.5 rounded-lg bg-teal-50/60 border border-teal-100">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-teal-800">Received</span>
                <CheckCircle2 size={13} className="text-[#0E7D7A]" />
              </div>
              <p className="text-xl font-bold text-[#0E7D7A] mt-1">{received}</p>
              <p className="text-[10px] text-teal-700/80">Approved for verification</p>
            </div>

            <div className="p-2.5 rounded-lg bg-amber-50/60 border border-amber-100">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-amber-800">Pending</span>
                <Clock size={13} className="text-amber-600" />
              </div>
              <p className="text-xl font-bold text-amber-700 mt-1">{pending}</p>
              <p className="text-[10px] text-amber-700/80">Awaiting block upload</p>
            </div>

            <div className="p-2.5 rounded-lg bg-red-50/60 border border-red-100">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-red-800">Returned</span>
                <RotateCcw size={13} className="text-red-600" />
              </div>
              <p className="text-xl font-bold text-red-700 mt-1">{returned}</p>
              <p className="text-[10px] text-red-700/80">Correction requested</p>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-700">Total Units</span>
                <span className="text-[10px] font-bold text-slate-400">100%</span>
              </div>
              <p className="text-xl font-bold text-slate-800 mt-1">{expected}</p>
              <p className="text-[10px] text-slate-500">Malappuram blocks</p>
            </div>
          </div>
        </div>
      </Card>

      {/* 2. Verification Workflow */}
      <Card
        title="Verification Workflow"
        subtitle="Audit & Digital Signature Stages"
        icon={<Workflow size={18} />}
        badge={
          <Badge variant="info" size="sm">
            Statutory Audit
          </Badge>
        }
      >
        <div className="space-y-3">
          {/* Linear Stepper */}
          <div className="relative pl-6 space-y-4 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
            {VERIFICATION_STAGES.map((st, idx) => (
              <div key={st.stage} className="relative group">
                {/* Node indicator */}
                <div
                  className={`absolute -left-6 top-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ring-4 ring-white
                    ${
                      idx === 2
                        ? 'bg-[#0E7D7A] text-white shadow-xs'
                        : idx === 1
                        ? 'bg-[#14B8A6] text-white'
                        : 'bg-slate-300 text-slate-700'
                    }
                  `}
                >
                  {idx + 1}
                </div>

                <div className="bg-slate-50 hover:bg-[#F0FDFA] p-2.5 rounded-lg border border-slate-200/80 transition-colors">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-slate-800">{st.stage}</p>
                    <span className="text-[11px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900">
                      {st.pendingCount} Pending
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">{st.role}</p>
                  <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400">
                    <span className="text-[#0E7D7A] font-semibold">
                      {st.percentage}
                    </span>
                    <span>{st.verifiedCount} verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-2 rounded-lg bg-blue-50/70 border border-blue-100 text-[11px] text-blue-900 flex items-start gap-1.5">
            <span className="font-bold shrink-0">Rule:</span>
            <span>Taluk Coordinator verifies 5%; District Coordinator verifies 2% independently.</span>
          </div>
        </div>
      </Card>

      {/* 3. Disease Surveillance */}
      <Card
        title="Disease Surveillance"
        subtitle="Epidemiological intelligence Malappuram"
        icon={<ShieldAlert size={18} />}
        badge={
          <Badge variant="success" dot size="sm">
            Low Threat Level
          </Badge>
        }
      >
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-orange-50/70 border border-orange-200/60">
              <span className="text-[11px] font-medium text-orange-800 uppercase">
                New Outbreaks
              </span>
              <p className="text-2xl font-black text-orange-600 mt-1">
                {SURVEILLANCE_DATA.newOutbreaks}
              </p>
              <p className="text-[10px] text-orange-700 mt-0.5">Reported past 7 days</p>
            </div>

            <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200/60">
              <span className="text-[11px] font-medium text-blue-800 uppercase">
                Lab Confirmation
              </span>
              <p className="text-2xl font-black text-blue-600 mt-1">
                {SURVEILLANCE_DATA.labPending}
              </p>
              <p className="text-[10px] text-blue-700 mt-0.5">Pending analysis</p>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/60">
              <span className="text-[11px] font-medium text-emerald-800 uppercase">
                Confirmed Outbreaks
              </span>
              <p className="text-2xl font-black text-emerald-600 mt-1">
                {SURVEILLANCE_DATA.confirmed}
              </p>
              <p className="text-[10px] text-emerald-700 mt-0.5">Active quarantine: 0</p>
            </div>

            <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-200/60">
              <span className="text-[11px] font-medium text-purple-800 uppercase">
                Awaiting Results
              </span>
              <p className="text-2xl font-black text-purple-600 mt-1">
                {SURVEILLANCE_DATA.samplesAwaiting}
              </p>
              <p className="text-[10px] text-purple-700 mt-0.5">Serum/Swab samples</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100 text-xs">
            <span className="text-slate-600 flex items-center gap-1.5">
              <Microscope size={14} className="text-[#0E7D7A]" />
              State Diagnostic Lab, Palode
            </span>
            <Badge variant="teal" size="sm">
              Batch #KL-MPM-88
            </Badge>
          </div>
        </div>
      </Card>
    </div>
  );
};
