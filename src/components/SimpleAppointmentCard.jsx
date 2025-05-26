import React from 'react';

const SimpleAppointmentCard = ({ appointment }) => {
  return (
    <div className="simple-appointment-card">
      <div className="appointment-icon">{appointment.icon}</div>
      <div className="appointment-details">
        <h5>{appointment.title}</h5>
        <p>{appointment.time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;