
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './ExerciseSchedule.css';

const ExerciseSchedule = ({ events, handleSelect, handleDelete, handleEventReminder }) => {
  const localizer = momentLocalizer(moment);

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
