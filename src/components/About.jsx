import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know more about who I am and what I do
          </p>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="about-full">
            <div className="about-text">
              <p>
                I'm a <strong>Certified Scrum Master</strong> and <strong>Freelance Web & Software Developer</strong> 
                based in Pune, India, with a passion for creating innovative digital solutions that drive business success.
              </p>
              
              <p>
                With over 3 years of experience in Agile project coordination, ERP implementation, and full-stack development, 
                I specialize in building AI-driven business applications, custom CRM/ERP systems, and e-commerce platforms.
              </p>

              <p>
                My expertise spans across React, Node.js, Python, MongoDB, and various modern web technologies. 
                I excel at facilitating Scrum ceremonies, sprint planning, and cross-functional team coordination while 
                delivering high-quality products using Agile methodology.
              </p>

              <p>
                My background in data analytics and business process improvement allows me to create solutions 
                that are both technically sound and business-focused.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <h3>5+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-card">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-card">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
