import React from 'react';
import { SlideLayout } from '@/app/components/SlideLayout';
import { motion } from 'motion/react';
import svgPaths from "@/imports/svg-kppwyycpsv";

// Images
import imgHetzner from "@/assets/3775161f2b6658b17970c81127d196bfbcc3331a.png";
import imgHostinger from "@/assets/3e6bf0dfaf62c1830626609442eab81d93326812.png";
import imgCaasify from "@/assets/9231ea414c206a029c384af394fc23ee796aacbb.png";

export function CompetitionSlide() {
  return (
    <SlideLayout title="Competition" pageNumber={8}>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8 lg:gap-12 min-h-min lg:min-h-full items-center py-8 lg:py-0">
        
        {/* Left: Quadrant Chart (8 cols) */}
        <div className="w-full lg:col-span-8 relative aspect-[4/3] md:aspect-[16/9] bg-white/5 rounded-3xl border border-white/10 p-4 md:p-8 overflow-hidden">
           {/* Axes */}
           <div className="absolute top-8 bottom-8 md:top-12 md:bottom-12 left-[49.2%] w-[1px] bg-white/20"> {/* ~275/560 approx 49% */}
              <div className="absolute top-0 -translate-x-1/2 -translate-y-full text-[10px] md:text-xs text-white/50 uppercase font-bold tracking-wider mb-2">Affordable</div>
              <div className="absolute bottom-0 -translate-x-1/2 translate-y-full text-[10px] md:text-xs text-white/50 uppercase font-bold tracking-wider mt-2">Expensive</div>
           </div>
           <div className="absolute left-16 right-16 md:left-24 md:right-24 top-[51.7%] h-[1px] bg-white/20"> {/* ~199/385 approx 51% */}
              <div className="absolute left-0 -translate-x-full -translate-y-1/2 text-[10px] md:text-xs text-white/50 uppercase px-2 text-right font-bold tracking-wider leading-tight">Single<br/>Offering</div>
              <div className="absolute right-0 translate-x-full -translate-y-1/2 text-[10px] md:text-xs text-white/50 uppercase px-2 font-bold tracking-wider">Diversity</div>
           </div>

           {/* Competitors */}
           
           {/* Hetzner */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }} 
             animate={{ opacity: 1, scale: 1 }} 
             transition={{ delay: 0.5 }} 
             className="absolute top-[23.75%] left-[13.9%] w-[25.5%] h-[4%]"
           >
              <img src={imgHetzner} alt="Hetzner" className="w-full h-full object-contain object-left" />
           </motion.div>

           {/* Hostinger */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }} 
             animate={{ opacity: 1, scale: 1 }} 
             transition={{ delay: 0.6 }} 
             className="absolute top-[33.75%] left-[23.0%] w-[21.8%] h-[7%]"
           >
              <img src={imgHostinger} alt="Hostinger" className="w-full h-full object-contain object-left" />
           </motion.div>

           {/* Linode */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }} 
             animate={{ opacity: 1, scale: 1 }} 
             transition={{ delay: 0.7 }} 
             className="absolute top-[59.84%] left-[55.56%] w-[17.37%] h-[9.98%]"
           >
              <svg className="block w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 96.9671 38.4905">
                <g id="Group 214">
                  <path d={svgPaths.p32b95900} fill="var(--fill-0, #D9D9D9)" id="Vector" />
                  <g id="Group">
                    <path d={svgPaths.p30276570} fill="var(--fill-0, #004712)" id="Vector_2" />
                    <path d={svgPaths.p1b702d80} fill="var(--fill-0, #00B259)" id="Vector_3" />
                    <path d={svgPaths.p3c71a200} fill="var(--fill-0, black)" id="Vector_4" />
                  </g>
                </g>
              </svg>
           </motion.div>

           {/* DigitalOcean */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }} 
             animate={{ opacity: 1, scale: 1 }} 
             transition={{ delay: 0.8 }} 
             className="absolute top-[73.58%] left-[59.32%] w-[33.15%] h-[8.03%]"
           >
              <svg className="block w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 185 31">
                <path d={svgPaths.p2bb1c900} fill="var(--fill-0, #0069FF)" id="Vector" />
              </svg>
           </motion.div>

           {/* Caasify (Hero) */}
           <motion.div 
             initial={{ opacity: 0, scale: 0 }} 
             animate={{ opacity: 1, scale: 1 }} 
             transition={{ delay: 1, type: "spring" }} 
             className="absolute top-[20%] right-[0%] md:right-[0%] -translate-x-1/2 -translate-y-1/2 z-20"
           >
              <div className="flex items-center gap-2 md:gap-3 bg-[#0B0E14]/90 backdrop-blur-xl border border-blue-500/50 px-3 py-1.5 md:px-6 md:py-3 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                 <img src={imgCaasify} alt="Caasify" className="w-5 h-5 md:w-8 md:h-8 object-contain" />
                 <span className="text-sm md:text-2xl font-bold text-white">Caasify</span>
              </div>
           </motion.div>

           {/* Target Area Highlight */}
           <div className="absolute top-0 right-0 w-[50.8%] h-[51.7%] bg-blue-500/5 rounded-tr-3xl -z-10" />
        </div>

        {/* Right: Text (4 cols) */}
        <div className="lg:col-span-4 space-y-8">
           <h2 className="text-4xl font-bold text-yellow-400 leading-tight">
             Competitive <br/> Advantage
           </h2>
           <p className="text-xl text-white/80 font-light leading-relaxed">
             Caasify provides the widest range of <b className="text-white font-bold">Cloud options</b>, 
             the most <b className="text-white font-bold">Global Coverage</b>, and the most 
             <b className="text-white font-bold"> Budget-Friendly</b> solution in the market.
           </p>
        </div>

      </div>
    </SlideLayout>
  );
}
