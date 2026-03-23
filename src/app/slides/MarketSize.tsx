import React from 'react';
import { SlideLayout } from '@/app/components/SlideLayout';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { year: '2020', value: 310 },
  { year: '2021', value: 434 },
  { year: '2022', value: 564 },
  { year: '2023', value: 633 },
  { year: '2024', value: 722 },
  { year: '2025', value: 868 },
  { year: '2026', value: 1024 },
  { year: '2027', value: 1167 },
  { year: '2028', value: 1282 },
];

export function MarketSizeSlide() {
  return (
    <SlideLayout title="Global Market Size" pageNumber={7}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-full py-12 md:py-0">
        
        {/* Left Col: Stats & Circles (4 cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full py-4">
           {/* Stats Text */}
           <div className="space-y-6">
             <div>
               <p className="text-white/60 text-sm uppercase tracking-wider">Web Hosting Companies</p>
               <h3 className="text-5xl font-bold text-white">338K</h3>
             </div>
             <div>
               <p className="text-white/60 text-sm uppercase tracking-wider">Data Centers</p>
               <h3 className="text-5xl font-bold text-white">11K</h3>
             </div>
             <div>
               <p className="text-white/60 text-sm uppercase tracking-wider">CAGR</p>
               <h3 className="text-5xl font-bold text-emerald-400">19%</h3>
             </div>
           </div>

           {/* TAM SAM SOM Circles */}
           <div className="relative w-full aspect-square mt-8 flex items-center justify-center">
              {/* TAM */}
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}
                className="absolute w-full h-full bg-blue-500/10 rounded-full border border-blue-500/30 flex items-start justify-center pt-8"
              >
                <div className="text-center">
                   <p className="font-bold text-blue-300">TAM</p>
                   <p className="text-sm text-blue-200">$18 Billion</p>
                </div>
              </motion.div>

              {/* SAM */}
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }}
                className="absolute w-[70%] h-[70%] bg-indigo-500/20 rounded-full border border-indigo-500/30 flex items-start justify-center pt-6 top-[30%]"
              >
                 <div className="text-center">
                   <p className="font-bold text-indigo-300">SAM</p>
                   <p className="text-sm text-indigo-200">$250 Million</p>
                </div>
              </motion.div>

              {/* SOM */}
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 }}
                className="absolute w-[45%] h-[45%] bg-yellow-400 rounded-full flex items-center justify-center top-[55%] shadow-lg shadow-yellow-400/20"
              >
                 <div className="text-center text-black">
                   <p className="font-bold">SOM</p>
                   <p className="text-xs font-semibold">$1.5 Million</p>
                </div>
              </motion.div>
           </div>
        </div>

        {/* Right Col: Chart (8 cols) */}
        <div className="lg:col-span-8 flex flex-col justify-center h-full min-h-[400px]">
           <h3 className="text-xl text-white/80 mb-6 pl-4 border-l-4 border-blue-500">Total Cloud Market size (Billion Dollar)</h3>
           <div className="w-full h-[400px] md:h-[500px]">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart 
                 data={[
                   { year: '2020', value: 310 },
                   { year: '2021', value: 434 },
                   { year: '2022', value: 564 },
                   { year: '2023', value: 633 },
                   { year: '2024', value: 722 },
                   { year: '2025', value: 868 },
                   { year: '2026', value: 1024 },
                   { year: '2027', value: 1167 },
                   { year: '2028', value: 1282 },
                 ]} 
                 margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
               >
                 <defs>
                   <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="0%" stopColor="#08FFD3" stopOpacity={0.8} />
                     <stop offset="100%" stopColor="#0074BE" stopOpacity={1} />
                   </linearGradient>
                 </defs>
                 <XAxis 
                   dataKey="year" 
                   tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} 
                   axisLine={false} 
                   tickLine={false} 
                 />
                 <Tooltip 
                   cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                   contentStyle={{ backgroundColor: '#0B0E14', borderColor: '#333', color: '#fff' }}
                 />
                 <Bar 
                   dataKey="value" 
                   radius={[4, 4, 0, 0]} 
                   fill="url(#barGradient)" 
                   label={{ position: 'top', fill: '#fff', fontSize: 12 }}
                 />
               </BarChart>
             </ResponsiveContainer>
           </div>
           

        </div>

      </div>
    </SlideLayout>
  );
}
