import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden rounded-b-3xl bg-black/80">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Iridescent overlay for depth without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />

      {/* Content overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            <span className="text-xs font-medium tracking-wider text-cyan-200/90 uppercase">Digital Identity • Verified</span>
          </div>

          <h1 className="mt-6 bg-gradient-to-br from-white via-cyan-200 to-blue-300 bg-clip-text text-5xl font-extrabold leading-tight text-transparent md:text-6xl lg:text-7xl">
            Software Engineer
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 md:text-lg">
            Crafting robust systems and delightful experiences. Futuristic, fast, and built to scale.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Pill text="Clean Architecture" />
            <Pill text="Performance First" />
            <Pill text="Type-Safe" />
            <Pill text="Cloud Native" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Pill({ text }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="select-none rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur-md"
    >
      {text}
    </motion.span>
  );
}
