import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Services.css';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: "🎯",
      title: "Agile Project Management",
      description: "Certified Scrum Master services including sprint planning, backlog management, and team facilitation for successful project delivery.",
      features: ["Sprint Planning", "Daily Standups", "Retrospectives", "Stakeholder Management"]
    },
    {
      icon: "💼",
      title: "Custom ERP/CRM Development",
      description: "Tailored business management solutions designed to streamline operations and improve efficiency across your organization.",
      features: ["Custom Workflows", "Data Integration", "Process Automation", "Reporting Dashboards"]
    },
    {
      icon: "🛒",
      title: "E-commerce Solutions",
      description: "Full-featured online stores with payment integration, inventory management, and customer analytics.",
      features: ["Payment Gateway", "Product Management", "Order Tracking", "Analytics"]
    },
    {
      icon: "🤖",
      title: "AI-Driven Applications",
      description: "Intelligent business applications leveraging AI/ML for automation, predictions, and enhanced decision-making.",
      features: ["Machine Learning", "Data Analytics", "Automation", "Predictive Models"]
    },
    {
      icon: "🌐",
      title: "Full Stack Web Development",
      description: "Modern, responsive web applications built with React, Node.js, and cutting-edge technologies.",
      features: ["React Development", "REST APIs", "Database Design", "Cloud Deployment"]
    },
    {
      icon: "📊",
      title: "Business Process Optimization",
      description: "Data-driven analysis and implementation of improved workflows to enhance operational efficiency.",
      features: ["Process Analysis", "Workflow Design", "KPI Tracking", "Continuous Improvement"]
    }
  ];

  return (
    <section id="services" className="services" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Services Offered</h2>
          <p className="section-subtitle">
            Comprehensive solutions to drive your business forward
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <span className="feature-bullet">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
