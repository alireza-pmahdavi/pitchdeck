import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

// Slides
import { CoverSlide } from './slides/Cover';
import { StorySlide } from './slides/Story';
import { ProblemSlide } from './slides/Problem';
import { SolutionSlide } from './slides/Solution';
import { ValuePropsSlide } from './slides/ValueProps';
import { WhyNowSlide } from './slides/WhyNow';
import { TargetCustomersSlide } from './slides/TargetCustomers';
import { MarketSizeSlide } from './slides/MarketSize';
import { CompetitionSlide } from './slides/Competition';
import { BusinessModelSlide } from './slides/BusinessModel';
import { GoToMarketSlide } from './slides/GoToMarket';
import { TractionsSlide } from './slides/Tractions';
import { InvestmentSlide } from './slides/Investment';
import { TeamSlide } from './slides/Team';
import { EndSlide } from './slides/End';

const SLIDES = [
  CoverSlide,
  StorySlide,
  ProblemSlide,
  SolutionSlide,
  ValuePropsSlide,
  WhyNowSlide,
  TargetCustomersSlide,
  MarketSizeSlide,
  CompetitionSlide,
  BusinessModelSlide,
  GoToMarketSlide,
  TractionsSlide,
  InvestmentSlide,
  TeamSlide,
  EndSlide
];

export function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, SLIDES.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = SLIDES[currentSlide];

  return (
    <div className="w-full h-screen bg-[#0B0E14] overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Overlay */}
      <div className="fixed bottom-6 right-6 md:absolute md:bottom-10 md:right-10 z-50 flex items-center gap-3 md:gap-4 pointer-events-none">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="pointer-events-auto group p-3 md:p-4 rounded-full bg-[#0E1119]/80 border border-white/10 hover:bg-white/10 hover:border-white/20 disabled:opacity-0 disabled:translate-y-4 disabled:pointer-events-none backdrop-blur-xl transition-all duration-500 ease-out active:scale-95"
          aria-label="Previous slide"
        >
          <ChevronLeft className="text-white/70 group-hover:text-white transition-colors" size={24} />
        </button>
        <button 
          onClick={nextSlide}
          disabled={currentSlide === SLIDES.length - 1}
          className="pointer-events-auto group p-3 md:p-4 rounded-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] active:scale-95 border border-white/10"
          aria-label="Next slide"
        >
          <ChevronRight className="text-white transform group-hover:translate-x-0.5 transition-transform" size={24} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full z-50">
        <motion.div 
          className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
          initial={{ width: "0%" }}
          animate={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}
