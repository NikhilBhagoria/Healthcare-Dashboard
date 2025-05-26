import React from 'react';

const HealthStatusCards = ({ healthData }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'attention': return '🫁';
      case 'good': return '🦷';
      case 'warning': return '🦴';
      default: return '•';
    }
  };

  return (
    <div className="health-status-cards">
      {healthData.map((item) => (
        <div key={item.id} className="health-card">
          <div className="health-card-header">
            <span className="health-icon">{getStatusIcon(item.status)}</span>
            <span className="health-label">{item.label}</span>
          </div>
          <div className="health-date">Date: {item.date}</div>
          <div className="health-progress">
            <div 
              className="progress-bar"
              style={{ 
                width: `${item.progress}%`,
                backgroundColor: item.color 
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;