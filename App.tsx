
import React, { useState } from 'react';
import { CreatorProfile, LinkType } from './types';
import PremiumLink from './components/PremiumLink';

const INITIAL_PROFILE: CreatorProfile = {
  name: "Victoria Lux",
  handle: "@victorialux",
  bio: "Se apresse antes que eu me desconecte.",
  avatarUrl: "https://picsum.photos/400/400?random=1",
  verified: true,
  links: [
    { id: '1', title: 'Libere Meu Tesouro Privado', url: '#', type: LinkType.PREMIUM, isPriority: true },
    { id: '3', title: 'Official Instagram', url: '#', type: LinkType.SOCIAL },
  ]
};

const App: React.FC = () => {
  const [profile] = useState<CreatorProfile>(INITIAL_PROFILE);

  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-white selection:bg-pink-500/30">
      {/* Fixed Background Decor */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-pink-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-purple-900/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-md mx-auto px-4 sm:px-0 flex flex-col items-center">
        {/* PROFILE AREA - Moves with the page */}
        <header className="w-full pt-12 pb-8 flex flex-col items-center text-center">
          <div className="relative">
            <div className="w-28 h-28 rounded-full premium-border p-1">
              <img 
                src={profile.avatarUrl} 
                alt={profile.name} 
                className="w-full h-full rounded-full object-cover border-2 border-[#0a0a0a]"
              />
            </div>
            {profile.verified && (
              <div className="absolute bottom-1 right-1 bg-blue-500 rounded-full p-1.5 border-4 border-[#0a0a0a]">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
            )}
          </div>

          <h1 className="mt-4 text-2xl font-bold tracking-tight text-white">
            {profile.name}
          </h1>
          <p className="text-gray-400 font-medium tracking-wide">{profile.handle}</p>
          
          <div className="mt-4 px-6 max-w-sm">
            <p className="text-gray-300 text-sm leading-relaxed italic opacity-90">
              "{profile.bio}"
            </p>
          </div>
        </header>

        {/* CONTENT AREA - Natural scroll flow */}
        <main className="w-full pb-20 flex flex-col gap-4">
          {/* Action Links */}
          <div className="flex flex-col gap-3.5 px-2">
            {profile.links.map(link => (
              <PremiumLink key={link.id} link={link} />
            ))}
          </div>

          {/* Single 9:16 Vertical Preview Section */}
          <section className="mt-10 px-4">
            <div className="aspect-[9/16] w-full max-w-[320px] mx-auto rounded-3xl overflow-hidden glass relative group cursor-pointer border border-white/10 shadow-2xl shadow-pink-500/5">
              <img 
                src="https://picsum.photos/720/1280?random=42" 
                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-all duration-1000"
                alt="Vertical Preview" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white/80 text-xs font-medium tracking-wider">Expand preview</p>
              </div>
            </div>
          </section>

          <footer className="mt-12 pb-12 text-center px-8 border-t border-white/5 pt-10">
            <p className="text-gray-600 text-[10px] mb-3 uppercase tracking-[0.3em] font-black">Secure Content Protection</p>
            <p className="text-gray-700 text-[9px] leading-loose max-w-[280px] mx-auto opacity-60">
              &copy; {new Date().getFullYear()} {profile.name}. Official Creator Page. All content is copyrighted. 18+ membership strictly enforced.
              DMCA Protected.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default App;
