import React from 'react';
import { SlideLayout } from '@/app/components/SlideLayout';
import { motion } from 'motion/react';

export function EndSlide() {
  return (
    <SlideLayout 
      pageNumber={14} 
      totalPages={14} 
    >
      <div className="flex-1 flex flex-col items-center justify-center min-h-full py-8 text-center">
        <div className="w-full max-w-4xl flex flex-col items-center gap-8 md:gap-12">
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-2 md:space-y-4"
          >
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
              CAASIFY
            </h1>
            <p className="text-lg md:text-2xl lg:text-3xl font-bold tracking-widest text-white/80 uppercase">
              Cloud As A Service
            </p>
          </motion.div>

          <motion.div 
            className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <a href="https://www.caasify.com" target="_blank" rel="noopener noreferrer" className="block text-3xl md:text-4xl lg:text-5xl font-bold text-white hover:text-[#FFC337] transition-colors break-all md:break-normal">
              www.Caasify.com
            </a>

            <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 md:gap-12 text-white/70 text-base md:text-lg lg:text-xl">
              <a href="https://linkedin.com/company/caasify" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline underline-offset-4 transition-all">
                Linkedin
              </a>
              <span>Email: info@caasify.com</span>
              <span className="whitespace-nowrap">Phone: + (370) 696 02760</span>
            </div>
          </motion.div>

        </div>
      </div>
    </SlideLayout>
  );
}
