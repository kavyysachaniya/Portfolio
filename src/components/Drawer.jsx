import React, { useEffect } from 'react';

const Drawer = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
    }, [open]);

    return (
        <div className={`drawer ${open ? 'open' : ''}`} id="drawer">
            <a href="#work" className="dl" onClick={handleClose}>Work</a>
            <a href="#languages" className="dl" onClick={handleClose}>Stack</a>
            <a href="#about" className="dl" onClick={handleClose}>About</a>
            <a href="#education" className="dl" onClick={handleClose}>Education</a>
            <a href="#contact" className="dl" onClick={handleClose}>Contact</a>
            <p className="drawer-ft">Kavy Sachaniya · 2025</p>
        </div>
    );
};

export default Drawer;
