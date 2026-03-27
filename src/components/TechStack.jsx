import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './TechStack.css';

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techStack = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "JavaScript", level: 95, icon: "📜" },
        { name: "HTML5/CSS3", level: 95, icon: "🎨" },
        { name: "Tailwind CSS", level: 85, icon: "💨" }
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Express.js", level: 85, icon: "🚂" },
        { name: "Python", level: 80, icon: "🐍" },
        { name: "REST APIs", level: 90, icon: "🔌" }
      ]
    },
    {
      category: "Database",
      technologies: [
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "MySQL", level: 80, icon: "🐬" },
        { name: "PostgreSQL", level: 75, icon: "🐘" }
      ]
    },
    {
      category: "Tools & Others",
      technologies: [
        { name: "Git", level: 90, icon: "📦" },
        { name: "Jira", level: 95, icon: "📊" },
        { name: "Docker", level: 70, icon: "🐳" },
        { name: "AWS", level: 75, icon: "☁️" }
      ]
    }
  ];

  return (
    <section id="tech-stack" className="tech-stack" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle">
            Technologies I work with and proficiency levels
          </p>
        </motion.div>

        <div className="tech-categories">
          {techStack.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="tech-category"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <h3>{category.category}</h3>
              <div className="tech-items">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    className="tech-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: (catIndex * 0.1) + (techIndex * 0.05) }}
                  >
                    <div className="tech-header">
                      <span className="tech-icon">{tech.icon}</span>
                      <span className="tech-name">{tech.name}</span>
                      <span className="tech-percentage">{tech.level}%</span>
                    </div>
                    <div className="tech-bar">
                      <motion.div
                        className="tech-progress"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${tech.level}%` } : {}}
                        transition={{ duration: 1, delay: (catIndex * 0.1) + (techIndex * 0.05) + 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
