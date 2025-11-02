import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowUpRight } from 'lucide-react';

export default function SocialLinks() {
  return (
    <section className="mx-auto mt-12 w-full max-w-6xl px-4">
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-2xl font-bold text-white/90 md:text-3xl"
      >
        Connect with me
      </motion.h3>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <SocialCard
          href="https://www.linkedin.com/in/md-modassir-hussain-a54b542b7"
          icon={<Linkedin className="h-6 w-6" />}
          label="LinkedIn"
          handle="/md-modassir-hussain"
          gradient="from-cyan-400/20 via-blue-500/10 to-purple-500/10"
        />

        <SocialCard
          href="https://github.com/modassirhusn"
          icon={<Github className="h-6 w-6" />}
          label="GitHub"
          handle="/modassirhusn"
          gradient="from-emerald-400/20 via-cyan-500/10 to-blue-500/10"
        />
      </div>
    </section>
  );
}

function SocialCard({ href, icon, label, handle, gradient }) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-white hover:border-cyan-400/40`}
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

      <div className="relative z-10 flex items-center gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-white/90">
          {icon}
        </div>
        <div>
          <p className="text-sm text-white/60">{label}</p>
          <p className="text-lg font-semibold">{handle}</p>
        </div>
      </div>

      <div className="relative z-10">
        <ArrowUpRight className="h-6 w-6 text-white/60 transition-colors group-hover:text-white" />
      </div>
    </motion.a>
  );
}
