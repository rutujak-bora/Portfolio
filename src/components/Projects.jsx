import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import './Projects.css';

const Projects = ({ onProjectClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "AI Inventory Management System",
      description: "A comprehensive inventory management tool with AI-driven demand forecasting for businesses to track stock, manage products, and generate detailed reports.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200",
      technologies: ["React", "Node.js", "MongoDB", "Express", "AI/ML"],
      features: [
        "Real-time inventory tracking",
        "AI-powered demand forecasting",
        "Stock alerts and notifications",
        "Multi-user management system",
        "Detailed analytics and reports",
        "Automated reorder suggestions"
      ],
      category: "ERP System"
    },
    {
      id: 2,
      title: "Custom CRM System",
      description: "A CRM platform designed for small to medium businesses to manage customer interactions, sales tracking, and marketing campaigns with comprehensive analytics.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
      technologies: ["Angular", "Node.js", "MySQL", "REST APIs"],
      features: [
        "Customer profile management",
        "Sales pipeline tracking",
        "Marketing campaign management",
        "Analytics dashboard",
        "Email integration",
        "Task and activity tracking"
      ],
      category: "CRM System"
    },
    {
      id: 3,
      title: "VS Fashion E-commerce",
      description: "A fully functional B2C e-commerce platform for a fashion brand, supporting product browsing, secure checkout, and comprehensive order management.",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1200",
      technologies: ["React", "Redux", "Node.js", "MongoDB", "Stripe API"],
      features: [
        "Dynamic product catalog",
        "User authentication & profiles",
        "Shopping cart system",
        "Secure payment integration",
        "Order tracking",
        "Admin dashboard"
      ],
      category: "E-commerce"
    },
    {
      id: 4,
      title: "Pandit Ji Booking Platform",
      description: "A niche booking website allowing users to schedule online appointments with Hindu priests for various religious ceremonies with calendar synchronization.",
      image: "https://images.pexels.com/photos/8636625/pexels-photo-8636625.jpeg?auto=compress&cs=tinysrgb&w=1200",
      technologies: ["PHP", "Laravel", "MySQL", "Google Calendar API"],
      features: [
        "Online booking system",
        "Calendar synchronization",
        "Service selection interface",
        "User profile management",
        "Payment processing",
        "Automated reminders"
      ],
      category: "Booking System"
    },
    {
      id: 5,
      title: "B2B Business Consultant Website",
      description: "A professional B2B website offering business consulting services with integrated booking system, service portfolio, and client testimonials.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
      technologies: ["WordPress", "Elementor", "WooCommerce", "PHP"],
      features: [
        "Service portfolio showcase",
        "Online consultation booking",
        "Payment integration",
        "Client testimonials",
        "Blog and resources",
        "Contact management"
      ],
      category: "Business Website"
    }
  ];

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Showcasing innovative solutions across ERP, CRM, e-commerce, and business platforms
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              onClick={() => onProjectClick(project)}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <motion.button
                    className="view-details-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} />
                    View Details
                  </motion.button>
                </div>
                <div className="project-category">{project.category}</div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-features-preview">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
