import { useEffect, useState, useRef } from 'react';
import LiquidEther from './LiquidEther';

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

const LIQUID_COLORS = [ '#005bc4', '#4aaaff', '#82d7ff' ];

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const typedTextRef = useRef('');

    // Parallax logic
    useEffect(() => {
        const orbs = document.querySelectorAll('.orb');
        const matchMedia = window.matchMedia('(prefers-reduced-motion: reduce)');

        const handleScroll = () => {
            const y = window.scrollY;
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
        let charIndex = 0;
        let isDeleting = false;
        let timerId;

        const type = () => {
            const currentRole = roles[ri];

            if (isDeleting) {
                charIndex--;
            } else {
                charIndex++;
            }

            typedTextRef.current = currentRole.substring(0, charIndex);
            setTypedText(typedTextRef.current);

            let delay = isDeleting ? 40 : 80;

            if (!isDeleting && charIndex === currentRole.length) {
                delay = 1800;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                ri = (ri + 1) % roles.length;
                delay = 400;
            }

            timerId = setTimeout(type, delay);
        };

        timerId = setTimeout(type, 1500);

        return () => clearTimeout(timerId);
    }, []);

    return (
        <section id="hero" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
              <LiquidEther
                colors={LIQUID_COLORS}
                mouseForce={20}
                cursorSize={100}
                isViscous={false}
                viscous={30}
                iterationsViscous={32}
                iterationsPoisson={32}
                resolution={0.5}
                isBounce={false}
                autoDemo={true}
                autoSpeed={0.5}
                autoIntensity={2.2}
                takeoverDuration={0.25}
                autoResumeDelay={3000}
                autoRampDuration={0.6}
              />
            </div>
            <div className="orb orb1"></div>
            <div className="orb orb2"></div>

            <div className="hbadge">
                <span className="hbdot"></span>
                Available for work — 2026
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
}

export default Hero;
