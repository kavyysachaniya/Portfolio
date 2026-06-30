import { useState } from 'react';

const DESKTOP_QUERY = '(min-width: 1025px) and (hover: hover) and (pointer: fine)';

const Work = () => {
  const [activeIdx, setActiveIdx] = useState(null);

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
        "AI/ML/DL concepts to intelligently categorize and prioritize complaints."
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
      year: "2026",
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
    },
    {
      num: "04",
      title: "Electronic Store Management System",
      desc: "Developed a Java-based backend system to manage products, customers, orders, and billing.",
      details: [
        "Developed a Java-based backend system to manage products, customers, orders, and billing",
        "Applied OOP concepts for modular, scalable, and maintainable application design",
        "Implemented multithreading to handle multiple store operations efficiently",
        "Used JDBC for database connectivity and CRUD operations with MySQL",
        "Designed structured backend workflow for inventory and transaction management"
      ],
      tags: ["Java", "JDBC", "MySQL", "OOP", "Multithreading"],
      year: "2025",
      link: "https://github.com/kavyysachaniya"
    },
    {
      num: "05",
      title: "Smart Automatic Door Locker",
      desc: "Built a smart door locking system using Arduino Uno.",
      details: [
        "Built a smart door locking system using Arduino Uno",
        "Used RFID card and keypad password for secure access",
        "Programmed the system to lock and unlock automatically",
        "Connected hardware components for real-time access control",
        "Improved security using dual authentication"
      ],
      tags: ["Arduino Uno", "RFID Module", "Keypad", "Embedded C", "IoT"],
      year: "2024",
      link: "https://github.com/kavyysachaniya"
    }
  ];

  const handleCardClick = (e, idx) => {
    const isDesktop = window.matchMedia(DESKTOP_QUERY).matches;
    if (isDesktop) return;

    // On mobile/tablet only the footer (tags + arrow) actually opens the
    // link; tapping anywhere else just toggles the expanded description.
    if (e.target.closest('.pcard-footer')) return;

    e.preventDefault();
    setActiveIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="work">
      <div className="shd reveal">
        <div>
          <div className="slbl">Selected Work</div>
          <h2 className="stit">Projects</h2>
        </div>
      </div>

      <div className="pgrid">
        {projects.map((p, idx) => {
          const isExpanded = activeIdx === idx;

          return (
            <a
              key={idx}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={['pcard', isExpanded ? 'pcard--expanded' : ''].filter(Boolean).join(' ')}
              onClick={(e) => handleCardClick(e, idx)}
            >
              <div className="pcard-content">
                <div className="pcard-header">
                  <span className="pcard-num">{p.num}</span>
                  <span className="pcard-year">{p.year}</span>
                </div>

                <div className="pcard-body">
                  <h3 className="pcard-title">{p.title}</h3>

                  <div className="pcard-ext">
                    <p className="pcard-desc">{p.desc}</p>
                    <ul className="pcard-details">
                      {p.details.map((d, i) => <li key={i}>{d}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="pcard-footer">
                  <div className="pcard-tags">
                    {p.tags.map((t, i) => (
                      <span key={i} className="pcard-tag">{t}</span>
                    ))}
                  </div>
                  <span className="pcard-arr">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3 15L15 3M15 3H5M15 3V13" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
