import React from 'react';
import Hero3D from './components/Hero3D';
import Responsibilities from './components/Responsibilities';
import SocialLinks from './components/SocialLinks';
import FooterGlow from './components/FooterGlow';

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#05070e] via-[#03060b] to-black text-white">
      <Hero3D />
      <main className="px-4 pb-8">
        <Responsibilities />
        <SocialLinks />
      </main>
      <FooterGlow />
    </div>
  );
}

export default App;
