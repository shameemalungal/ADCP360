import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import {
  History,
  Clock,
  ArrowRight,
  Boxes,
  Flag,
  FileCheck,
  Landmark,
  Microscope,
} from 'lucide-react';
import { RECENT_ACTIVITY } from '../../data/mockData';
import { ActivityItem } from '../../types/dashboard';

export const RecentActivity: React.FC = () => {
  const getCategoryIcon = (cat: ActivityItem['category']) => {
    switch (cat) {
      case 'Stock':
        return <Boxes size={14} className="text-[#0E7D7A]" />;
      case 'Campaign':
        return <Flag size={14} className="text-teal-600" />;
      case 'Verification':
        return <FileCheck size={14} className="text-blue-600" />;
      case 'Finance':
        return <Landmark size={14} className="text-amber-600" />;
      case 'Lab':
        return <Microscope size={14} className="text-emerald-600" />;
      default:
        return <History size={14} className="text-slate-500" />;
    }
  };

  const getCategoryBadge = (cat: ActivityItem['category']) => {
    switch (cat) {
      case 'Stock':
        return <Badge variant="teal" size="sm">Stock</Badge>;
      case 'Campaign':
        return <Badge variant="success" size="sm">Campaign</Badge>;
      case 'Verification':
        return <Badge variant="info" size="sm">Verification</Badge>;
      case 'Finance':
        return <Badge variant="warning" size="sm">Finance</Badge>;
      case 'Lab':
        return <Badge variant="success" size="sm">Surveillance</Badge>;
      default:
        return <Badge variant="neutral" size="sm">System</Badge>;
    }
  };

  return (
    <div>
      <Card
        title="Recent Activity"
        subtitle="Chronological audit trail of district-level actions and submissions"
        icon={<History size={18} />}
        badge={
          <Badge variant="teal" dot size="sm">
            Live Stream
          </Badge>
        }
        headerAction={
          <button className="text-xs font-semibold text-[#0E7D7A] hover:text-[#14B8A6] flex items-center gap-1 transition-colors">
            <span>View Full Audit Log</span>
            <ArrowRight size={13} />
          </button>
        }
        noPadding
      >
        <div className="divide-y divide-slate-100">
          {RECENT_ACTIVITY.map((act) => (
            <div
              key={act.id}
              className="p-4 hover:bg-[#F0FDFA]/40 transition-colors flex items-start gap-3.5 group"
            >
              {/* User Avatar */}
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-xs shrink-0 shadow-2xs mt-0.5"
                style={{ backgroundColor: act.avatarColor }}
              >
                {act.user
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .substring(0, 2)}
              </div>

              {/* Event Details */}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900">
                      {act.user}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      ({act.role})
                    </span>
                  </div>

                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Clock size={11} />
                    {act.timestamp}
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-1">
                  <span className="p-1 rounded bg-slate-100 shrink-0">
                    {getCategoryIcon(act.category)}
                  </span>
                  <span className="text-xs font-semibold text-[#0E7D7A] leading-snug">
                    {act.action}
                  </span>
                  {getCategoryBadge(act.category)}
                </div>

                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {act.subject}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 bg-[#F8FAFC] border-t border-slate-100 text-center text-xs text-slate-500">
          <span>All operational events are cryptographically recorded in the central audit ledger.</span>
        </div>
      </Card>
    </div>
  );
};

