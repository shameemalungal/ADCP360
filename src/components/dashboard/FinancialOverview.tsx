import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import {
  Landmark,
  IndianRupee,
  Wallet,
  Receipt,
  FileCheck,
  Building,
} from 'lucide-react';
import { FINANCIAL_HEADS } from '../../data/mockData';

export const FinancialOverview: React.FC = () => {
  const totalFunds = 4850000;
  const totalExpenditure = 3218450;
  const bankBalance = 1581550;
  const cashInHand = 50000;
  const utilisationPct = ((totalExpenditure / totalFunds) * 100).toFixed(1);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="mb-6">
      <Card
        title="Finance & Fund Utilisation"
        subtitle="Consolidated district operational budget & treasury allocation"
        icon={<Landmark size={18} />}
        badge={
          <Badge variant="warning" size="sm">
            Demonstration Data
          </Badge>
        }
        headerAction={
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-xs text-slate-500">
              Treasury Head: 2403-00-101-99
            </span>
            <Badge variant="teal" size="sm">
              FY 2026-27
            </Badge>
          </div>
        }
      >
        {/* Top 4 Financial Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-semibold">Total Funds Available</span>
              <Wallet size={15} className="text-[#0E7D7A]" />
            </div>
            <p className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              {formatINR(totalFunds)}
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              State & Central Share
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-teal-50/70 border border-teal-200/80">
            <div className="flex items-center justify-between text-teal-800">
              <span className="text-xs font-semibold">Expenditure this FY</span>
              <Receipt size={15} className="text-[#0E7D7A]" />
            </div>
            <p className="text-xl sm:text-2xl font-bold text-[#0E7D7A] mt-1">
              {formatINR(totalExpenditure)}
            </p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[11px] font-bold text-[#0E7D7A]">
                {utilisationPct}% utilised
              </span>
              <span className="text-[10px] text-teal-700">of total outlay</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/80">
            <div className="flex items-center justify-between text-blue-800">
              <span className="text-xs font-semibold">Bank Balance</span>
              <Building size={15} className="text-blue-600" />
            </div>
            <p className="text-xl sm:text-2xl font-bold text-blue-900 mt-1">
              {formatINR(bankBalance)}
            </p>
            <p className="text-[11px] text-blue-700 mt-0.5 truncate">
              SBI Malappuram Treasury A/C
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80">
            <div className="flex items-center justify-between text-emerald-800">
              <span className="text-xs font-semibold">Cash in Hand / Imprest</span>
              <IndianRupee size={15} className="text-emerald-600" />
            </div>
            <p className="text-xl sm:text-2xl font-bold text-emerald-900 mt-1">
              {formatINR(cashInHand)}
            </p>
            <p className="text-[11px] text-emerald-700 mt-0.5">
              Office Petty Cash Imprest
            </p>
          </div>
        </div>

        {/* UC Submission Status Banner */}
        <div className="mb-6 p-3.5 rounded-xl bg-[#F0FDFA] border border-[#CCFBF1] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-teal-100 text-[#0E7D7A] shrink-0">
              <FileCheck size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-800">
                  UC Submission Status (Utilisation Certificate):
                </span>
                <Badge variant="success" size="sm">
                  Submitted up to Q2 (Sep 2026)
                </Badge>
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                Next requirement: Q3 UC reconciliation due by 15 January 2027. No pending audit objections.
              </p>
            </div>
          </div>
          <button className="self-start sm:self-auto px-3 py-1.5 bg-white border border-[#14B8A6] text-[#0E7D7A] hover:bg-teal-50 rounded-lg text-xs font-semibold shadow-2xs transition-colors shrink-0">
            View UC Register
          </button>
        </div>

        {/* Horizontal Bar Chart of Expenditure by Financial Head */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Expenditure by Financial Head
            </h4>
            <span className="text-xs text-slate-500">
              Allocated vs Incurred
            </span>
          </div>

          <div className="space-y-3.5">
            {FINANCIAL_HEADS.map((item) => (
              <div key={item.head} className="group">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-semibold text-slate-700 group-hover:text-[#0E7D7A] transition-colors">
                    {item.head}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">
                      {formatINR(item.expenditure)}
                    </span>
                    <span className="text-slate-400">/</span>
                    <span className="text-slate-500">
                      {formatINR(item.budget)}
                    </span>
                    <span className="text-[11px] font-bold text-[#0E7D7A] w-12 text-right">
                      ({item.percentage}%)
                    </span>
                  </div>
                </div>

                {/* Progress track */}
                <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${item.percentage}%` }}
                    className="h-full rounded-full bg-gradient-to-r from-[#14B8A6] to-[#0E7D7A] group-hover:from-[#0E7D7A] group-hover:to-[#14B8A6] transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
