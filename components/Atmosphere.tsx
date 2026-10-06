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
              : "linear-gradient(to bottom, #c7e3f7 0%, #e3f1fb 22%, #f6f9fc 48%, #fbf8f4 100%)",
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
            {/* <FlappingEagle delay={0} duration={25} top={15} scale={0.8} /> */}
            {/* <FlappingEagle delay={8} duration={30} top={25} scale={0.5} /> */}
            {/* <FlappingEagle delay={15} duration={35} top={10} scale={0.6} /> */}
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
        {/* Sun Visual — burning sun: pulsing halo, swirling surface */}
        <motion.div
          className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full"
          style={{ right: 0, top: 0 }}
          initial={false}
          animate={{
            x: isNight ? "20vw" : "-10vw",
            y: isNight ? "100vh" : "12vh",
            scale: isNight ? 0.5 : 1,
            opacity: isNight ? 0 : 1,
          }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          {/* Pulsing fiery halo */}
          <motion.div
            className="absolute rounded-full"
            style={{
              inset: "-70%",
              background: "radial-gradient(circle, rgba(255,190,60,0.45) 0%, rgba(255,150,40,0.18) 35%, rgba(255,150,40,0) 65%)",
            }}
            animate={{ scale: [1, 1.12, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Disc with a slowly swirling surface */}
          <div
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              background: "radial-gradient(circle at 40% 40%, #fffbe0 0%, #ffe066 38%, #ffb52e 75%, #ff9419 100%)",
              boxShadow: "0 0 30px 6px rgba(255,235,150,0.7), 0 0 90px 24px rgba(255,170,40,0.35)",
            }}
          >
            <motion.div
              className="absolute"
              style={{
                inset: "-20%",
                background: "conic-gradient(from 0deg, rgba(255,120,20,0.35), rgba(255,255,255,0) 25%, rgba(255,140,30,0.3) 50%, rgba(255,255,255,0) 75%, rgba(255,120,20,0.35))",
                filter: "blur(10px)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

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

// Birds are disabled. To bring them back, uncomment the three <FlappingEagle /> lines above
// and ONE of the versions below.

// --- Current version: small gull strokes ---
// const FlappingEagle = ({ delay = 0, top = 20, duration = 20, scale = 1 }: any) => {
//   return (
//     <motion.div
//       className="absolute opacity-40"
//       style={{ top: `${top}vh`, left: "-10vw", transform: `scale(${scale})` }}
//       animate={{ x: ["0vw", "120vw"], y: [0, -20, 0] }}
//       transition={{ duration, repeat: Infinity, ease: "linear", delay }}
//     >
//       <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="#334155" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//         <motion.path
//           d="M2 10 Q 10 1 20 10 Q 30 1 38 10"
//           style={{ transformOrigin: "50% 50%" }}
//           animate={{ scaleY: [1, -0.5, 1] }}
//           transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </svg>
//     </motion.div>
//   );
// };

// --- Previous version: wing-only eagles ---
// const FlappingEagle = ({ delay = 0, top = 20, duration = 20, scale = 1 }: any) => {
//   return (
//     <motion.div
//       className="absolute opacity-60"
//       style={{ top: `${top}vh`, left: "-10vw", transform: `scale(${scale})` }}
//       animate={{ x: ["0vw", "120vw"], y: [0, -30, 0] }}
//       transition={{ duration, repeat: Infinity, ease: "linear", delay }}
//     >
//       <svg width="60" height="60" viewBox="0 0 100 100" fill="#1F2937">
//         <motion.g style={{ transformOrigin: "50% 50%" }} animate={{ scaleY: [1, -0.6, 1] }} transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}>
//           <path d="M 50 48 Q 70 15 85 10 Q 65 30 50 48 Z" opacity="0.7" />
//           <path d="M 50 48 Q 35 10 15 5 Q 40 25 50 48 Z" />
//         </motion.g>
//       </svg>
//     </motion.div>
//   );
// };
