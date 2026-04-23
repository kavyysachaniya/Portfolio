import React from 'react';

const Education = () => {
  const academic = [
    {
      year: "2024 — 2028",
      status: "Current",
      school: "LJ Institute Of Engineering & Technology",
      degree: "Bachelors of Engineering in Computer Science and Technology",
      tags: ["Data Structures", "DBMS", "OS", "Web Dev", "Networks"]
    },
    {
      year: "2022 — 2024",
      school: "Divine Life School, Ahmedabad",
      degree: "HSC — Science Stream (PCM + CS)\nBoard: GSEB",
      tags: ["Physics", "Chemistry", "Maths", "Computer Science"]
    },
    {
      year: "Until 2022",
      school: "Gajera English Medium School, Surat",
      degree: "SSC — Completed with Distinction\nBoard: GSEB",
      tags: ["Science", "Mathematics"]
    }
  ];

  const certificates = [
    {
      title: "Intro to HTML, CSS & JavaScript",
      issuer: "IBM · Coursera",
      date: "Dec 7, 2025",
      link: "https://coursera.org/share/863bbe80d022bf87f54ccbe859f91ea6",
      img: "https://i.postimg.cc/8c2FRRJN/Sem1-page-0001.jpg",
      fallback: "🌐"
    },
    {
      title: "Inheritance & Data Structures in Java",
      issuer: "Univ. of Pennsylvania · Coursera",
      date: "Jul 13, 2025",
      link: "https://coursera.org/share/d16bf8f6b4692c4bac3982e3e3acfc5b",
      img: "https://i.postimg.cc/rsrswDh1/Sem2-page-0001.jpg",
      fallback: "☕"
    },
    {
      title: "Introduction to Java",
      issuer: "LearnQuest · Coursera",
      date: "Jan 1, 2025",
      link: "https://coursera.org/share/ff34273b9eba26c5738694c88146b353",
      img: "https://i.postimg.cc/pT7yvfBy/Sem3-page-0001.jpg",
      fallback: "☕"
    }
  ];

  return (
    <section id="education">
      <div className="shd reveal">
        <div>
          <div className="slbl">Background</div>
          <h2 className="stit">Education &amp; Certifications</h2>
        </div>
      </div>
      <div className="edgrid">
        <div className="reveal">
          <div className="edhd">Academic Journey</div>
          <div className="tl">
            {academic.map((item, idx) => (
              <div key={idx} className="tli">
                <div className="tldt">{item.year} {item.status && <span className="tlbg">{item.status}</span>}</div>
                <div className="tlsc">{item.school}</div>
                <div className="tlde" dangerouslySetInnerHTML={{ __html: item.degree.replace('\n', '<br>') }}></div>
                <div className="tlpls">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tlpl">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal" style={{ transitionDelay: '.15s' }}>
          <div className="edhd">Certifications</div>
          <div className="clst">
            {certificates.map((cert, idx) => (
              <a key={idx} className="ccard" href={cert.link} target="_blank" rel="noopener">
                <div className="ccard-thumb">
                  <img 
                    src={cert.img} 
                    alt={cert.title} 
                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} 
                  />
                  <div className="ccard-thumb-fallback" style={{ display: 'none' }}>{cert.fallback}</div>
                </div>
                <div className="ccard-body">
                  <div className="ccard-title">{cert.title}</div>
                  <div className="ccard-issuer">{cert.issuer}</div>
                  <div className="ccard-date">✓ {cert.date}</div>
                </div>
                <div className="ccard-arr">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M2.5 12.5L12.5 2.5M12.5 2.5H4.5M12.5 2.5V10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
