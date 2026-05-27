import React, { useState, useEffect } from 'react';

const Navbar = ({ drawerOpen, setDrawerOpen, theme, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isHovered, setIsHovered] = useState(false);
    const [logoHtml, setLogoHtml] = useState("KS<span>.</span>");
    const [logoBaseOpacity, setLogoBaseOpacity] = useState(1);
    const [logoTwOpacity, setLogoTwOpacity] = useState(0);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const handleScroll = () => {
            const y = window.scrollY;
            setScrolled(y > 60);

            let current = "";
            sections.forEach(section => {
                const top = section.offsetTop - 100;
                if (window.scrollY >= top) {
                    current = section.getAttribute("id");
                }
            });
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const chars = ['K', 'a', 'v', 'y', ' ', 'S', 'a', 'c', 'h', 'a', 'n', 'i', 'y', 'a'];
        const accented = new Set([0, 5]);
        let timer = null;

        const render = (count) => {
            let html = '';
            const visible = Math.max(2, count);
            for (let i = 0; i < visible; i++) {
                const ch = chars[i];
                if (accented.has(i)) {
                    html += `<span>${ch}</span>`;
                } else {
                    html += ch;
                }
            }
            if (count <= 2) html += '<span>.</span>';
            setLogoHtml(html);
        };

        const typeTo = (target, current, step, delay) => {
            clearTimeout(timer);
            render(current);

            if (current === target) {
                if (!isHovered && current === 2) {
                    setLogoBaseOpacity(1);
                    setLogoTwOpacity(0);
                }
                return;
            }
            timer = setTimeout(() => {
                typeTo(target, current + step, step, delay);
            }, delay);
        };

        if (isHovered) {
             setTimeout(() => {
                 setLogoBaseOpacity(0);
                 setLogoTwOpacity(1);
             }, 0);
             typeTo(chars.length, 2, 1, 55);
        } else {
             typeTo(2, chars.length, -1, 38);
        }

        return () => clearTimeout(timer);
    }, [isHovered]);

    return (
        <nav id="nav" className={scrolled ? 'scrolled' : ''}>
            <a href="#" className="nlogo" id="nlogo" 
               onMouseEnter={() => setIsHovered(true)} 
               onMouseLeave={() => setIsHovered(false)}>
                <b id="nlogo-base" style={{ fontWeight: 'inherit', transition: 'opacity .15s', opacity: logoBaseOpacity }} dangerouslySetInnerHTML={{ __html: 'KS<span>.</span>' }}>
                </b>
                <b id="nlogo-tw" style={{ fontWeight: 'inherit', position: 'absolute', top: 0, left: 0, whiteSpace: 'nowrap', pointerEvents: 'none', transition: 'opacity .15s', opacity: logoTwOpacity }} dangerouslySetInnerHTML={{ __html: logoHtml }}>
                </b>
            </a>
            <div className="nlinks">
                {['work', 'languages', 'about', 'education', 'contact'].map((id) => (
                    <a key={id} href={`#${id}`} className={activeSection === id ? "act" : ""}>
                        {id === "languages" ? "Stack" : id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                ))}
            </div>
            <div className="nright">
                <button className="tbtn" id="themeBtn" aria-label="Toggle theme" onClick={toggleTheme}>
                    {theme === 'dark' ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                        </svg>
                    ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <line x1="12" y1="1" x2="12" y2="3" />
                            <line x1="12" y1="21" x2="12" y2="23" />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                            <line x1="1" y1="12" x2="3" y2="12" />
                            <line x1="21" y1="12" x2="23" y2="12" />
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </svg>
                    )}
                </button>
                <button className={`hbtn ${drawerOpen ? 'open' : ''}`} id="hbtn" aria-label="Menu" onClick={() => setDrawerOpen(!drawerOpen)}>
                    <span></span><span></span><span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
