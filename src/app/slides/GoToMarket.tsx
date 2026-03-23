import React from 'react';
import { SlideLayout } from '@/app/components/SlideLayout';
import { GlassCard } from '@/app/components/GlassCard';
import { motion } from 'motion/react';
import { Rocket, Search, Megaphone, Gift, Zap } from 'lucide-react';

export function GoToMarketSlide() {
  const strategies = [
    {
      title: "SEO",
      desc: "Automatic generation of content for various business lines through N8N.",
      icon: <Search size={24} className="text-yellow-400" />
    },
    {
      title: "Paid Marketing",
      desc: "Use Google and LinkedIn ads to target SMEs.",
      icon: <Megaphone size={24} className="text-yellow-400" />
    },
    {
      title: "Promotions",
      desc: "Give up to 25% bonus and 5% affiliate rewards for sign-ups.",
      icon: <Gift size={24} className="text-yellow-400" />
    },
    {
      title: "Free Trial",
      desc: "Offer a limited cloud service at no cost.",
      icon: <Zap size={24} className="text-yellow-400" />
    }
  ];

  return (
    <SlideLayout title="Go-To-Market" pageNumber={10}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-full py-12 md:py-0">
        
        {/* Left: Content */}
        <div className="space-y-6">
          {strategies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
            >
               <GlassCard className="p-6 hover:bg-white/10 transition-colors group">
                 <div className="flex flex-col gap-2">
                   <h3 className="text-2xl font-bold text-yellow-400 flex items-center gap-3">
                     <span className="p-2 bg-yellow-400/10 rounded-lg group-hover:bg-yellow-400/20 transition-colors">
                       {item.icon}
                     </span>
                     {item.title}
                   </h3>
                   <p className="text-white/80 text-lg font-light pl-[52px]">
                     {item.desc}
                   </p>
                 </div>
               </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Right: Rocket Visualization */}
        <div className="relative flex items-center justify-center min-h-[500px]">
           {/* Launch Pad Base */}
           <div className="absolute bottom-0 w-3/4 h-4 bg-white/10 rounded-full blur-sm" />
           
           {/* Rocket Group */}
           <motion.div
             initial={{ y: 200, opacity: 0 }}
             animate={{ y: -20, opacity: 1 }}
             transition={{ duration: 1.5, ease: "easeOut" }}
             className="relative z-10"
           >
              {/* Rocket Body (Abstracted) */}
              <div className="relative">
                 <div className="absolute inset-0 bg-blue-500 blur-[60px] opacity-40 rounded-full" />
                 <Rocket size={200} className="text-white relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" strokeWidth={1} />
                 
                 {/* Flames */}
                 <motion.div
                   animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                   transition={{ duration: 0.2, repeat: Infinity, repeatType: "reverse" }}
                   className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-12 h-32 bg-gradient-to-b from-yellow-400 to-transparent blur-md rounded-full"
                 />
                 <motion.div
                   animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.9, 0.6] }}
                   transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse", delay: 0.1 }}
                   className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-orange-500/50 blur-xl rounded-full"
                 />
              </div>
           </motion.div>

           {/* Clouds / Smoke */}
           {[0, 1, 2, 3].map((i) => (
             <motion.div
               key={i}
               initial={{ y: 100, opacity: 0, scale: 0.5 }}
               animate={{ y: 150, opacity: [0, 1, 0], scale: 1.5, x: i % 2 === 0 ? -100 : 100 }}
               transition={{ 
                 duration: 2, 
                 repeat: Infinity, 
                 delay: i * 0.5,
                 ease: "easeOut"
               }}
               className="absolute bottom-0 w-32 h-32 bg-white/10 rounded-full blur-xl"
             />
           ))}
        </div>

      </div>
    </SlideLayout>
  );
}
