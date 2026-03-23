import React from 'react';
import { SlideLayout } from '@/app/components/SlideLayout';
import { GlassCard } from '@/app/components/GlassCard';
import { motion } from 'motion/react';
import { CheckCircle2, Timer } from 'lucide-react';

export function WhyNowSlide() {
  const reasons = [
    { text: "Rising Cloud Adoption (Especially for Startups).", highlight: "Rising" },
    { text: "Demand for Economy Solution.", highlight: "Economy" },
    { text: "Lack of Centralized Affordable Solution.", highlight: "Affordable" },
    { text: "Increase Startups Seeking AI GPU hardware.", highlight: "Increase" },
  ];

  return (
    <SlideLayout title="Why Now?" pageNumber={5}>
      <div className="w-full flex-1 flex flex-col justify-center min-h-min py-8 md:py-0">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         
         <div className="space-y-8">
           <motion.h2 
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             className="text-6xl md:text-8xl font-bold mb-12 text-white"
           >
             Why <span className="text-yellow-400">Now?</span>
           </motion.h2>

           <div className="space-y-6">
             {reasons.map((reason, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.3 + i * 0.1 }}
                 className="flex items-center gap-4 group"
               >
                 <CheckCircle2 className="text-blue-500 w-8 h-8 shrink-0 group-hover:text-yellow-400 transition-colors" />
                 <p className="text-xl md:text-2xl font-light text-white/80">
                   {reason.text.split(reason.highlight).map((part, index, arr) => (
                     <span key={index}>
                       {part}
                       {index < arr.length - 1 && (
                         <span className="font-bold text-yellow-400">{reason.highlight}</span>
                       )}
                     </span>
                   ))}
                 </p>
               </motion.div>
             ))}
           </div>
         </div>

         <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.6 }}
           className="relative flex justify-center items-center"
         >
           {/* Abstract Clock Visualization */}
           <div className="relative w-[500px] h-[500px]">
              <svg className="w-full h-full" viewBox="0 0 200 200">
                {/* Clock Face */}
                <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                <motion.circle 
                  cx="100" cy="100" r="90" 
                  fill="none" 
                  stroke="#EAB308" 
                  strokeWidth="4"
                  strokeDasharray="565"
                  strokeDashoffset="565"
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  transform="rotate(-90 100 100)"
                />
                
                {/* Ticks */}
                {[...Array(12)].map((_, i) => (
                  <line 
                    key={i}
                    x1="100" y1="20" x2="100" y2="30" 
                    stroke="rgba(255,255,255,0.5)" 
                    strokeWidth="2" 
                    transform={`rotate(${i * 30} 100 100)`} 
                  />
                ))}

                {/* Hands */}
                <motion.line 
                   x1="100" y1="100" x2="100" y2="50"
                   stroke="white" strokeWidth="4" strokeLinecap="round"
                   animate={{ rotate: 360 }}
                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                   style={{ originX: "0.5", originY: "0.5" }} // Correction for SVG rotation
                />
                 <motion.line 
                   x1="100" y1="100" x2="140" y2="100"
                   stroke="#EAB308" strokeWidth="2" strokeLinecap="round"
                   animate={{ rotate: 360 * 60 }} // Faster
                   transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                   style={{ originX: "0.5", originY: "0.5" }}
                />
                
                {/* Central Runner Icon (Symbolic) */}
                <foreignObject x="70" y="130" width="60" height="60">
                   <div className="flex items-center justify-center h-full w-full bg-blue-600 rounded-full shadow-lg">
                      <Timer className="text-white w-8 h-8" />
                   </div>
                </foreignObject>
              </svg>
           </div>
         </motion.div>

       </div>
      </div>
    </SlideLayout>
  );
}
