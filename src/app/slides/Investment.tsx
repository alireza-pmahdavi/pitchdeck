import React from 'react';
import { SlideLayout } from '@/app/components/SlideLayout';
import { motion } from 'motion/react';
import { GlassCard } from '@/app/components/GlassCard';

const fundAllocation = [
  { label: 'Margin Improvement', pct: 30, amount: '€30K', color: '#3B82F6' },
  { label: 'Churn Reduction', pct: 25, amount: '€25K', color: '#EAB308' },
  { label: 'Growth Marketing', pct: 25, amount: '€25K', color: '#A855F7' },
  { label: 'First Hire (PT)', pct: 20, amount: '€20K', color: '#10B981' },
];

const milestones = [
  { label: 'MRR', value: '€3K' },
  { label: 'Customers', value: '500' },
  { label: 'Churn', value: '<15%' },
  { label: 'Gross Margin', value: '35%+' },
];

const dealTerms = [
  { label: 'Raising', value: '€100K' },
  { label: 'Cap', value: '€400K' },
  { label: 'Dilution', value: '~25%' },
];

export function InvestmentSlide() {
  return (
    <SlideLayout title="Investment" pageNumber={12} totalPages={15}>
      <div className="w-full flex-1 flex flex-col justify-center gap-8 py-8 md:py-0 max-w-3xl mx-auto">

        {/* Headline */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 leading-tight">
            Join Our Journey
          </h2>
          <p className="text-[#9A92B1] mt-2 text-sm md:text-base">Pre-Seed · SAFE Note</p>
        </motion.div>

        {/* Deal Terms */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="grid grid-cols-3 gap-4"
        >
          {dealTerms.map((t) => (
            <GlassCard key={t.label} className="p-4 md:p-6 text-center">
              <p className="text-[#535C6B] text-xs md:text-sm uppercase tracking-wider mb-1">{t.label}</p>
              <p className="text-2xl md:text-3xl font-extrabold text-[#EDEDEF]">{t.value}</p>
            </GlassCard>
          ))}
        </motion.div>

        {/* Use of Funds */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <GlassCard className="p-5 md:p-8">
            <p className="text-[#535C6B] text-xs uppercase tracking-wider mb-4">Use of Funds</p>
            <div className="flex flex-col gap-3">
              {fundAllocation.map((f) => (
                <div key={f.label} className="flex items-center gap-3">
                  <div className="w-full flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-[#EDEDEF]">{f.label}</span>
                      <span className="text-sm text-[#9A92B1]">{f.amount}</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${f.pct * (100 / 30)}%` }}
                        transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: f.color }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* 12-Month Targets */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          <GlassCard className="p-4 md:p-6">
            <p className="text-[#535C6B] text-xs uppercase tracking-wider mb-3">12-Month Targets</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {milestones.map((m) => (
                <div key={m.label} className="text-center">
                  <p className="text-xl md:text-2xl font-extrabold text-[#EDEDEF]">{m.value}</p>
                  <p className="text-xs text-[#9A92B1] mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

      </div>
    </SlideLayout>
  );
}
