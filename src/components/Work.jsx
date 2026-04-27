import React, { useState } from 'react';

const Work = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const projects = [
    {
      num: "01",
      title: "SarkarSahayak",
      desc: "A web application helping citizens file complaints, access government schemes, and track complaint status.",
      details: [
        "Helps citizens file complaints and access government schemes seamlessly.",
        "Robust Django backend for scalable, secure data management.",
        "Intuitive ReactJS frontend for a smooth citizen-facing experience.",
        "REST APIs enabling fluid communication between frontend and backend.",
        "MongoDB for flexible, efficient document-based storage.",
        "AI/ML/DL concepts to intelligently categorize and prioritize complaints.",
        "Currently under active development with ongoing UX refinements."
      ],
      tags: ["Django", "MongoDB", "ReactJS", "REST API", "MERN Stack", "AI/ML/DL"],
      year: "Under Dev",
      link: "https://github.com/kavyysachaniya"
    },
    {
      num: "02",
      title: "DirStudio",
      desc: "AI-powered filesystem analysis platform with real-time visualization and intelligent directory insights.",
      details: [
        "AI-powered filesystem analysis using FastAPI and Mistral AI.",
        "Natural language querying for deep directory exploration.",
        "Interactive web interface built with Vanilla JS and Bootstrap.",
        "Chart.js for real-time visualization of directory statistics.",
        "PostgreSQL database for caching metadata and AI insights.",
        "LangChain pipelines for efficient LLM chaining and processing.",
        "Asynchronous operations for a seamless, lag-free user experience."
      ],
      tags: ["Vanilla JS", "FastAPI", "LangChain", "Mistral AI", "PostgreSQL", "Chart.js"],
      year: "2024",
      link: "https://github.com/kavyysachaniya/DirStudio"
    },
    {
      num: "03",
      title: "NGO Management System",
      desc: "Java-based backend system to manage donors, volunteers, and donations with full JDBC integration.",
      details: [
        "Comprehensive Java-based backend for full NGO operations.",
        "Donor, volunteer, and donation management modules.",
        "MySQL database via JDBC for secure, reliable data persistence.",
        "Strict Object-Oriented Programming (OOP) principles throughout.",
        "Secure user authentication and role-based access control.",
        "Automated reporting features for donation and activity tracking.",
        "High code maintainability and testability as core design goals."
      ],
      tags: ["Java", "MySQL", "JDBC", "OOP", "Backend"],
      year: "2025",
      link: "https://github.com/kavyysachaniya"
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

      <div
        className="pgrid"
        onMouseLeave={() => setHoveredIdx(null)}
      >
        {projects.map((p, idx) => {
          const isExpanded = hoveredIdx === idx;
          const isPushed   = hoveredIdx !== null && !isExpanded;
          return (
            <a
              key={idx}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={[
                'pcard',
                isExpanded ? 'pcard--expanded' : '',
                isPushed   ? 'pcard--pushed'   : '',
              ].filter(Boolean).join(' ')}
              onMouseEnter={() => setHoveredIdx(idx)}
            >
              {/* Number + year */}
              <div className="pcard-header">
                <span className="pcard-num">{p.num}</span>
                <span className="pcard-year">{p.year}</span>
              </div>

              {/* Title always visible */}
              <div className="pcard-body">
                <h3 className="pcard-title">{p.title}</h3>

                {/* Collapsible content */}
                <div className="pcard-ext">
                  <p className="pcard-desc">{p.desc}</p>
                  <ul className="pcard-details">
                    {p.details.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                </div>
              </div>

              {/* Tags + arrow */}
              <div className="pcard-footer">
                <div className="pcard-tags">
                  {p.tags.map((t, i) => (
                    <span key={i} className="pcard-tag">{t}</span>
                  ))}
                </div>
                <span className="pcard-arr">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 15L15 3M15 3H5M15 3V13" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
