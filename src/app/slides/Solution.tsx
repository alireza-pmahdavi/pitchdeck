import React from 'react';
import { SlideLayout } from '@/app/components/SlideLayout';
import { motion } from 'motion/react';
import { Network, Server, Globe, Cpu } from 'lucide-react';

export function SolutionSlide() {
  return (
    <SlideLayout title="Solution" pageNumber={3}>
      <div className="w-full min-h-full flex flex-col items-center justify-start md:justify-center py-12 md:py-0">
        <div className="relative z-10 text-center space-y-8 md:space-y-12 max-w-4xl w-full">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block p-3 md:p-4 mb-4 md:mb-6 rounded-full bg-yellow-400/10 border border-yellow-400/20">
               <Cpu className="text-yellow-400 w-8 h-8 md:w-12 md:h-12" />
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight">
              The solution is a <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Marketplace</span> for <br/>
              Cloud Industry
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-2xl lg:text-3xl text-white/70 font-light max-w-3xl mx-auto px-4"
          >
            A platform that gathers cloud providers & local data centers in one place.
          </motion.p>

          {/* Hub Connection Animation */}
          <div className="relative h-64 w-full max-w-2xl mx-auto mt-8 md:mt-12 flex items-center justify-center">
             {/* Central Hub */}
             <motion.div 
               className="relative w-16 h-16 md:w-24 md:h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.6)] z-20"
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{ delay: 0.8, type: "spring" }}
             >
               <Network className="text-white w-8 h-8 md:w-12 md:h-12" />
             </motion.div>

             {/* Orbiting Nodes Container - Scaled via CSS for responsiveness */}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-75 md:scale-100">
               {[0, 1, 2, 3, 4, 5].map((i) => (
                 <motion.div
                   key={i}
                   className="absolute w-4 h-4" // Container for the node, centered
                   initial={{ rotate: i * 60 }}
                   animate={{ rotate: i * 60 }} // Keep static rotation for position
                 >
                   <motion.div
                      className="absolute top-0 left-0 w-4 h-4 bg-white/40 rounded-full"
                      initial={{ x: 0, y: 0, opacity: 0 }}
                      animate={{ 
                        x: 120, // Move out to radius
                        opacity: 1
                      }}
                      transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                      style={{ transformOrigin: "center center" }}
                   >
                      <div className="absolute inset-0 bg-white/20 animate-ping rounded-full" />
                      
                      {/* Line connecting back to center (local coordinates relative to the node) */}
                      {/* We draw a line from the node (-120px back to 0) */}
                      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-4 overflow-visible -z-10" style={{ transform: "rotate(180deg)" }}>
                         <motion.line 
                           x1="0" y1="2" x2="0" y2="2" 
                           stroke="rgba(255,255,255,0.1)" 
                           strokeWidth="2"
                           animate={{ x2: 100 }} // Draw line towards center
                           transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                         />
                      </svg>
                   </motion.div>
                 </motion.div>
               ))}
             </div>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}
