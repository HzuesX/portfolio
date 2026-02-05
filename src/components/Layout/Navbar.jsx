import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, Briefcase, FileText, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

const NavItem = ({ to, icon: Icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `relative px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 group ${
        isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
      }`
    }
  >
    {({ isActive }) => (
      <>
        {isActive && (
          <motion.div
            layoutId="nav-pill"
            className="absolute inset-0 bg-neutral-800 rounded-full -z-10"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-2 text-sm font-medium">
          {label}
        </span>
      </>
    )}
  </NavLink>
);

const Navbar = () => {
  return (
    <div className="fixed top-6 left-0 w-full flex justify-center z-50 px-4 pointer-events-none">
      <div className="pointer-events-auto h-14 px-2 bg-[#0a0a0a]/60 backdrop-blur-md border border-white/10 rounded-full flex items-center shadow-lg shadow-black/20">
        <NavItem to="/" icon={Home} label="Home" />
        <NavItem to="/about" icon={User} label="About" />
        <NavItem to="/projects" icon={Briefcase} label="Work" />
        <NavItem to="/blogs" icon={FileText} label="Blogs" />
        
        <div className="w-px h-4 bg-white/10 mx-2" />
        
        <div className="relative group">
            <button className="px-3 py-1.5 rounded-full text-neutral-400 hover:text-white transition-colors flex items-center gap-1">
                More
            </button>
            {/* Dropdown would go here */}
        </div>

        <div className="w-px h-4 bg-white/10 mx-2" />
        
        <button className="px-4 py-1.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors ml-1">
          Book a Call
        </button>
      </div>
    </div>
  );
};

export default Navbar;
