import React, { useState } from 'react';

const Stack = () => {
  const [activeTab, setActiveTab] = useState('languages');

  const tabs = [
    { id: 'languages', label: 'Languages' },
    { id: 'frameworks', label: 'Frameworks' },
    { id: 'databases', label: 'Databases' },
    { id: 'deployment', label: 'Deployment' },
    { id: 'aiml', label: 'AI/ML' }
  ];

  const content = {
    languages: [
      {
        num: "01", name: "Java", sub: "Object-Oriented", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        tags: ["OOP", "Data Structures", "JDBC"], color: "#f0931c", bg: "rgba(240,147,28,.09)", pct: "85%",
        time: "1.5+ Years", desc: "Core language for algorithms, OOP principles & backend foundations.", pips: 4
      },
      {
        num: "02", name: "Python", sub: "Versatile & Powerful", icon: "https://cdn.simpleicons.org/python/4584b6",
        tags: ["Django", "Scripting", "Data"], color: "#4584b6", bg: "rgba(69,132,182,.09)", pct: "80%",
        time: "1+ Year", desc: "Web apps with FastAPI/Django, automation scripts, and data processing.", pips: 3
      },
      {
        num: "03", name: "HTML", sub: "Markup", icon: "https://cdn.simpleicons.org/html5/e34c26",
        tags: ["Semantic", "Accessibility", "SEO"], color: "#e34c26", bg: "rgba(227,76,38,.09)", pct: "90%",
        time: "1+ Year", desc: "Semantic HTML5, accessibility-first structure and clean markup.", pips: 3
      },
      {
        num: "04", name: "CSS", sub: "Styling", icon: "https://cdn.simpleicons.org/css/264de4",
        tags: ["Animations", "Flexbox", "Grid"], color: "#264de4", bg: "rgba(38,77,228,.09)", pct: "88%",
        time: "1+ Year", desc: "Responsive layouts, animations, and design systems from scratch.", pips: 3
      },
      {
        num: "05", name: "JS", sub: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/f7df1e",
        tags: ["ES6+", "DOM", "Async"], color: "#f7df1e", bg: "rgba(247,223,30,.08)", pct: "87%",
        time: "6+ Months", desc: "Frontend interactivity, async programming, and basic full-stack logic.", pips: 2
      },
      {
        num: "06", name: "MERN", sub: "Full Stack", icon: "https://cdn.simpleicons.org/react/61dafb",
        tags: ["MongoDB", "Express", "React", "Node.js"], color: "#61dafb", bg: "rgba(97,218,251,.08)", pct: "82%",
        time: "Currently Learning", desc: "End-to-end JavaScript — from database to browser.", pips: 1
      }
    ],
    frameworks: [
      {
        num: "01", name: "Django", sub: "Python Web", icon: "https://cdn.simpleicons.org/django/44b78b",
        tags: ["ORM", "Auth", "Admin", "REST"], color: "#44b78b", bg: "rgba(68,183,139,.1)", pct: "80%",
        time: "Currently Learning", desc: "Batteries-included Python framework.", pips: 1
      },
      {
        num: "02", name: "Bootstrap", sub: "UI Framework", icon: "https://cdn.simpleicons.org/bootstrap/7952b3",
        tags: ["Grid", "Components", "Responsive"], color: "#7952b3", bg: "rgba(121,82,179,.1)", pct: "88%",
        time: "6+ Months", desc: "Rapid UI prototyping with Bootstrap component system.", pips: 2
      },
      {
        num: "03", name: "Tailwind", sub: "CSS Utility", icon: "https://cdn.simpleicons.org/tailwindcss/38bdf8",
        tags: ["Utility-First", "Dark Mode"], color: "#38bdf8", bg: "rgba(56,189,248,.09)", pct: "83%",
        time: "3+ Months", desc: "Design systems at speed — utility-first CSS.", pips: 1
      },
      {
        num: "04", name: "Node.js", sub: "JS Runtime", icon: "https://cdn.simpleicons.org/nodedotjs/83cd29",
        tags: ["V8", "Async I/O"], color: "#83cd29", bg: "rgba(131,205,41,.09)", pct: "80%",
        time: "3+ Months", desc: "Scalable backend applications with JavaScript.", pips: 1
      },
      {
        num: "05", name: "Express.js", sub: "Node Web", icon: "https://cdn.simpleicons.org/express/ffffff",
        tags: ["Middleware", "Routing"], color: "#ff5722", bg: "rgba(255,87,34,.09)", pct: "80%",
        time: "3+ Months", desc: "Minimalist web framework for Node.js.", pips: 1
      },
      {
        num: "06", name: "FastAPI", sub: "Python Web", icon: "https://cdn.simpleicons.org/fastapi/009688",
        tags: ["Async", "Pydantic"], color: "#009688", bg: "rgba(0,150,136,.09)", pct: "85%",
        time: "6+ Months", desc: "High-performance API framework with Python and Starlette.", pips: 2
      },
      {
        num: "07", name: "Flask", sub: "Python Micro", icon: "https://cdn.simpleicons.org/flask/dc3545",
        tags: ["Micro", "Jinja2"], color: "#dc3545", bg: "rgba(220,53,69,.09)", pct: "80%",
        time: "3+ Months", desc: "Lightweight WSGI web application framework.", pips: 1
      }
    ],
    databases: [
      {
        num: "01", name: "PG", sub: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/336791",
        tags: ["Relations", "Indexes", "Migrations"], color: "#336791", bg: "rgba(51,103,145,.1)", pct: "85%",
        time: "1.5+ Years", desc: "Relational data modelling, query optimisation, and complex joins.", pips: 4
      },
      {
        num: "02", name: "MySQL", sub: "Relational DB", icon: "https://cdn.simpleicons.org/mysql/f29111",
        tags: ["CRUD", "Joins", "Procedures"], color: "#f29111", bg: "rgba(242,145,17,.1)", pct: "80%",
        time: "1.5+ Years", desc: "Industry-standard relational DB. From schema design to stored procedures.", pips: 4
      },
      {
        num: "03", name: "MongoDB", sub: "NoSQL DB", icon: "https://cdn.simpleicons.org/mongodb/47a248",
        tags: ["Documents", "JSON"], color: "#ffca28", bg: "rgba(255,202,40,.09)", pct: "80%",
        time: "Currently Learning", desc: "Highly scalable document-based NoSQL database.", pips: 1
      },
      {
        num: "04", name: "SQLite", sub: "Embedded SQL", icon: "https://cdn.simpleicons.org/sqlite/0f80cc",
        tags: ["Serverless", "Local"], color: "#00e5a0", bg: "rgba(0,229,160,.1)", pct: "80%",
        time: "3+ Months", desc: "Self-contained, serverless, and embedded relational database engine.", pips: 1
      }
    ],
    deployment: [
      {
        num: "01", name: "Render", sub: "Cloud Hosting", icon: "https://cdn.simpleicons.org/render/46e3b7",
        tags: ["Web Services", "Auto-deploy"], color: "#46e3b7", bg: "rgba(70,227,183,.08)", pct: "80%",
        time: "3+ Months", desc: "Deployed web apps with auto-deploy from GitHub.", pips: 1
      },
      {
        num: "02", name: "Vercel", sub: "Frontend Cloud", icon: "https://cdn.simpleicons.org/vercel/ffffff",
        tags: ["Edge Fns", "Previews"], color: "#ffffff", bg: "rgba(255,255,255,.06)", pct: "88%",
        time: "3+ Months", desc: "Go-to for React. Instant previews, edge network, zero config.", pips: 1
      },
      {
        num: "03", name: "Netlify", sub: "JAMstack Host", icon: "https://cdn.simpleicons.org/netlify/00c7b7",
        tags: ["CDN", "Serverless"], color: "#ff9900", bg: "rgba(255,153,0,.09)", pct: "82%",
        time: "3+ Months", desc: "Static site deployments with global CDN distribution.", pips: 1
      }
    ],
    aiml: [
      {
        num: "01", name: "Pandas", sub: "Data Analysis", icon: "https://cdn.simpleicons.org/pandas/f0931c",
        tags: ["DataFrames", "Cleaning"], color: "#f0931c", bg: "rgba(240,147,28,.09)", pct: "80%",
        time: "3+ Months", desc: "Data manipulation, structural analysis, and data cleaning.", pips: 1
      },
      {
        num: "02", name: "Numpy", sub: "Numerics", icon: "https://cdn.simpleicons.org/numpy/4d77cf",
        tags: ["Arrays", "Math"], color: "#4d77cf", bg: "rgba(77,119,207,.09)", pct: "85%",
        time: "9+ Months", desc: "High-level mathematical functions and multi-dimensional arrays.", pips: 3
      },
      {
        num: "03", name: "MatPlotLib", sub: "Plotting", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
        tags: ["Charts", "Viz"], color: "#e83e8c", bg: "rgba(232,62,140,.09)", pct: "80%",
        time: "6+ Months", desc: "Comprehensive 2D data visualization library for Python.", pips: 2
      }
    ]
  };

  return (
    <section id="languages">
      <div className="shd reveal">
        <div>
          <div className="slbl">Stack</div>
          <h2 className="stit">Currently Learning</h2>
        </div>
      </div>
      <div className="stabs reveal" id="stabs">
        {tabs.map(tab => (
          <button 
            key={tab.id} 
            className={`stab ${activeTab === tab.id ? 'act' : ''}`} 
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="spanel act">
        {content[activeTab].map((item, idx) => (
          <div 
            key={idx} 
            className="sc" 
            style={{ '--cc': item.color, '--cg': item.bg, '--pct': item.pct }}
          >
            <div className="sci">
              <div className="scf scfr">
                <div className="sclb">{activeTab === 'languages' ? 'Language' : activeTab === 'frameworks' ? 'Framework' : activeTab === 'databases' ? 'Database' : activeTab === 'deployment' ? 'Deploy' : 'AI/ML'} — {item.num}</div>
                <div className="scnm">{item.name}<small>{item.sub}</small></div>
                <div className="scpels">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="pl"><span className="pldot"></span>{tag}</span>
                  ))}
                </div>
                <div className="scbar"></div>
              </div>
              <div className="scf scbk">
                <div className="bemj"><img src={item.icon} alt={item.name} /></div>
                <div className="bnum">{item.time.split(' ')[0]}<small>{item.time.split(' ').slice(1).join(' ')}</small></div>
                <div className="bdsc">{item.desc}</div>
                <div className="bpips">
                  {[...Array(5)].map((_, pIdx) => (
                    <div key={pIdx} className={`pip ${pIdx < item.pips ? 'on' : ''}`}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
