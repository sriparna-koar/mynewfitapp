
import React, { useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './ExerciseSchedule.css';

const ExerciseSchedule = ({ events, handleSelect, handleDelete, handleEventReminder }) => {
  const localizer = momentLocalizer(moment);

  useEffect(() => {
    const scheduleNotifications = () => {
      const now = Date.now();

      events.forEach((event) => {
        const timeUntilEvent = event.start.getTime() - now;

        if (timeUntilEvent > 0) {
          setTimeout(() => {
            new Notification('Upcoming Event', {
              body: `Your event "${event.title}" is starting soon!`,
            });
          }, timeUntilEvent);
        }
      });
    };

    scheduleNotifications();
  }, [events]);

  return (
    <div className="exercise-schedule">
      <h1>Fitness Tracker</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={handleSelect}
        onSelectEvent={handleEventReminder}
        style={{ height: 500 }}
        selectable
        resizable
        defaultView="week"
      />
      <h2>Workout Plans</h2>
      <ul>
        {events.map((event) => (
          <li key={event.start.toString()}>
            {event.title} - {moment(event.start).format('MMMM Do, LT')}
            <button onClick={() => handleDelete(event)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseSchedule;
