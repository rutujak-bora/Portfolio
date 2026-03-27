import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './CaseStudies.css';

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCase, setSelectedCase] = useState(null);

  const caseStudies = [
    {
      title: "AI-Powered CRM System",
      client: "Tech Startup",
      category: "CRM Development",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      problem: "Client needed a custom CRM to manage leads with AI-powered insights and automation.",
      solution: "Developed a full-stack CRM with React frontend, Node.js backend, and integrated ML models for lead scoring and prediction.",
      results: [
        "40% increase in lead conversion",
        "60% reduction in manual data entry",
        "Real-time analytics dashboard",
        "Automated follow-up system"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Python", "TensorFlow"],
      duration: "3 months"
    },
    {
      title: "E-commerce Platform Redesign",
      client: "Retail Business",
      category: "E-commerce",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      problem: "Outdated e-commerce platform with poor user experience and low conversion rates.",
      solution: "Complete platform overhaul with modern UI/UX, payment integration, and inventory management system.",
      results: [
        "150% increase in online sales",
        "45% improvement in page load time",
        "Mobile-responsive design",
        "Integrated payment gateway"
      ],
      technologies: ["React", "Express.js", "MySQL", "Stripe API"],
      duration: "4 months"
    },
    {
      title: "ERP System Implementation",
      client: "Manufacturing Company",
      category: "ERP",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      problem: "Disconnected systems causing inefficiencies in production planning and inventory management.",
      solution: "Custom ERP solution integrating production, inventory, HR, and finance modules with real-time reporting.",
      results: [
        "35% reduction in operational costs",
        "Real-time inventory tracking",
        "Automated reporting system",
        "Improved cross-department communication"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
      duration: "6 months"
    }
  ];

  return (
    <section id="case-studies" className="case-studies" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle">
            Real-world projects and their impact
          </p>
        </motion.div>

        <div className="cases-grid">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="case-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedCase(study)}
            >
              <div className="case-image">
                <img src={study.image} alt={study.title} />
                <div className="case-category">{study.category}</div>
              </div>
              <div className="case-content">
                <h3>{study.title}</h3>
                <p className="case-client">Client: {study.client}</p>
                <p className="case-preview">{study.problem}</p>
                <button className="case-btn">View Case Study →</button>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedCase && (
          <motion.div
            className="case-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              className="case-modal-content"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setSelectedCase(null)}>×</button>
              
              <div className="modal-image">
                <img src={selectedCase.image} alt={selectedCase.title} />
              </div>

              <div className="modal-body">
                <h2>{selectedCase.title}</h2>
                <div className="modal-meta">
                  <span className="modal-client">🏢 {selectedCase.client}</span>
                  <span className="modal-duration">⏱️ {selectedCase.duration}</span>
                </div>

                <div className="modal-section">
                  <h3>🎯 Problem</h3>
                  <p>{selectedCase.problem}</p>
                </div>

                <div className="modal-section">
                  <h3>💡 Solution</h3>
                  <p>{selectedCase.solution}</p>
                </div>

                <div className="modal-section">
                  <h3>📊 Results</h3>
                  <ul className="results-list">
                    {selectedCase.results.map((result, i) => (
                      <li key={i}>✓ {result}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h3>🛠️ Technologies Used</h3>
                  <div className="tech-tags">
                    {selectedCase.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CaseStudies;
