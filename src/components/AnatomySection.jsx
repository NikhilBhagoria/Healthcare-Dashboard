import React from 'react';
import HealthStatusCards from './HealthStatusCards';
import { healthStatus } from '../data/healthData';

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-container">
        <div className="anatomy-image-container">
          <img 
            src="https://via.placeholder.com/300x500/FFA07A/FFFFFF?text=Human+Body" 
            alt="Human Anatomy" 
            className="anatomy-image"
          />
          <div className="anatomy-indicator healthy-heart">
            <div className="indicator-badge">
              <span className="indicator-icon">❤️</span>
              <span className="indicator-text">Healthy Heart</span>
            </div>
          </div>
          <div className="anatomy-leg-indicator">
            <span className="leg-text">🦵 Healthy Leg</span>
          </div>
        </div>
        
        <HealthStatusCards healthData={healthStatus.slice(1)} />
      </div>
      
      <div className="details-link">
        <span>Details</span>
        <span className="arrow">→</span>
      </div>
    </div>
  );
};

export default AnatomySection;