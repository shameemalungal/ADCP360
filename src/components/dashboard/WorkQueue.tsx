import React, { useState } from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import {
  CheckSquare,
  Calendar,
  ChevronRight,
} from 'lucide-react';
import { WORK_QUEUE } from '../../data/mockData';
import { WorkQueueItem } from '../../types/dashboard';

export const WorkQueue: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Urgent' | 'High' | 'Medium'>('All');
  const items = WORK_QUEUE;
  const [selectedTask, setSelectedTask] = useState<WorkQueueItem | null>(null);

  const filteredItems = items.filter((item) => {
    if (filter === 'All') return true;
    return item.priority === filter;
  });

  const handleActionClick = (item: WorkQueueItem) => {
    setSelectedTask(item);
  };

  const getPriorityBadge = (p: WorkQueueItem['priority']) => {
    switch (p) {
      case 'Urgent':
        return (
          <Badge variant="danger" dot size="sm">
            Urgent
          </Badge>
        );
      case 'High':
        return (
          <Badge variant="warning" dot size="sm">
            High Priority
          </Badge>
        );
      case 'Medium':
        return (
          <Badge variant="info" size="sm">
            Medium
          </Badge>
        );
      default:
        return (
          <Badge variant="neutral" size="sm">
            Routine
          </Badge>
        );
    }
  };

  return (
    <div className="mb-6">
      <Card
        title="Pending Actions"
        subtitle="Priority tasks requiring District Coordinator approval, verification, or receipt"
        icon={<CheckSquare size={18} />}
        badge={
          <Badge variant="danger" size="sm">
            {items.length} Pending
          </Badge>
        }
        headerAction={
          <div className="flex items-center gap-1.5 bg-slate-100 p-0.5 rounded-lg text-xs font-medium text-slate-600">
            {(['All', 'Urgent', 'High', 'Medium'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-2.5 py-1 rounded transition-colors ${
                  filter === tab
                    ? 'bg-white font-bold text-slate-900 shadow-2xs'
                    : 'hover:text-slate-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        }
        noPadding
      >
        <div className="divide-y divide-slate-100">
          {filteredItems.map((task) => (
            <div
              key={task.id}
              onClick={() => handleActionClick(task)}
              className="p-4 hover:bg-[#F0FDFA]/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 group cursor-pointer"
            >
              {/* Task Details */}
              <div className="flex items-start gap-3.5 min-w-0">
                <div className="mt-0.5 p-2 rounded-lg bg-slate-100 group-hover:bg-teal-50 group-hover:text-[#0E7D7A] text-slate-500 transition-colors shrink-0">
                  <CheckSquare size={16} />
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0E7D7A] transition-colors leading-snug">
                      {task.title}
                    </h4>
                    {getPriorityBadge(task.priority)}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-slate-500">
                    <span className="font-semibold text-[#0E7D7A] bg-teal-50/70 px-2 py-0.5 rounded border border-teal-100 text-[11px]">
                      {task.module}
                    </span>
                    <span>•</span>
                    <span className="text-slate-600 font-medium truncate">
                      {task.talukOrBlock}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[11px] text-slate-400">
                      <Calendar size={12} />
                      {task.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleActionClick(task);
                  }}
                  className="px-3 py-1.5 bg-white group-hover:bg-[#0E7D7A] group-hover:text-white border border-[#0E7D7A] text-[#0E7D7A] rounded-lg text-xs font-semibold shadow-2xs transition-all flex items-center gap-1"
                >
                  <span>{task.actionText}</span>
                  <ChevronRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Task Modal / Quick Detail Popover */}
        {selectedTask && (
          <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold text-[#0E7D7A] uppercase tracking-wider">
                    {selectedTask.module}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                    {selectedTask.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Jurisdiction: {selectedTask.talukOrBlock}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedTask(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
                >
                  ✕
                </button>
              </div>

              <div className="py-4 space-y-3 text-xs text-slate-600">
                <div className="p-3 bg-[#F0F9FF] rounded-xl border border-sky-100">
                  <p className="font-semibold text-sky-900">Task Summary</p>
                  <p className="mt-1 text-sky-800 leading-relaxed">
                    This item has been flagged for statutory verification by the District Coordinator, Malappuram. The data has been approved at Supervisor and Taluk levels and requires digital authentication or final sign-off.
                  </p>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-400">Submission Date:</span>
                  <span className="font-semibold text-slate-800">{selectedTask.date}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-400">Audit Quota Requirement:</span>
                  <span className="font-semibold text-slate-800">2% District Level Sampling</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  onClick={() => setSelectedTask(null)}
                  className="px-4 py-2 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-lg text-xs font-semibold"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    alert(`Action "${selectedTask.actionText}" triggered for ${selectedTask.title}`);
                    setSelectedTask(null);
                  }}
                  className="px-4 py-2 bg-[#0E7D7A] hover:bg-[#14B8A6] text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
                >
                  Proceed with {selectedTask.actionText}
                </button>
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};
