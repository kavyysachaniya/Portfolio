import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="shd reveal">
        <div>
          <div className="slbl">About Me</div>
          <h2 className="stit">The Engineer</h2>
        </div>
      </div>
      <div className="agrid">
        <div className="aphw reveal">
          <div className="aph">
            <div className="acorner"></div>
            <img 
              src="https://i.postimg.cc/SRpYBLrB/IMG-20260211-WA0038-jpg.jpg" 
              alt="Kavy Sachaniya" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: 'inherit' }} 
            />
          </div>
        </div>
        <div className="reveal" style={{ transitionDelay: '.15s' }}>
          <div className="slbl">Full-Stack Developer</div>
          <div className="aname">Kavy Sachaniya</div>
          <h2 className="astmt">I build things that <em>scale</em> and feel <em>alive</em>.</h2>
          <div className="abdy">
            <p>I am a full-stack developer who loves turning complex problems into simple, reliable software. I am currently a 2nd year student who is passionate about building innovative solutions and continuously improving my skills.</p>
            <p>I am a quick learner with a strong foundation in computer science fundamentals. I am always eager to learn new technologies and improve my skills.</p>
          </div>
          <div className="skgrid">
            <div className="skcell">
              <div className="sklbl">Frontend</div>
              <div className="skval">React / Tailwind / Bootstrap</div>
            </div>
            <div className="skcell">
              <div className="sklbl">Backend</div>
              <div className="skval">Node.js / Django / Express</div>
            </div>
            <div className="skcell">
              <div className="sklbl">Databases</div>
              <div className="skval">PostgreSQL / MySQL / MongoDB</div>
            </div>
            <div className="skcell">
              <div className="sklbl">Deploy</div>
              <div className="skval">Vercel / Render / Netlify</div>
            </div>
          </div>
          <a href="#contact" className="btn ba">
            Let's build together 
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H3M10 2V9" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
