import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Responsibilities() {
  return (
    <section className="relative mx-auto -mt-10 w-full max-w-6xl rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/60 to-black/60 p-8 backdrop-blur-xl md:p-12">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-white via-cyan-200 to-blue-300 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl"
      >
        Responsibilities
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 text-lg leading-relaxed text-white/80 md:text-xl"
      >
        Developing and Maintaining software
      </motion.p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {highlights.map((item, idx) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-cyan-400/40 hover:bg-white/[0.06]"
          >
            <div className="mt-1 rounded-full bg-cyan-500/20 p-2 text-cyan-300">
              <Check className="h-4 w-4" />
            </div>
            <p className="text-sm text-white/90 md:text-base">{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const highlights = [
  'End-to-end feature delivery with elegant UX',
  'High-availability, scalable backend systems',
  'Automated testing and CI/CD pipelines',
  'Observability, performance, and security best practices',
];
