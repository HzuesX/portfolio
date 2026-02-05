import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const ProfileCard = () => {
  return (
    <div className="relative w-full h-full rounded-[24px] overflow-hidden group border border-white/10 bg-neutral-900/50 flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white font-display">
            Parth <span className="text-neutral-500 font-serif italic font-normal">Sharma</span>
          </h2>
          <div className="flex items-center gap-2 mt-2 text-neutral-500 text-xs tracking-wider font-medium">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
             </span>
             AVAILABLE FOR WORK
          </div>
        </div>

        <div className="flex-1 my-6 rounded-2xl bg-neutral-800/50 border border-white/5 overflow-hidden relative min-h-[200px]">
           <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-neutral-600">
             [Avatar Image]
           </div>
        </div>

        <div className="flex gap-4 pt-4 border-t border-white/10">
          {[
            { Icon: Linkedin, href: "#" },
            { Icon: Github, href: "#" },
            { Icon: Twitter, href: "#" }
          ].map(({ Icon, href }, i) => (
            <a 
              key={i} 
              href={href} 
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
