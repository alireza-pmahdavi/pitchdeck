import React from 'react';
import { twMerge } from 'tailwind-merge';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export function GlassCard({ className, hoverEffect = false, children, ...props }: GlassCardProps) {
  return (
    <div
      className={twMerge(
        "relative overflow-hidden rounded-2xl border border-white/5 bg-[#0B0E14]/60 backdrop-blur-xl p-6 md:p-8 transition-all duration-300",
        hoverEffect && "hover:bg-[#0B0E14]/80 hover:border-white/10 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] group",
        className
      )}
      {...props}
    >
      {/* Glossy gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
      {children}
    </div>
  );
}
