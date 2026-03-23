import React from 'react';
import { SlideLayout } from '@/app/components/SlideLayout';
import { GlassCard } from '@/app/components/GlassCard';
import { motion } from 'motion/react';
import { 
  Banknote, 
  Megaphone, 
  Crown, 
  TrendingUp, 
  ArrowRight,
  PieChart
} from 'lucide-react';

export function BusinessModelSlide() {
  const models = [
    {
      title: "Taking Commission Per Purchase.",
      icon: <Banknote size={32} className="text-yellow-400" />,
      highlight: true
    },
    {
      title: "Promote providers offers (Ads).",
      icon: <Megaphone size={32} className="text-blue-400" />,
      highlight: false
    },
    {
      title: "Subscription fee for advanced users.",
      icon: <Crown size={32} className="text-purple-400" />,
      highlight: false
    }
  ];

  return (
    <SlideLayout title="Business Model (B2B)" pageNumber={9}>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-min lg:min-h-full py-8 lg:py-0">
        
        {/* Left: Visualization */}
        <div className="relative flex items-center justify-center min-h-[400px] w-full">
           {/* Abstract Business Ecosystem */}
           <div className="relative w-full max-w-md aspect-square">
              {/* Central Hub */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <div className="w-32 h-32 bg-[#0B0E14] border-2 border-yellow-400/50 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(234,179,8,0.2)]">
                   <TrendingUp size={48} className="text-yellow-400" />
                </div>
              </motion.div>

              {/* Orbiting Elements */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-[280px] h-[280px] border border-dashed border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear", delay: i * -5 }}
                >
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#12151B] border border-white/20 rounded-full flex items-center justify-center">
                      {i === 0 && <PieChart size={20} className="text-blue-400" />}
                      {i === 1 && <Banknote size={20} className="text-green-400" />}
                      {i === 2 && <Crown size={20} className="text-purple-400" />}
                   </div>
                </motion.div>
              ))}

              {/* Floating Cards simulating "Transactions" */}
              <motion.div
                 animate={{ y: [0, -20, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-0 right-0 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10"
              >
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">$</div>
                    <div className="h-2 w-16 bg-white/20 rounded-full" />
                 </div>
              </motion.div>

              <motion.div
                 animate={{ y: [0, 20, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-10 left-0 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10"
              >
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">%</div>
                    <div className="h-2 w-16 bg-white/20 rounded-full" />
                 </div>
              </motion.div>
           </div>
        </div>

        {/* Right: List */}
        <div className="space-y-8">
           {models.map((model, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.3 + index * 0.2 }}
             >
               <GlassCard className={`flex items-center gap-6 p-6 group transition-all duration-300 ${model.highlight ? 'border-yellow-400/30 bg-yellow-400/5' : ''}`}>
                 <div className={`p-4 rounded-xl shrink-0 transition-colors ${model.highlight ? 'bg-yellow-400/20' : 'bg-white/5 group-hover:bg-white/10'}`}>
                   {model.icon}
                 </div>
                 <div className="flex items-center gap-4 w-full">
                    <h3 className={`text-2xl font-medium ${model.highlight ? 'text-yellow-400' : 'text-white'}`}>
                      {model.title}
                    </h3>
                    {model.highlight && (
                      <ArrowRight className="ml-auto text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                 </div>
               </GlassCard>
             </motion.div>
           ))}
        </div>

      </div>
    </SlideLayout>
  );
}
