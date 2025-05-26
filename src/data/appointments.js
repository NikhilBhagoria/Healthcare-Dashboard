export const calendarData = {
    month: 'October 2021',
    days: [
      { date: 25, day: 'Mon', times: ['10:00', '11:00', '12:00'] },
      { date: 26, day: 'Tues', times: ['08:00', '09:00', '10:00', '13:00'] },
      { date: 27, day: 'Wed', times: ['12:00', '13:00'] },
      { date: 28, day: 'Thurs', times: ['10:00', '11:00'] },
      { date: 29, day: 'Fri', times: ['14:00', '16:00', '15:00'] },
      { date: 30, day: 'Sat', times: ['12:00', '14:00'] },
      { date: 31, day: 'Sun', times: ['09:00', '16:00', '11:00'] }
    ]
  };
  
  export const todayAppointments = [
    {
      id: 1,
      title: 'Dentist',
      time: '09:00-11:00',
      doctor: 'Dr. Cameron Williamson',
      type: 'dentist',
      color: '#4F46E5'
    },
    {
      id: 2,
      title: 'Physiotherapy Appointment',
      time: '11:00-12:00',
      doctor: 'Dr. Kevin Djones',
      type: 'physiotherapy',
      color: '#E5E7EB'
    }
  ];
  
  export const upcomingSchedule = [
    {
      day: 'On Thursday',
      appointments: [
        {
          id: 1,
          title: 'Health checkup complete',
          time: '11:00 AM',
          icon: '🏥',
          color: '#E5E7EB'
        },
        {
          id: 2,
          title: 'Ophthalmologist',
          time: '14:00 PM',
          icon: '👁️',
          color: '#E5E7EB'
        }
      ]
    },
    {
      day: 'On Saturday',
      appointments: [
        {
          id: 3,
          title: 'Cardiologist',
          time: '12:00 AM',
          icon: '❤️',
          color: '#E5E7EB'
        },
        {
          id: 4,
          title: 'Neurologist',
          time: '16:00 PM',
          icon: '🧠',
          color: '#E5E7EB'
        }
      ]
    }
  ];
  
  export const activityData = {
    weeklyAppointments: 3,
    chartData: [
      { day: 'Mon', value: 30 },
      { day: 'Tues', value: 80 },
      { day: 'Wed', value: 45 },
      { day: 'Thurs', value: 60 },
      { day: 'Fri', value: 90 },
      { day: 'Sat', value: 70 },
      { day: 'Sun', value: 40 }
    ]
  };