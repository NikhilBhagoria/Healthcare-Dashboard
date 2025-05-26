import React from 'react';
import { calendarData, todayAppointments } from '../data/appointments';

const CalendarView = () => {
  return (
    <div className="calendar-section">
      <div className="calendar-header">
        <button className="calendar-nav">‹</button>
        <h3>{calendarData.month}</h3>
        <button className="calendar-nav">›</button>
      </div>
      
      <div className="calendar-grid">
        {calendarData.days.map((day) => (
          <div key={day.date} className="calendar-day">
            <div className="day-header">
              <span className="day-name">{day.day}</span>
              <span className="day-number">{day.date}</span>
            </div>
            <div className="day-times">
              {day.times.map((time, index) => (
                <div key={index} className="time-slot">
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="today-appointments">
        {todayAppointments.map((appointment) => (
          <div 
            key={appointment.id} 
            className="appointment-card"
            style={{ backgroundColor: appointment.color }}
          >
            <div className="appointment-info">
              <h4>{appointment.title}</h4>
              <p>{appointment.time}</p>
              <p>{appointment.doctor}</p>
            </div>
            <div className="appointment-icon">
              {appointment.type === 'dentist' ? '🦷' : '🏃‍♂️'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;