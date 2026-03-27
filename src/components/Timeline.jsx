import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Timeline.css';

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const milestones = [
    {
      year: "Present",
      title: "Freelance Developer & Scrum Master",
      description: "Started freelancing, delivering AI-driven business solutions and managing Agile projects for multiple clients.",
      icon: "🚀"
    },
    {
      year: "2026",
      title: "Certified Scrum Master",
      description: "Achieved CSM certification and led multiple successful sprint cycles with cross-functional teams.",
      icon: "🎓"
    },
    {
      year: "2025",
      title: "Full Stack Development",
      description: "Mastered MERN stack and built several production-ready web applications and ERP systems.",
      icon: "💻"
    },
    {
      year: "2025",
      title: "ERP Implementation Specialist",
      description: "Led ERP implementation projects, improving business processes and operational efficiency.",
      icon: "⚙️"
    },
    {
      year: "2024",
      title: "Started Professional Journey",
      description: "Began career in software development with focus on web technologies and Agile methodologies.",
      icon: "🌟"
    }
  ];

  return (
    <section id="timeline" className="timeline-section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Journey</h2>
          <p className="section-subtitle">
            Key milestones in my professional career
          </p>
        </motion.div>

        <div className="timeline">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-content">
                <div className="timeline-icon">{milestone.icon}</div>
                <div className="timeline-year">{milestone.year}</div>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
