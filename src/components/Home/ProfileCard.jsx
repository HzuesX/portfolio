import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import CircularGallery from '../UI/CircularGallery';

const ProfileCard = () => {
  return (
    <div className="relative w-full h-full rounded-[24px] overflow-hidden group border border-white/10 bg-neutral-900/50 flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white font-display">
            Prince <span className="text-neutral-500 font-serif italic font-normal">Kanoujiya</span>
          </h2>
          <div className="flex items-center gap-2 mt-2 text-neutral-500 text-xs tracking-wider font-medium">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
             </span>
             AVAILABLE FOR WORK
          </div>
        </div>

        <div className="flex-1 my-6 rounded-2xl bg-neutral-800/50 border border-white/5 overflow-hidden relative min-h-[300px]">
           <div className="absolute inset-0">
             <CircularGallery 
               bend={3} 
               textColor="#ffffff" 
               borderRadius={0.05} 
               font="bold 30px Figtree"
               scrollSpeed={1.5}
               scrollEase={0.04}
             />
           </div>
        </div>

        <div className="flex gap-4 pt-4 border-t border-white/10">
          {[
            { Icon: Linkedin, href: "https://www.linkedin.com/in/iprincekumark/" },
            { Icon: Github, href: "https://github.com/iprincekumark" },
            { Icon: Twitter, href: "https://x.com/iprincekumark" }
          ].map(({ Icon, href }, i) => (
            <a 
              key={i} 
              href={href} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
