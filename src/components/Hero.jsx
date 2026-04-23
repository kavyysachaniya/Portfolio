import React, { useEffect, useState, useRef } from 'react';

const roles = [
    'Full-Stack Developer', 
    'MERN Stack Developer', 
    'Python Developer', 
    'Django Developer', 
    'Java Programmer', 
    'Frontend Engineer', 
    'Backend Engineer', 
    'Problem Solver'
];

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const typedTextRef = useRef('');
    
    // Parallax logic
    useEffect(() => {
        const grid = document.querySelector('.hgrid');
        const orbs = document.querySelectorAll('.orb');
        const matchMedia = window.matchMedia('(prefers-reduced-motion: reduce)');

        const handleScroll = () => {
            const y = window.scrollY;
            if (!matchMedia.matches && grid) {
                grid.style.transform = `translateY(${y * 0.18}px)`;
            }
            orbs.forEach((orb, i) => {
                const speed = i === 0 ? 0.05 : 0.08;
                if (!matchMedia.matches) {
                    orb.style.transform = `translateY(${y * speed}px)`;
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Typewriter logic
    useEffect(() => {
        let ri = 0;
        let ci = 0;
        let del = false;
        let timerId;

        const type = () => {
            const currentRole = roles[ri];
            if (del) {
                typedTextRef.current = currentRole.slice(0, --ci);
            } else {
                typedTextRef.current = currentRole.slice(0, ++ci);
            }
            setTypedText(typedTextRef.current);

            let delay = del ? 44 : 88;
            
            if (!del && ci === currentRole.length + 1) {
                delay = 1800;
                del = true;
            } else if (del && ci === -1) {
                del = false;
                ci = 0;
                ri = (ri + 1) % roles.length;
                delay = 380;
            }

            timerId = setTimeout(type, delay);
        };

        timerId = setTimeout(type, 1500);

        return () => clearTimeout(timerId);
    }, []);

    return (
        <section id="hero">
            <div className="orb orb1"></div>
            <div className="orb orb2"></div>
            <div className="hgrid"></div>

            <div className="hbadge">
                <span className="hbdot"></span>
                Available for work — 2025
            </div>

            <h1 className="hhd">
                <span className="hl"><span>Learning to Build.</span></span>
                <span className="hl"><span className="hi">Building to Scale.</span></span>
            </h1>

            <div className="htw">
                <span className="tw-pre">&gt;</span>
                <span>I am a</span>
                <span className="tw-txt" id="twt">{typedText}</span><span className="tw-cur"></span>
            </div>

            <div className="hsub">
                <p className="hdesc">
                    <strong>Full-stack developer &amp; CS engineering student</strong> building scalable backend systems and AI-powered applications — from Java APIs to intelligent platforms like DirStudio.
                </p>
                <div className="hact">
                    <a href="#work" className="btn ba">
                        View Work 
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 10L10 2M10 2H3M10 2V9" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                    </a>
                    <a href="#contact" className="btn bo">Get in touch</a>
                </div>
            </div>

            <div className="hscroll">
                <div className="scroll-ln"></div>
                <span className="scroll-lb">Scroll</span>
            </div>
        </section>
    );
};

export default Hero;
