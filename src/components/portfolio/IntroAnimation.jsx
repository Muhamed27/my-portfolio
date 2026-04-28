import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  x: Math.cos((i / 16) * Math.PI * 2) * (80 + (i % 3) * 40),
  y: Math.sin((i / 16) * Math.PI * 2) * (80 + (i % 3) * 40),
  delay: i * 0.04,
}));

export default function IntroAnimation({ onDone }) {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timerOne = setTimeout(() => setExit(true), 1400);
    const timerTwo = setTimeout(() => onDone?.(), 1850);

    return () => {
      clearTimeout(timerOne);
      clearTimeout(timerTwo);
    };
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
      animate={exit ? { opacity: 0, scale: 1.04 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.div
        className="absolute w-[420px] h-[420px] rounded-full bg-primary/25 blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      />

      {PARTICLES.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary"
          style={{
            top: "50%",
            left: "50%",
            marginTop: -3,
            marginLeft: -3,
          }}
          initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
          animate={{
            x: particle.x,
            y: particle.y,
            opacity: [0, 0.8, 0.4],
            scale: [0, 1, 0.6],
          }}
          transition={{
            duration: 0.7,
            delay: particle.delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      ))}

      <div className="relative text-center flex flex-col items-center gap-3 z-10">
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.88 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-1"
        >
          <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight leading-none">
            محمد <span className="text-primary">محسن</span>
          </h1>

          <p className="text-white/35 text-xl font-bold tracking-wide" dir="rtl">
            מוחמד מוחסן
          </p>
        </motion.div>

        <motion.p
          className="text-white/50 text-base font-medium"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.28 }}
        >
          مطوّر ويب محترف
        </motion.p>

        <div className="mt-3 w-28 h-0.5 bg-primary/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.35, ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  );
}