import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Website & Software Developer",
      company: "Freelancer",
      location: "Pune, India",
      period: "freelancing",
      description: [
        "Developing custom web applications, ERP/CRM systems, and e-commerce platforms for diverse clients",
        "Building AI-driven business solutions using modern technologies like React, Node.js, and Python",
        "Managing full project lifecycle from requirements gathering to deployment and maintenance",
        "Implementing responsive designs and ensuring optimal user experience across all devices"
      ]
    },
    {
      title: "Scrum Master & Product Operations Analyst",
      company: "Bora Multicorp",
      location: "Pune, India",
      period: "Aug 2024 - Present",
      description: [
        "Facilitated Scrum ceremonies including daily stand-ups, sprint planning, reviews, and retrospectives",
        "Coordinated cross-functional teams and managed sprint backlogs using Jira and Confluence",
        "Led ERP implementation projects and business process improvement initiatives",
        "Conducted data analysis and created comprehensive reports for stakeholder decision-making",
        "Achieved 95% sprint completion rate through effective Agile practices"
      ]
    },
    {
      title: "Data Analyst Intern",
      company: "64 Squares LLP",
      location: "Pune, India",
      period: "Jan 2024 - Aug 2024",
      description: [
        "Performed data cleaning, transformation, and analysis using Python and SQL",
        "Created interactive dashboards and visualizations for business insights",
        "Collaborated with senior analysts on client projects and deliverables",
        "Developed automated reporting solutions to improve efficiency"
      ]
    }
  ];

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey and work experience
          </p>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="experience-marker">
                <Briefcase size={20} />
              </div>

              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3>{exp.title}</h3>
                    <p className="company">{exp.company}</p>
                  </div>
                  <div className="experience-meta">
                    <span className="period">
                      <Calendar size={16} />
                      {exp.period}
                    </span>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>

                <ul className="experience-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
