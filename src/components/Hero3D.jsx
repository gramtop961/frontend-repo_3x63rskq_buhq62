import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden rounded-b-3xl bg-black">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Readability overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(1200px_circle_at_50%_-10%,rgba(59,130,246,0.28),transparent_60%)]" />

      {/* Content overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto max-w-5xl"
        >
          {/* Subtle status pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            <span className="text-[11px] font-medium tracking-wider text-cyan-200/90 uppercase">System Online • Secure Channel</span>
          </div>

          <h1 className="mt-6 bg-gradient-to-br from-white via-cyan-200 to-blue-300 bg-clip-text text-5xl font-extrabold leading-tight text-transparent md:text-6xl lg:text-7xl">
            Software Engineer
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-white/85 md:text-lg">
            Building immersive, performant products with modern web tech. Futuristic, readable, and accessible by design.
          </p>

          {/* Feature pills for visual richness while staying readable */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Pill text="Futuristic UI" />
            <Pill text="Accessible & Readable" />
            <Pill text="High Performance" />
            <Pill text="Animation-Ready" />
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
      className="select-none rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-xs text-white/90 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] backdrop-blur-md"
    >
      {text}
    </motion.span>
  );
}
