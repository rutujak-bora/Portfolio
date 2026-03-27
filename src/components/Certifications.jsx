import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Certifications.css';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "Certified Scrum Master (CSM)",
      issuer: "Scrum Alliance",
      date: "2026",
      icon: "🎓",
      description: "Professional certification in Agile Scrum methodology"
    },
    {
      title: "Data Analyst",
      issuer: "ED Bytes institute",
      date: "2024",
      icon: "💻",
      description: "Comprehensive training in MERN stack development"
    },
    {
      title: "Python for Data Science",
      issuer: "Coursera",
      date: "2023",
      icon: "🐍",
      description: "Advanced Python programming and data analytics"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Textbook Technologies",
      date: "2022",
      icon: "💻",
      description: "Comprehensive training in MERN stack development"
    },
  ];

  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Electronics and Telecommunication",
      institution: "Savitribai Phule Pune University",
      year: "2024",
      icon: "🎓"
    },
    {
      degree: "Diploma in Computer Science",
      field: "Electronics and Telecommunication",
      institution: "Mumbai State Board",
      year: "2021",
      icon: "🎓"
    }
  ];

  return (
    <section id="certifications" className="certifications" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Certifications & Education</h2>
          <p className="section-subtitle">
            Professional credentials and academic background
          </p>
        </motion.div>

        <div className="cert-content">
          <motion.div
            className="cert-section"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Certifications</h3>
            <div className="cert-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="cert-card"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="cert-icon">{cert.icon}</div>
                  <h4>{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                  <p className="cert-description">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="edu-section"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Education</h3>
            <div className="edu-grid">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="edu-card"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="edu-icon">{edu.icon}</div>
                  <h4>{edu.degree}</h4>
                  <p className="edu-field">{edu.field}</p>
                  <p className="edu-institution">{edu.institution}</p>
                  <p className="edu-year">{edu.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
