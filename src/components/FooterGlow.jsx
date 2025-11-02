import React from 'react';

export default function FooterGlow() {
  return (
    <footer className="relative mt-16 w-full">
      <div className="pointer-events-none absolute inset-x-0 -top-16 mx-auto h-32 max-w-5xl rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-600/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6 py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Modassir Hussain. Built with care and creativity.
      </div>
    </footer>
  );
}
