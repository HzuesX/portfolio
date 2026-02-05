import React from 'react';
import ProfileCard from './ProfileCard';
import { ArrowUpRight } from 'lucide-react';

const InfoCard = ({ title, sub, icon, color = "bg-neutral-800" }) => (
  <div className="glass-panel rounded-[24px] p-6 flex flex-col justify-between hover:bg-white/10 transition-colors group cursor-pointer relative overflow-hidden min-h-[180px]">
     <div className={`absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity`}>
        <ArrowUpRight className="text-white" />
     </div>
     <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mb-4`}>
        {icon}
     </div>
     <div>
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-sm text-neutral-400">{sub}</p>
     </div>
  </div>
);

const BentoGrid = () => {
  return (
    <section className="px-4 md:px-12 pb-20 max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
        
        <div className="lg:col-span-1 lg:row-span-2 min-h-[400px]">
          <ProfileCard />
        </div>

        <div className="lg:col-span-2 lg:row-span-2 glass-panel rounded-[24px] p-8 relative overflow-hidden group min-h-[400px]">
           <div className="absolute inset-0 bg-neutral-900/40" />
           <div className="relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                 <div>
                    <h3 className="text-xs font-medium tracking-widest text-emerald-400 mb-2">FEATURED PROJECT</h3>
                    <h2 className="text-3xl font-bold text-white font-display">Rune AI</h2>
                 </div>
                 <button className="px-4 py-2 rounded-full border border-white/20 text-sm hover:bg-white hover:text-black transition-all">
                    View Case Study
                 </button>
              </div>
              
              <div className="flex-1 bg-neutral-800 rounded-xl overflow-hidden border border-white/10 group-hover:translate-y-[-10px] transition-transform duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-900/20 to-purple-900/20 flex items-center justify-center">
                     <span className="text-white/20 font-display text-4xl">Preview</span>
                  </div>
              </div>
              
              <div className="flex gap-2 mt-4 flex-wrap">
                 {['React', 'Next.js', 'Tailwind', 'AI'].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-neutral-300 border border-white/5">
                       {tag}
                    </span>
                 ))}
              </div>
           </div>
        </div>

        <div className="lg:col-span-1 lg:row-span-2 flex flex-col gap-4">
            <InfoCard 
               title="Experience" 
               sub="3+ Years building products" 
               icon={<span className="text-xl">🚀</span>}
            />
             <InfoCard 
               title="Projects" 
               sub="20+ Successful deployments" 
               icon={<span className="text-xl">📦</span>} 
            />
             <div className="glass-panel rounded-[24px] p-6 flex-1 flex items-center justify-center text-center min-h-[180px]">
                <div>
                   <h3 className="text-4xl font-bold text-white font-display mb-2">100+</h3>
                   <p className="text-sm text-neutral-400">Happy Clients</p>
                </div>
             </div>
        </div>

        <div className="lg:col-span-4 glass-panel rounded-[24px] p-8 flex items-center justify-between overflow-hidden">
             <p className="text-neutral-500 text-sm font-medium mr-8 shrink-0">POWERED BY</p>
             <div className="flex gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 w-full justify-start overflow-hidden">
                 {['Next.js', 'React', 'TypeScript', 'Tailwind', 'Framer', 'Node.js', 'Vercel'].map(tech => (
                     <span key={tech} className="text-lg font-bold text-white shrink-0">{tech}</span>
                 ))}
             </div>
        </div>

      </div>
    </section>
  );
};

export default BentoGrid;
