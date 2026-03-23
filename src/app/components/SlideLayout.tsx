import React from 'react';
import { motion } from 'motion/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SlideLayoutProps {
  children: React.ReactNode;
  title?: string;
  pageNumber: number;
  totalPages?: number;
  className?: string;
}

export function SlideLayout({ 
  children, 
  title, 
  pageNumber, 
  totalPages = 14,
  className 
}: SlideLayoutProps) {
  const mainRef = React.useRef<HTMLElement>(null);

  // Ensure scroll resets to top when component mounts (slide change)
  React.useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
    // Also scroll window to top for mobile browsers
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full h-[100dvh] bg-[#0B0E14] text-white overflow-hidden flex flex-col">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Header / Nav */}
      <header className="relative z-20 flex items-center justify-between px-6 py-4 md:px-12 md:py-8 shrink-0">
        <div className="text-lg md:text-xl font-bold tracking-tight text-white/90">
          {title && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 md:gap-3"
            >
              <span className="text-blue-400">/</span>
              {title}
            </motion.div>
          )}
        </div>
        <div className="font-mono text-xs md:text-sm text-white/40">
          <span className="text-white">{pageNumber}</span>
          <span>/{totalPages}</span>
        </div>
      </header>

      {/* Main Content */}
      <main 
        ref={mainRef}
        className={twMerge("relative z-10 flex-1 flex flex-col px-4 md:px-12 pb-32 md:pb-12 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent", className)}
      >
        {children}
      </main>

      {/* Grid Pattern Overlay (Optional, for texture) */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none opacity-20" />
    </div>
  );
}
