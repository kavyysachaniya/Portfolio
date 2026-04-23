import React from 'react';

const Work = () => {
  const projects = [
    {
      num: "01",
      title: "DirStudio - Directory Intelligence Platform",
      desc: "AI-powered filesystem analysis platform with visualization and intelligent insights.",
      tags: ["Vanilla JS", "Bootstrap", "Chart.js", "FastAPI", "LangChain", "Mistral AI", "PostgreSQL"],
      year: "2024",
      link: "https://github.com/kavyysachaniya/DirStudio"
    },
    {
      num: "02",
      title: "NGO Management System",
      desc: "Java-based backend system to manage donors, volunteers, and donations with JDBC integration.",
      tags: ["Java", "MySQL", "JDBC", "OOP", "Backend"],
      year: "2025",
      link: "https://github.com/kavyysachaniya",
      delay: "0.1s"
    }
  ];

  return (
    <section id="work">
      <div className="shd reveal">
        <div>
          <div className="slbl">Selected Work</div>
          <h2 className="stit">Projects</h2>
        </div>
      </div>
      <div>
        {projects.map((p, idx) => (
          <a 
            key={idx} 
            href={p.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="prow reveal" 
            style={p.delay ? { transitionDelay: p.delay } : {}}
          >
            <span className="pn">{p.num}</span>
            <div className="pi">
              <div className="pt">{p.title}</div>
              <div className="pdesc">{p.desc}</div>
              <div className="ptags">
                {p.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="ptg">{tag}</span>
                ))}
              </div>
            </div>
            <span className="pyr">{p.year}</span>
            <span className="parr">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 15L15 3M15 3H5M15 3V13" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Work;
