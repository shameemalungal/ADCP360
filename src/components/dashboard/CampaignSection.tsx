import React, { useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import {
  TrendingUp,
  PieChart as PieIcon,
  Info,
} from 'lucide-react';
import { CAMPAIGN_PROGRESS, SPECIES_DATA } from '../../data/mockData';

export const CampaignSection: React.FC = () => {
  const [selectedCampaign, setSelectedCampaign] = useState('fmd-24');
  const [dateRange, setDateRange] = useState('6m');

  const completed = 124850;
  const target = 150000;
  const achievementPct = ((completed / target) * 100).toFixed(1);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
      {/* Campaign Vaccination Progress Chart (Col 8) */}
      <div className="lg:col-span-8">
        <Card
          title="Campaign Vaccination Progress"
          subtitle="Progress timeline against provisional district targets"
          icon={<TrendingUp size={18} />}
          badge={
            <Badge variant="teal" size="sm">
              Phase 24
            </Badge>
          }
          headerAction={
            <div className="flex flex-wrap items-center gap-2">
              {/* Campaign Selector */}
              <div className="relative">
                <select
                  value={selectedCampaign}
                  onChange={(e) => setSelectedCampaign(e.target.value)}
                  className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#14B8A6]"
                >
                  <option value="fmd-24">FMD Phase 24 (Bovine)</option>
                  <option value="rabies-26">Rabies Control 2026</option>
                  <option value="brucella-08">Brucellosis S19 (Heifers)</option>
                </select>
              </div>

              {/* Date Range Selector */}
              <div className="flex bg-slate-100 p-0.5 rounded-lg text-[11px] font-medium text-slate-600">
                <button
                  onClick={() => setDateRange('1m')}
                  className={`px-2 py-0.5 rounded ${dateRange === '1m' ? 'bg-white shadow-2xs font-semibold text-slate-900' : 'hover:text-slate-900'}`}
                >
                  1M
                </button>
                <button
                  onClick={() => setDateRange('3m')}
                  className={`px-2 py-0.5 rounded ${dateRange === '3m' ? 'bg-white shadow-2xs font-semibold text-slate-900' : 'hover:text-slate-900'}`}
                >
                  3M
                </button>
                <button
                  onClick={() => setDateRange('6m')}
                  className={`px-2 py-0.5 rounded ${dateRange === '6m' ? 'bg-white shadow-2xs font-semibold text-slate-900' : 'hover:text-slate-900'}`}
                >
                  6M
                </button>
              </div>
            </div>
          }
        >
          {/* Summary Metric Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5 p-3 rounded-lg bg-[#F8FAFC] border border-slate-100">
            <div>
              <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wide">
                Vaccinated
              </p>
              <p className="text-base sm:text-lg font-bold text-slate-800 mt-0.5">
                {completed.toLocaleString('en-IN')}
              </p>
              <span className="text-[10px] text-[#0E7D7A] font-semibold">
                Doses Administered
              </span>
            </div>

            <div>
              <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wide">
                Target Population
              </p>
              <p className="text-base sm:text-lg font-bold text-slate-800 mt-0.5">
                {target.toLocaleString('en-IN')}
              </p>
              <span className="text-[10px] text-slate-500">
                Breedable Cattle/Buffalo
              </span>
            </div>

            <div>
              <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wide">
                Achievement
              </p>
              <p className="text-base sm:text-lg font-bold text-[#0E7D7A] mt-0.5">
                {achievementPct}%
              </p>
              <span className="text-[10px] text-emerald-600 font-semibold">
                +4.2% this week
              </span>
            </div>

            <div>
              <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wide">
                Data Status
              </p>
              <div className="mt-1">
                <Badge variant="warning" size="sm">
                  Provisional Sample
                </Badge>
              </div>
              <span className="text-[10px] text-slate-400 mt-0.5 block truncate">
                Formula not finalized
              </span>
            </div>
          </div>

          {/* Area Chart with Brand Gradient */}
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={CAMPAIGN_PROGRESS}
                margin={{ top: 10, right: 30, left: -10, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="primaryGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#84D46B" stopOpacity={0.02} />
                  </linearGradient>
                  <linearGradient id="targetGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#94A3B8" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#94A3B8" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#F1F5F9"
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  dy={6}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(val) => `${val / 1000}k`}
                />
                <Tooltip
                  formatter={(value: any, name: any) => [
                    `${Number(value).toLocaleString('en-IN')} animals`,
                    name === 'vaccinations' ? 'Vaccinated' : 'Target Target',
                  ]}
                  labelStyle={{ fontWeight: 600, color: '#0F172A' }}
                />
                <Area
                  type="monotone"
                  dataKey="target"
                  stroke="#94A3B8"
                  strokeWidth={1.5}
                  strokeDasharray="4 4"
                  fillOpacity={1}
                  fill="url(#targetGradient)"
                  name="target"
                />
                <Area
                  type="monotone"
                  dataKey="vaccinations"
                  stroke="#14B8A6"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#primaryGradient)"
                  name="vaccinations"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <Info size={12} className="text-slate-400" />
              Source: Malappuram Animal Husbandry field collation registers.
            </span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-0.5 bg-[#14B8A6]" /> Actual Progress
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-0.5 bg-slate-400 border-t border-dashed" /> Target Baseline
              </span>
            </div>
          </div>
        </Card>
      </div>

      {/* Vaccination by Species (Col 4) */}
      <div className="lg:col-span-4">
        <Card
          title="Vaccination by Species"
          subtitle="Illustrative livestock coverage"
          icon={<PieIcon size={18} />}
          badge={
            <Badge variant="neutral" size="sm">
              6 Species
            </Badge>
          }
        >
          {/* Doughnut Chart */}
          <div className="h-52 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={SPECIES_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={80}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {SPECIES_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: any, _name: any, item: any) => [
                    `${Number(value).toLocaleString('en-IN')} (${item.payload.percentage}%)`,
                    item.payload.name,
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>

            {/* Centered Total Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Total Doses
              </span>
              <span className="text-sm font-extrabold text-slate-800">
                1,24,850
              </span>
              <span className="text-[9.5px] text-[#0E7D7A] font-semibold">
                District Wide
              </span>
            </div>
          </div>

          {/* Species Legend Breakdown */}
          <div className="mt-3 divide-y divide-slate-100 pr-1">
            {SPECIES_DATA.map((item) => (
              <div
                key={item.name}
                className="py-1.5 flex items-center justify-between text-xs hover:bg-slate-50/50 px-1 rounded transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-slate-700 font-medium">{item.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-900 font-semibold">
                    {item.value.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[10.5px] text-slate-400 w-8 text-right">
                    {item.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
