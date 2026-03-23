import React, { useEffect, useState } from 'react';
import { SlideLayout } from '@/app/components/SlideLayout';
import { motion } from 'motion/react';
import { Cloud, ChevronRight, Globe, ArrowDown } from 'lucide-react';

export function CoverSlide() {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setName(searchParams.get('name'));
  }, []);

  return (
    <SlideLayout pageNumber={0}>
      <div className="w-full flex-1 flex flex-col items-center justify-center min-h-min py-8 md:py-0 text-center relative">
        
        {/* Simplified Background Orbit - Single large ring */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
             className="w-[120vw] h-[120vw] md:w-[900px] md:h-[900px] rounded-full border border-dashed border-white/5 relative opacity-60"
           >
             {/* Single subtle accent icon on the ring */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0B0E14]/50 backdrop-blur-sm p-3 rounded-full border border-white/5 text-blue-500/50 shadow-lg shadow-blue-500/10">
               <Globe className="w-4 h-4" />
             </div>
           </motion.div>
        </div>

        <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center z-10 px-4">
        
          {/* Welcome Message */}
          <div className="h-16 md:h-20 flex items-end justify-center mb-4 md:mb-8">
            {name && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-flex items-center px-4 py-1.5 md:px-6 md:py-2 rounded-full bg-blue-500/5 border border-blue-500/10 text-base md:text-xl text-blue-300/80 font-light tracking-wide backdrop-blur-sm">
                  Welcome, <span className="font-semibold text-white ml-1.5">{name}</span>
                </span>
              </motion.div>
            )}
          </div>

          {/* Central Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Logo */}
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 rounded-full" />
                <Cloud className="w-12 h-12 md:w-16 md:h-16 text-white/90 relative z-10" />
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-4 md:mb-6 drop-shadow-2xl">
              CAASIFY
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-2xl lg:text-3xl font-light text-blue-200/60 tracking-[0.25em] uppercase text-center">
              Cloud-As-A-Service
            </p>
          </motion.div>

          {/* Footer Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 md:mt-24 flex flex-col items-center gap-6"
          >
            <div className="h-px w-24 md:w-32 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <h3 className="text-xl md:text-2xl font-light text-white/60 text-center max-w-2xl leading-relaxed">
              Web Hosting <span className="text-white/20 mx-2">&</span> Public Cloud
            </h3>
          </motion.div>

          {/* Start Indicator - Points to Next Button */}
          <motion.div
            animate={{ y: [0, 25, 0] }}
            transition={{
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="fixed bottom-24 right-5 md:bottom-32 md:right-10 z-40 flex flex-col items-center gap-2 pointer-events-none"
          >
            <span className="text-sm md:text-base font-bold font-mono text-[#FFFFFF] tracking-widest uppercase writing-vertical-rl md:writing-horizontal-tb drop-shadow-[0_0_15px_rgba(255,255,255,1)]">Start</span>
            <ArrowDown className="w-8 h-8 md:w-10 md:h-10 text-[#FFFFFF] drop-shadow-[0_0_15px_rgba(255,255,255,1)]" />
          </motion.div>

        </div>
      </div>
    </SlideLayout>
  );
}
