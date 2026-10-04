"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Atmosphere() {
  const [isNight, setIsNight] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsNight(document.documentElement.dataset.theme === "dark");
    setIsMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextNight = !isNight;
    setIsNight(nextNight);
    
    const newTheme = nextNight ? "dark" : "light";
    
    // We use the View Transitions API if available, else standard fallback
    if (!document.startViewTransition) {
      document.documentElement.dataset.theme = newTheme;
      localStorage.setItem("rk-portfolio-theme", newTheme);
      return;
    }
    document.startViewTransition(() => {
      document.documentElement.dataset.theme = newTheme;
      localStorage.setItem("rk-portfolio-theme", newTheme);
    });
  };

  if (!isMounted) return <div className="fixed inset-0 bg-[var(--bg)] -z-50" />;

  return (
    <>
      <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
        {/* Dynamic Sky Background */}
        <motion.div 
          className="absolute inset-0"
          initial={false}
          animate={{
            background: isNight 
              ? "linear-gradient(to bottom, #050810 0%, #0a0f1c 50%, #151b2b 100%)" 
              : "linear-gradient(to bottom, #7dd3fc 0%, #bae6fd 50%, #f8fafc 100%)",
          }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />

        {/* Stars */}
        <AnimatePresence>
          {isNight && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3 }}
              className="absolute inset-0"
            >
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-white rounded-full"
                  style={{
                    width: Math.random() * 3 + 1 + "px",
                    height: Math.random() * 3 + 1 + "px",
                    top: Math.random() * 100 + "%",
                    left: Math.random() * 100 + "%",
                  }}
                  animate={{ opacity: [0.1, 0.8, 0.1] }}
                  transition={{ duration: Math.random() * 4 + 2, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Clouds / Birds (Day only) */}
        <AnimatePresence>
          {!isNight && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3 }}
              className="absolute inset-0"
            >
            <FlappingEagle delay={0} duration={25} top={15} scale={0.8} />
            <FlappingEagle delay={8} duration={30} top={25} scale={0.5} />
            <FlappingEagle delay={15} duration={35} top={10} scale={0.6} />
              {/* Cloud 1 */}
              <motion.div 
                className="absolute w-96 h-32 bg-white/40 rounded-full blur-3xl top-[20vh]"
                animate={{ x: ["-20vw", "120vw"] }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
              {/* Cloud 2 */}
              <motion.div 
                className="absolute w-[500px] h-40 bg-white/30 rounded-full blur-3xl top-[30vh]"
                animate={{ x: ["-40vw", "120vw"] }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear", delay: 10 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Visual Foreground Controls (Sun & Moon Visuals behind text) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Sun Visual */}
        <motion.div
          className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center"
          style={{ 
            right: 0, top: 0,
            background: "radial-gradient(circle at 40% 40%, #ffffff 0%, #fef08a 40%, #f59e0b 100%)",
            boxShadow: "0 0 40px 10px rgba(255,255,255,0.8), 0 0 100px 40px rgba(253,224,71,0.6), 0 0 200px 80px rgba(253,224,71,0.3)"
          }}
          initial={false}
          animate={{
            x: isNight ? "20vw" : "-10vw",
            y: isNight ? "100vh" : "12vh",
            scale: isNight ? 0.5 : 1,
            opacity: isNight ? 0 : 1,
          }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />

        {/* Moon Visual */}
        <motion.div
          className="absolute w-16 h-16 sm:w-24 sm:h-24 rounded-full"
          style={{ 
            right: 0, top: 0,
            background: "linear-gradient(to bottom right, #F8FAFC, #CBD5E1)",
            boxShadow: "0 0 100px 30px rgba(226,232,240,0.3)"
          }}
          initial={false}
          animate={{
            x: isNight ? "-10vw" : "20vw",
            y: isNight ? "12vh" : "100vh",
            scale: isNight ? 1 : 0.5,
            opacity: isNight ? 1 : 0,
          }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <div className="absolute w-5 h-5 rounded-full bg-slate-300/40 top-4 left-4" />
          <div className="absolute w-8 h-8 rounded-full bg-slate-300/40 bottom-4 right-6" />
          <div className="absolute w-3 h-3 rounded-full bg-slate-300/30 top-12 right-4" />
        </motion.div>
      </div>

      {/* Invisible Interactive Hitboxes on top of everything */}
      <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none">
        {/* Sun Hitbox */}
        <motion.div
          onClick={isNight ? undefined : toggleTheme}
          className={`absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full ${isNight ? '' : 'cursor-pointer pointer-events-auto'}`}
          style={{ right: 0, top: 0 }}
          initial={false}
          animate={{
            x: isNight ? "20vw" : "-10vw",
            y: isNight ? "100vh" : "12vh",
            scale: isNight ? 0.5 : 1,
          }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />

        {/* Moon Hitbox */}
        <motion.div
          onClick={isNight ? toggleTheme : undefined}
          className={`absolute w-16 h-16 sm:w-24 sm:h-24 rounded-full ${isNight ? 'cursor-pointer pointer-events-auto' : ''}`}
          style={{ right: 0, top: 0 }}
          initial={false}
          animate={{
            x: isNight ? "-10vw" : "20vw",
            y: isNight ? "12vh" : "100vh",
            scale: isNight ? 1 : 0.5,
          }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </div>
    </>
  );
}

const FlappingEagle = ({ delay = 0, top = 20, duration = 20, scale = 1 }: any) => {
  return (
    <motion.div
      className="absolute opacity-60"
      style={{ top: `${top}vh`, left: "-10vw", transform: `scale(${scale})` }}
      animate={{ x: ["0vw", "120vw"], y: [0, -30, 0] }}
      transition={{ duration, repeat: Infinity, ease: "linear", delay }}
    >
      <svg width="60" height="60" viewBox="0 0 100 100" fill="#1F2937">
        {/* Flapping Wings Only (No body) */}
        <motion.g 
          style={{ transformOrigin: "50% 50%" }}
          animate={{ scaleY: [1, -0.6, 1] }}
          transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Back Wing */}
          <path d="M 50 48 Q 70 15 85 10 Q 65 30 50 48 Z" opacity="0.7" />
          {/* Front Wing */}
          <path d="M 50 48 Q 35 10 15 5 Q 40 25 50 48 Z" />
        </motion.g>
      </svg>
    </motion.div>
  );
};
