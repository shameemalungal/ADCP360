import React from 'react';
import {
  Target,
  Syringe,
  ClipboardList,
  FileCheck,
  Package,
  CalendarClock,
} from 'lucide-react';
import { KpiCardData } from '../../types/dashboard';

interface KpiGridProps {
  cards: KpiCardData[];
}

export const KpiGrid: React.FC<KpiGridProps> = ({ cards }) => {
  const getIcon = (name: KpiCardData['iconName']) => {
    switch (name) {
      case 'Target':
        return Target;
      case 'Syringe':
        return Syringe;
      case 'ClipboardList':
        return ClipboardList;
      case 'FileCheck':
        return FileCheck;
      case 'Package':
        return Package;
      case 'CalendarClock':
        return CalendarClock;
      default:
        return Target;
    }
  };

  const getTheme = (accent: KpiCardData['accentColor']) => {
    switch (accent) {
      case 'turquoise':
        return {
          iconBg: 'bg-[#F0FDFA] text-[#0E7D7A] border-[#CCFBF1]',
          badgeBg: 'text-[#0E7D7A] bg-teal-50',
          indicator: 'bg-[#14B8A6]',
        };
      case 'nature-green':
        return {
          iconBg: 'bg-[#F0FDF4] text-[#166534] border-[#BBF7D0]',
          badgeBg: 'text-[#166534] bg-green-50',
          indicator: 'bg-[#84D46B]',
        };
      case 'alert-orange':
        return {
          iconBg: 'bg-[#FFFBEB] text-[#B45309] border-[#FDE68A]',
          badgeBg: 'text-[#B45309] bg-amber-50',
          indicator: 'bg-[#F59E0B]',
        };
      case 'info-blue':
        return {
          iconBg: 'bg-[#EFF6FF] text-[#1D4ED8] border-[#BFDBFE]',
          badgeBg: 'text-[#1D4ED8] bg-blue-50',
          indicator: 'bg-[#3B82F6]',
        };
      case 'highlight-yellow':
        return {
          iconBg: 'bg-[#FEFCE8] text-[#854D0E] border-[#FEF08A]',
          badgeBg: 'text-[#854D0E] bg-yellow-50',
          indicator: 'bg-[#FCD34D]',
        };
      case 'deep-teal':
      default:
        return {
          iconBg: 'bg-[#F0FDFA] text-[#0E7D7A] border-[#99F6E4]',
          badgeBg: 'text-[#0E7D7A] bg-teal-50',
          indicator: 'bg-[#0E7D7A]',
        };
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3.5 sm:gap-4 mb-6">
      {cards.map((card) => {
        const IconComponent = getIcon(card.iconName);
        const theme = getTheme(card.accentColor);

        return (
          <div
            key={card.id}
            className="bg-white rounded-xl border border-[#E2E8F0] p-4 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top accent line */}
            <div
              className={`absolute top-0 left-0 right-0 h-1 ${theme.indicator} opacity-90`}
            />

            <div>
              {/* Header: Title and Icon */}
              <div className="flex items-start justify-between gap-2 mb-2 min-h-[36px]">
                <span className="text-[11.5px] font-semibold text-slate-700 leading-snug">
                  {card.title}
                </span>
                <div
                  className={`p-1.5 rounded-lg border shrink-0 transition-transform group-hover:scale-105 ${theme.iconBg}`}
                >
                  <IconComponent size={15} />
                </div>
              </div>

              {/* Metric Value */}
              <div className="font-bold text-2xl text-slate-900 tracking-tight leading-tight">
                {card.value}
              </div>
            </div>

            {/* Supporting Text & Trend */}
            <div className="mt-2 pt-2 border-t border-slate-100">
              <p className="text-[10.5px] text-slate-500 leading-tight">
                {card.supportingText}
              </p>
              {card.trend && (
                <div className="mt-1.5 flex items-center">
                  <span
                    className={`text-[9.5px] font-semibold px-1.5 py-0.5 rounded leading-tight ${theme.badgeBg}`}
                  >
                    {card.trend.value}
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
