import React from 'react';

export type BadgeVariant = 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'teal';

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  dot?: boolean;
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'neutral',
  children,
  dot = false,
  className = '',
  size = 'md',
}) => {
  const variantStyles: Record<BadgeVariant, { bg: string; text: string; dotColor: string; border: string }> = {
    success: {
      bg: 'bg-[#F0FDF4]',
      text: 'text-[#166534]',
      dotColor: 'bg-[#16A34A]',
      border: 'border-[#BBF7D0]',
    },
    warning: {
      bg: 'bg-[#FFFBEB]',
      text: 'text-[#B45309]',
      dotColor: 'bg-[#F59E0B]',
      border: 'border-[#FDE68A]',
    },
    danger: {
      bg: 'bg-[#FEF2F2]',
      text: 'text-[#B91C1C]',
      dotColor: 'bg-[#EF4444]',
      border: 'border-[#FECACA]',
    },
    info: {
      bg: 'bg-[#EFF6FF]',
      text: 'text-[#1D4ED8]',
      dotColor: 'bg-[#3B82F6]',
      border: 'border-[#BFDBFE]',
    },
    teal: {
      bg: 'bg-[#F0FDFA]',
      text: 'text-[#0E7D7A]',
      dotColor: 'bg-[#14B8A6]',
      border: 'border-[#CCFBF1]',
    },
    neutral: {
      bg: 'bg-[#F8FAFC]',
      text: 'text-[#475569]',
      dotColor: 'bg-[#94A3B8]',
      border: 'border-[#E2E8F0]',
    },
  };

  const style = variantStyles[variant];
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs';

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border ${style.bg} ${style.text} ${style.border} ${sizeClasses} ${className}`}
    >
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${style.dotColor} shrink-0 animate-pulse`} />
      )}
      {children}
    </span>
  );
};

