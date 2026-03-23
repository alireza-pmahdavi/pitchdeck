import React from 'react';
import { SlideLayout } from '@/app/components/SlideLayout';
import { GlassCard } from '@/app/components/GlassCard';
import { motion } from 'motion/react';
import { DollarSign, Layers, Globe } from 'lucide-react';

export function ValuePropsSlide() {
  const props = [
    {
      title: "Ten times cheaper",
      icon: <DollarSign size={48} className="text-yellow-400" />,
      gradient: "from-yellow-400/20 to-yellow-600/5"
    },
    {
      title: "More Options to buy",
      icon: <Layers size={48} className="text-blue-400" />,
      gradient: "from-blue-400/20 to-blue-600/5"
    },
    {
      title: "Wide Geographic Coverage",
      subtitle: "(GDPR compliance)",
      icon: <Globe size={48} className="text-emerald-400" />,
      gradient: "from-emerald-400/20 to-emerald-600/5"
    }
  ];

  return (
    <SlideLayout title="Value Proposition" pageNumber={4}>
      <div className="w-full min-h-full flex flex-col items-center justify-start md:justify-center pt-12 pb-32 md:py-0">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 max-w-4xl leading-tight"
        >
          Access the widest range of Cloud services in a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">centralised platform.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full">
          {props.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="h-full"
            >
              <GlassCard 
                hoverEffect={true} 
                className={`h-full flex flex-col items-center text-center justify-center min-h-[200px] md:min-h-[300px] bg-gradient-to-b ${prop.gradient} border-white/5 p-6 md:p-8 group`}
              >
                 <div className="p-4 bg-white/5 rounded-2xl inline-block mb-6 backdrop-blur-md shadow-lg group-hover:scale-110 transition-transform duration-300">
                   {React.cloneElement(prop.icon, { size: undefined, className: `w-10 h-10 md:w-14 md:h-14 ${prop.icon.props.className}` })}
                 </div>
                 <h3 className="text-xl md:text-2xl font-bold mb-2">{prop.title}</h3>
                 {prop.subtitle && (
                   <p className="text-white/60 text-lg">{prop.subtitle}</p>
                 )}

                 <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Mobile Spacer */}
        <div className="h-32 md:hidden shrink-0" />
      </div>
    </SlideLayout>
  );
}
