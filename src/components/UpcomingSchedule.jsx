import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import { upcomingSchedule } from '../data/appointments';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      
      {upcomingSchedule.map((daySchedule, index) => (
        <div key={index} className="day-schedule">
          <h4 className="day-title">{daySchedule.day}</h4>
          <div className="appointments-grid">
            {daySchedule.appointments.map((appointment) => (
              <SimpleAppointmentCard 
                key={appointment.id}
                appointment={appointment}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;