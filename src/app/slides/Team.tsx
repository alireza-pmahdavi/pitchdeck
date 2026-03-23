import image_5af95c74e8fa3fefeab27eade9dbd85574a5477d from '@/assets/5af95c74e8fa3fefeab27eade9dbd85574a5477d.png';
import React from 'react';
import { SlideLayout } from '@/app/components/SlideLayout';
import { motion } from 'motion/react';
import { GlassCard } from '@/app/components/GlassCard';

// Figma Assets
import imgRahaVPN from "@/assets/ebd097fb31cc16851246837be9abb2257e1d23d2.png";
import imgPayaCloud from "@/assets/d7dd70b7d6b4ebead35ed4d0a70b4020f938b875.png";
import imgAutoVM from "@/assets/e88e8aaf9a6abd164b3eaa998cd9434069eafccc.png";
import imgCaasify from "@/assets/9231ea414c206a029c384af394fc23ee796aacbb.png";
import imgProfile from "@/assets/7425545c1509ff6352525f4de13ef34c334b9403.png";

export function TeamSlide() {
  const logos = [
    { name: "Caasify", src: imgCaasify },
    { name: "AutoVM", src: imgAutoVM },
    { name: "PayaCloud", src: imgPayaCloud },
    { name: "RahaVPN", src: imgRahaVPN },
  ];

  return (
    <SlideLayout title="Team" pageNumber={13} totalPages={14}>
      <div className="flex-1 flex flex-col items-center justify-center min-h-full py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center max-w-2xl w-full"
        >
          {/* Profile Image */}
          <motion.div 
            className="relative mb-6 md:mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          >
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#ffc337]/50 shadow-[0_0_40px_rgba(255,195,55,0.3)]">
              <img 
                src={image_5af95c74e8fa3fefeab27eade9dbd85574a5477d} 
                alt="Alireza Pourmahdavi" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name & Title */}
          <h2 className="text-2xl md:text-3xl font-light text-white mb-2">Alireza Pourmahdavi</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#ffc337] mb-6 drop-shadow-lg">Founder (Solo Founder)</h3>

          {/* Description */}
          <div className="space-y-2 mb-8 md:mb-12 text-base md:text-lg text-white/80 px-4">
            <p className="font-medium">4th time founder</p>
            <p className="font-light max-w-md mx-auto leading-relaxed">
              10+ years of experience in cloud industry business development.
            </p>
          </div>

          {/* Logos */}
          <div className="flex items-center gap-6 md:gap-12 flex-wrap justify-center">
            {logos.map((logo, index) => (
              <motion.div 
                key={logo.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex flex-col items-center gap-2 md:gap-3 group"
              >
                <div className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center transition-transform group-hover:scale-110">
                  <img src={logo.src} alt={logo.name} className="max-h-full max-w-full object-contain" />
                </div>
                <span className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider group-hover:text-white transition-colors">{logo.name}</span>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </SlideLayout>
  );
}
