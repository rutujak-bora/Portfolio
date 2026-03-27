import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Python", "REST APIs", "GraphQL"]
    },
    {
      title: "Database & Tools",
      skills: ["MongoDB", "MySQL", "Git", "Jira", "Confluence", "Postman"]
    },
    {
      title: "Agile & Project Management",
      skills: ["Scrum Master", "Sprint Planning", "Backlog Management", "Stakeholder Communication"]
    },
    {
      title: "Specialized Skills",
      skills: ["ERP Implementation", "CRM Development", "Data Analytics", "AI Integration", "E-commerce Solutions"]
    }
  ];

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="skill-tag"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
