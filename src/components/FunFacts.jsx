import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './FunFacts.css';

const FunFacts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const facts = [
    {
      icon: "☕",
      title: "Coffee Enthusiast",
      description: "I code best with a fresh cup of coffee. My daily average? 4-5 cups!"
    },
    {
      icon: "🎮",
      title: "Gaming Geek",
      description: "When not coding, you'll find me exploring virtual worlds and solving puzzles in strategy games."
    },
    {
      icon: "📚",
      title: "Continuous Learner",
      description: "Always learning new technologies. Currently exploring AI/ML and cloud architecture."
    },
    {
      icon: "🎵",
      title: "Music Lover",
      description: "Lo-fi beats and instrumental music are my coding companions. They help me stay in the zone."
    },
    {
      icon: "🏃",
      title: "Fitness Advocate",
      description: "Believe in a healthy mind in a healthy body. Morning runs keep me energized for coding marathons."
    },
    {
      icon: "🌱",
      title: "Open Source Contributor",
      description: "Love giving back to the community. Contributing to open-source projects whenever possible."
    }
  ];

  const philosophy = {
    title: "My Work Philosophy",
    points: [
      "Code is poetry - write it beautifully",
      "User experience comes first, always",
      "Agile is not just a methodology, it's a mindset",
      "Continuous improvement over perfection",
      "Collaboration breeds innovation"
    ]
  };

  return (
    <section id="fun-facts" className="fun-facts" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Beyond the Code</h2>
          <p className="section-subtitle">
            A glimpse into who I am outside of work
          </p>
        </motion.div>

        <div className="facts-grid">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              className="fact-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="fact-icon">{fact.icon}</div>
              <h3>{fact.title}</h3>
              <p>{fact.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="philosophy-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3>{philosophy.title}</h3>
          <div className="philosophy-points">
            {philosophy.points.map((point, index) => (
              <motion.div
                key={index}
                className="philosophy-point"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
              >
                <span className="point-bullet">💡</span>
                <span>{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FunFacts;
