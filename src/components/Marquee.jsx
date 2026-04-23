import React from 'react';

const Marquee = () => {
  const items = [
    "Java", "Python", "JavaScript", "MERN Stack", "Django", "PostgreSQL", 
    "Tailwind CSS", "Vercel", "AWS", "NeonDB", "Bootstrap", "PHP"
  ];
  
  // Double the items for seamless loop
  const displayItems = [...items, ...items];

  return (
    <div className="mqw">
      <div className="mqt">
        {displayItems.map((item, idx) => (
          <div key={idx} className="mqi">
            <span className="mki"></span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
