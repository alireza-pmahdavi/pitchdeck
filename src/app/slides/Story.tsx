import React from 'react';
import { SlideLayout } from '@/app/components/SlideLayout';
import { GlassCard } from '@/app/components/GlassCard';
import { motion } from 'motion/react';
import { TrendingDown, Clock, Banknote } from 'lucide-react';

export function StorySlide() {
  return (
    <SlideLayout title="Story" pageNumber={1}>
      <div className="w-full flex-1 flex flex-col justify-center min-h-min py-8 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-medium leading-tight">
              Cloud solutions consume <span className="text-yellow-400 font-bold">23%</span> of <span className="text-yellow-400 font-bold">startups'</span> time...
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-medium leading-tight">
              ...and eat up over <span className="text-yellow-400 font-bold">35%</span> of their budgets!
            </h2>
          </motion.div>
        </div>

        {/* Right Column: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative flex justify-center"
        >
          <GlassCard className="w-full max-w-md aspect-square flex flex-col items-center justify-center p-12 bg-red-500/5 border-red-500/20">
             {/* Animated Chart Concept */}
             <div className="relative w-full h-48 mb-8">
               <motion.div 
                 initial={{ height: 0 }}
                 animate={{ height: "100%" }}
                 transition={{ duration: 1.5, ease: "circOut" }}
                 className="absolute left-10 bottom-0 w-4 bg-white/10 rounded-t-full"
               />
               <motion.div 
                 initial={{ height: 0 }}
                 animate={{ height: "80%" }}
                 transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
                 className="absolute left-24 bottom-0 w-4 bg-white/10 rounded-t-full"
               />
                <motion.div 
                 initial={{ height: 0 }}
                 animate={{ height: "40%" }}
                 transition={{ duration: 1.5, ease: "circOut", delay: 0.4 }}
                 className="absolute left-38 bottom-0 w-4 bg-white/10 rounded-t-full"
               />
               
               {/* Arrow crashing down */}
               <svg className="absolute inset-0 w-full h-full overflow-visible">
                 <motion.path
                   d="M 20 20 L 100 100 L 200 180"
                   fill="none"
                   stroke="#EF4444"
                   strokeWidth="8"
                   strokeLinecap="round"
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: 1 }}
                   transition={{ duration: 1.5, delay: 0.5 }}
                 />
                 <motion.path 
                    d="M 180 180 L 200 180 L 200 160"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="8"
                    strokeLinecap="round"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                 />
               </svg>
             </div>

             <div className="flex gap-6 w-full justify-between px-4">
                <div className="flex flex-col items-center gap-2 text-red-400">
                   <Clock size={32} />
                   <span className="font-bold text-xl">-23% Time</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-red-400">
                   <Banknote size={32} />
                   <span className="font-bold text-xl">-35% Budget</span>
                </div>
             </div>
          </GlassCard>
        </motion.div>
      </div>
      </div>
    </SlideLayout>
  );
}
