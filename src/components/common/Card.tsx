import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  headerAction?: React.ReactNode;
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  headerAction,
  title,
  subtitle,
  icon,
  badge,
  noPadding = false,
}) => {
  const hasHeader = title || subtitle || icon || headerAction || badge;

  return (
    <div
      className={`bg-white rounded-xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col ${className}`}
    >
      {hasHeader && (
        <div className="px-5 py-4 border-b border-[#F1F5F9] flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            {icon && (
              <div className="p-1.5 rounded-lg bg-[#F0FDFA] text-[#0E7D7A] shrink-0">
                {icon}
              </div>
            )}
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                {title && (
                  <h3 className="font-semibold text-slate-900 text-sm md:text-base leading-tight">
                    {title}
                  </h3>
                )}
                {badge}
              </div>
              {subtitle && (
                <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
              )}
            </div>
          </div>
          {headerAction && <div className="shrink-0">{headerAction}</div>}
        </div>
      )}
      <div className={`flex-1 ${noPadding ? '' : 'p-5'}`}>{children}</div>
    </div>
  );
};
