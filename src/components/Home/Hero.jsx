import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Layers } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 overflow-hidden">
      <div className="w-full" />

      <div className="flex flex-col items-center justify-center z-10">
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[18vw] font-black leading-none tracking-tighter text-white select-none mix-blend-overlay opacity-90"
          style={{ fontFamily: 'Clash Display, sans-serif' }}
        >
          PARTH
        </motion.h1>
        
        <div className="mt-8 text-center space-y-2">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm md:text-lg tracking-[0.4em] uppercase text-neutral-500 font-medium"
          >
            I Design and Build Products that
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-serif italic text-3xl md:text-5xl text-white/90"
          >
            deliver real impact.
          </motion.p>
        </div>
      </div>

      <div className="w-full flex justify-between items-end z-20 text-xs md:text-sm font-medium tracking-widest">
        <div className="flex flex-col items-center gap-2">
          <MapPin className="w-5 h-5 text-emerald-500" />
          <div className="text-center text-neutral-400">
            <span className="text-white block">BASED IN NOIDA</span>
            INDIA
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-500" />
          <div className="text-center text-neutral-400">
            <span className="text-white block">FULL STACK DEV</span>
            & DESIGNER
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neutral-900/50 blur-[120px] rounded-full -z-10" />
    </section>
  );
};

export default Hero;
