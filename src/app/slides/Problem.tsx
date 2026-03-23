import React from 'react';
import { SlideLayout } from '@/app/components/SlideLayout';
import { GlassCard } from '@/app/components/GlassCard';
import { motion } from 'motion/react';
import { AlertTriangle, Layers, DollarSign, PackageX, Cloud } from 'lucide-react';

export function ProblemSlide() {
  const problems = [
    {
      icon: <Cloud className="text-blue-400" size={32} />,
      text: "A single Cloud provider cannot cover all startup needs.",
    },
    {
      icon: <Layers className="text-orange-400" size={32} />,
      text: "Ordering from multiple providers results in a disorganized system.",
    },
    {
      icon: <DollarSign className="text-red-400" size={32} />,
      text: "Disorganized systems can increase operational costs by up to 10 times.",
    },
  ];

  return (
    <SlideLayout title="The problem?" pageNumber={2}>
      <div className="w-full min-h-full flex flex-col justify-start md:justify-center py-12 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <div className="space-y-8 md:space-y-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-semibold leading-tight"
          >
            Common challenges startups face with cloud services
          </motion.h2>

          <div className="space-y-6">
            {problems.map((prob, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + 0.3 }}
              >
                <GlassCard className="flex items-center gap-6 p-6">
                  <div className="p-4 bg-white/5 rounded-full shrink-0">
                    {prob.icon}
                  </div>
                  <p className="text-xl md:text-2xl text-white/90 font-light">
                    {prob.text}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
           animate={{ opacity: 1, scale: 1, rotate: 0 }}
           transition={{ delay: 0.6, duration: 0.8 }}
           className="relative flex justify-center items-center"
        >
          {/* Abstract Illustration of "Burden" */}
          <div className="relative w-80 h-96">
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-indigo-500 rounded-full blur-2xl opacity-20" />
             
             {/* Character (Abstract) */}
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-40 bg-white/10 rounded-full border border-white/20 flex flex-col items-center justify-end p-4">
               <div className="w-12 h-12 bg-white/20 rounded-full mb-auto" />
             </div>

             {/* Heavy Boxes */}
             <div className="absolute top-10 left-0 w-32 h-32 bg-blue-600/80 backdrop-blur-md rounded-2xl border border-white/10 rotate-[-12deg] flex items-center justify-center shadow-2xl">
                <PackageX className="text-white/50 w-12 h-12" />
             </div>
             <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-600/80 backdrop-blur-md rounded-2xl border border-white/10 rotate-[12deg] z-10 flex items-center justify-center shadow-2xl">
                <Layers className="text-white/50 w-16 h-16" />
             </div>
             <div className="absolute top-32 left-10 w-24 h-24 bg-purple-600/80 backdrop-blur-md rounded-xl border border-white/10 rotate-[-5deg] z-20 flex items-center justify-center shadow-2xl">
                <AlertTriangle className="text-white/50 w-10 h-10" />
             </div>
          </div>
        </motion.div>

      </div>
      </div>
    </SlideLayout>
  );
}
