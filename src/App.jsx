import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Home/Hero';
import BentoGrid from './components/Home/BentoGrid';

const PagePlaceholder = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center pt-20">
    <h1 className="text-5xl font-display font-bold text-white/20">{title}</h1>
  </div>
);

const Home = () => (
  <>
    <Hero />
    <BentoGrid />
  </>
);

function App() {
  return (
    <Router>
      <div className="bg-[#000000] min-h-screen text-white font-sans selection:bg-emerald-500/30">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<PagePlaceholder title="About Me" />} />
          <Route path="/projects" element={<PagePlaceholder title="Works" />} />
          <Route path="/blogs" element={<PagePlaceholder title="Blogs" />} />
        </Routes>
        
        <footer className="py-8 text-center text-neutral-600 text-sm">
           © {new Date().getFullYear()} Parth Sharma. Crafted with React & Tailwind.
        </footer>
      </div>
    </Router>
  );
}

export default App;
