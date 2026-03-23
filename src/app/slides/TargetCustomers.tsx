import React from 'react';
import { SlideLayout } from '@/app/components/SlideLayout';
import { GlassCard } from '@/app/components/GlassCard';
import { motion } from 'motion/react';
import { Users, Building2, Magnet } from 'lucide-react';

export function TargetCustomersSlide() {
  return (
    <SlideLayout title="Target Customers" pageNumber={6}>
      <div className="w-full flex-1 flex flex-col justify-center min-h-min py-8 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         
         <div className="space-y-8">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 }}
            >
               <GlassCard className="flex items-start gap-6 p-8 hover:bg-white/10 transition-colors cursor-default">
                  <div className="p-4 bg-blue-500/20 rounded-2xl">
                     <Users size={32} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Small Medium size Enterprises</h3>
                    <p className="text-white/60">Seeking Cloud Services</p>
                  </div>
               </GlassCard>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.4 }}
            >
               <GlassCard className="flex items-start gap-6 p-8 hover:bg-white/10 transition-colors cursor-default">
                  <div className="p-4 bg-purple-500/20 rounded-2xl">
                     <Building2 size={32} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Web Hosting Companies</h3>
                    <p className="text-white/60">Partnership opportunities</p>
                  </div>
               </GlassCard>
            </motion.div>
         </div>

         <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center"
         >
            {/* Magnet Metaphor */}
            <div className="relative w-80 h-80">
               {/* Magnet */}
               <motion.div 
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                 animate={{ rotate: [0, -10, 0, -5, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               >
                  <div className="relative">
                     <Magnet size={200} className="text-red-500 rotate-[-45deg]" strokeWidth={1} />
                     <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 blur-lg rounded-full" />
                  </div>
               </motion.div>
               
               {/* Floating Avatars being attracted */}
               {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center shadow-lg"
                    initial={{ x: 150, y: (i - 2) * 50, opacity: 0 }}
                    animate={{ 
                       x: [150, 40, 150], // Move towards magnet and back (loop)
                       y: [(i - 2) * 50, (i - 2) * 20, (i - 2) * 50],
                       opacity: [0, 1, 0]
                    }}
                    transition={{ 
                       duration: 3, 
                       delay: i * 0.5, 
                       repeat: Infinity,
                       ease: "easeInOut"
                    }}
                  >
                     <Users size={20} className="text-white/80" />
                  </motion.div>
               ))}
            </div>
         </motion.div>

      </div>
      </div>
    </SlideLayout>
  );
}
