import React from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-header">
          <img src={project.image} alt={project.title} className="modal-image" />
          <div className="modal-header-content">
            <span className="modal-category">{project.category}</span>
            <h2 className="modal-title">{project.title}</h2>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h3>Project Overview</h3>
            <p>{project.description}</p>
          </div>

          <div className="modal-section">
            <h3>Technologies Used</h3>
            <div className="modal-tech">
              {project.technologies.map((tech, i) => (
                <span key={i} className="modal-tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="modal-section">
            <h3>Key Features</h3>
            <div className="modal-features">
              {project.features.map((feature, i) => (
                <div key={i} className="modal-feature-item">
                  <CheckCircle size={20} className="feature-icon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="modal-section">
            <h3>Project Impact</h3>
            <p>
              This project demonstrates expertise in {project.technologies.join(', ')} and 
              showcases the ability to deliver production-ready solutions that meet real-world 
              business requirements. The implementation follows industry best practices and 
              modern development standards.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
