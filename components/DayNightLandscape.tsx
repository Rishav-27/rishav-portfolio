"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DayNightLandscape() {
  const [isNight, setIsNight] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsNight(document.documentElement.dataset.theme === "dark");
  }, []);

  const toggleTheme = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const nextNight = !isNight;
    setIsNight(nextNight);
    
    // Sync with actual site theme
    const newTheme = nextNight ? "dark" : "light";
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem("rk-portfolio-theme", newTheme);

    setTimeout(() => setIsTransitioning(false), 5000);
  };

  return (
    <motion.div 
      className="relative w-full h-[400px] sm:h-[500px] overflow-hidden rounded-[40px] border my-16 shadow-2xl"
      animate={{
        background: isNight 
          ? "linear-gradient(to bottom, #070B14 0%, #1A1A2E 50%, #2A1B38 100%)" 
          : "linear-gradient(to bottom, #4CA1AF 0%, #C4E0E5 50%, #E0ECE4 100%)",
        borderColor: isNight ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
      }}
      transition={{ duration: 4, ease: "easeInOut" }}
    >
      {/* Stars */}
      <AnimatePresence>
        {isNight && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, delay: 1 }}
            className="absolute inset-0 pointer-events-none"
          >
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  width: Math.random() * 3 + 1 + "px",
                  height: Math.random() * 3 + 1 + "px",
                  top: Math.random() * 60 + "%",
                  left: Math.random() * 100 + "%",
                }}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sun */}
      <motion.div
        onClick={isNight ? undefined : toggleTheme}
        className="absolute w-24 h-24 rounded-full shadow-[0_0_60px_rgba(253,224,71,0.8)] flex items-center justify-center cursor-pointer"
        style={{ background: "linear-gradient(to bottom right, #FEF08A, #F59E0B)" }}
        initial={false}
        animate={{
          x: isNight ? "120vw" : "20vw",
          y: isNight ? "100px" : "80px",
          scale: isNight ? 0.8 : 1,
          opacity: isNight ? 0 : 1,
        }}
        whileHover={!isNight ? { scale: 1.05, boxShadow: "0 0 80px rgba(253,224,71,1)" } : {}}
        transition={{ duration: 4, ease: "easeInOut" }}
      />

      {/* Moon */}
      <motion.div
        onClick={isNight ? toggleTheme : undefined}
        className="absolute w-20 h-20 rounded-full shadow-[0_0_50px_rgba(226,232,240,0.5)] cursor-pointer"
        style={{ background: "linear-gradient(to bottom right, #F1F5F9, #94A3B8)" }}
        initial={false}
        animate={{
          x: isNight ? "70vw" : "-20vw",
          y: isNight ? "60px" : "150px",
          scale: isNight ? 1 : 0.8,
          opacity: isNight ? 1 : 0,
        }}
        whileHover={isNight ? { scale: 1.05, boxShadow: "0 0 70px rgba(226,232,240,0.8)" } : {}}
        transition={{ duration: 4, ease: "easeInOut" }}
      >
        {/* Moon craters */}
        <div className="absolute w-4 h-4 rounded-full bg-slate-300/40 top-4 left-4" />
        <div className="absolute w-6 h-6 rounded-full bg-slate-300/40 bottom-4 right-6" />
        <div className="absolute w-3 h-3 rounded-full bg-slate-300/30 top-10 right-4" />
      </motion.div>

      {/* Clouds / Birds (Day only) */}
      <AnimatePresence>
        {!isNight && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className="absolute inset-0 pointer-events-none"
          >
            {/* Birds */}
            <motion.svg width="100%" height="100%" className="absolute top-10 opacity-60">
              <motion.path d="M 0 20 Q 10 10 20 20 Q 30 10 40 20" stroke="#1F2937" strokeWidth="2" fill="transparent"
                animate={{ x: ["-10vw", "110vw"], y: [0, -20, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.path d="M 0 20 Q 10 10 20 20 Q 30 10 40 20" stroke="#1F2937" strokeWidth="2" fill="transparent"
                animate={{ x: ["-20vw", "120vw"], y: [20, 0, 20] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
              />
            </motion.svg>
            
            {/* Cloud 1 */}
            <motion.div 
              className="absolute w-48 h-16 bg-white/80 rounded-full blur-xl top-20"
              animate={{ x: ["-20vw", "120vw"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            {/* Cloud 2 */}
            <motion.div 
              className="absolute w-64 h-20 bg-white/60 rounded-full blur-2xl top-32"
              animate={{ x: ["-40vw", "120vw"] }}
              transition={{ duration: 55, repeat: Infinity, ease: "linear", delay: 5 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mountains Back */}
      <motion.div 
        className="absolute bottom-0 w-[150%] h-[60%] left-[-25%] rounded-[100%]"
        animate={{
          background: isNight ? "#1E1E3F" : "#6DA5C0",
          y: isNight ? 20 : 0
        }}
        transition={{ duration: 4, ease: "easeInOut" }}
      />

      {/* Mountains Middle */}
      <motion.div 
        className="absolute bottom-[-10%] w-[120%] h-[50%] left-[-10%] rounded-[100%]"
        animate={{
          background: isNight ? "#16162D" : "#4A8E9F",
          y: isNight ? 10 : 0
        }}
        transition={{ duration: 4, ease: "easeInOut" }}
      />

      {/* Foreground Grass / Hills */}
      <motion.div 
        className="absolute bottom-[-20%] w-[110%] h-[40%] left-[-5%] rounded-[100%]"
        animate={{
          background: isNight ? "#0D0D1A" : "#2E7C62",
        }}
        transition={{ duration: 4, ease: "easeInOut" }}
      />
      
      {/* Click instructions overlay */}
      <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none opacity-50">
        <span className="text-sm font-medium tracking-widest uppercase" style={{ color: isNight ? "#ffffff" : "#000000" }}>
          Click the {isNight ? "Moon" : "Sun"}
        </span>
      </div>
    </motion.div>
  );
}
