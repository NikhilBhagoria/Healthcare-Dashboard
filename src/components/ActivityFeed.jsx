import React from 'react';
import { activityData } from '../data/appointments';

const ActivityFeed = () => {
  const maxValue = Math.max(...activityData.chartData.map(d => d.value));
  
  return (
    <div className="activity-section">
      <h3>Activity</h3>
      <p className="activity-summary">
        {activityData.weeklyAppointments} appointments on this week
      </p>
      
      <div className="activity-chart">
        {activityData.chartData.map((data, index) => (
          <div key={data.day} className="chart-bar-container">
            <div 
              className="chart-bar"
              style={{ 
                height: `${(data.value / maxValue) * 100}px`,
                backgroundColor: index === 1 ? '#4F46E5' : '#00BCD4'
              }}
            ></div>
            <span className="chart-label">{data.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;