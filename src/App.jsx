import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Drawer from './components/Drawer';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Work from './components/Work';
import Stack from './components/Stack';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  useEffect(() => {
    // 1. Reveal Animation Logic
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add a small staggered delay based on index within the visible window if needed, 
          // or just trigger the CSS transition
          entry.target.classList.add('in');
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(el => observer.observe(el));

    // 2. Section Floating Effect
    const sections = document.querySelectorAll('section');
    const handleScroll = () => {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const offset = rect.top * 0.05;
        section.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      reveals.forEach(el => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Navbar 
        drawerOpen={drawerOpen} 
        setDrawerOpen={setDrawerOpen} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />
      <Drawer open={drawerOpen} setOpen={setDrawerOpen} />
      
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Stack />
        <About />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
