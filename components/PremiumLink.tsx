
import React from 'react';
import { LinkItem } from '../types';

interface PremiumLinkProps {
  link: LinkItem;
}

const PremiumLink: React.FC<PremiumLinkProps> = ({ link }) => {
  const isPremium = link.type === 'premium';
  
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        relative w-full py-4 px-6 rounded-2xl transition-all duration-300 transform active:scale-95
        flex items-center justify-center gap-3 font-semibold group overflow-hidden
        ${isPremium 
          ? 'premium-gradient text-white shadow-lg shadow-pink-500/20' 
          : 'glass text-gray-200 hover:bg-white/10 border-white/10 hover:border-white/30'}
      `}
    >
      {isPremium && (
        <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12" />
      )}
      
      <span className="relative z-10 flex items-center gap-2">
        {link.title}
        {isPremium && (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        )}
      </span>
    </a>
  );
};

export default PremiumLink;
