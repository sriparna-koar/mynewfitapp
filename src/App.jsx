import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExerciseSchedule from './components/ExerciseSchedule';
import CalorieTracker from './components/CalorieTracker';
import NotificationBar from './components/NotificationBar';
import AddNotes from './components/AddNotes';
import NavigationBar from './components/NavigationBar';
import ExerciseDetail from './components/ExerciseDetail';
import HomePage from './components/HomePage';

import './App.css';

const App = () => {
  const [events, setEvents] = useState([
    {
      title: 'Running',
      start: new Date(2023, 10, 20, 8, 0, 0),
      end: new Date(2023, 10, 20, 9, 0, 0),
    },
    {
      title: 'Workout',
      start: new Date(2023, 10, 22, 16, 0, 0),
      end: new Date(2023, 10, 22, 18, 0, 0),
    },
  ]);
  const [notification, setNotification] = useState(null);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('Enter event title:');
    if (title) {
      const newEvent = {
        title,
        start,
        end,
      };
      setEvents([...events, newEvent]);
      setNotificationMessage(`Event "${title}" added`);
      setNotificationOpen(true);

      setTimeout(() => {
        setNotificationOpen(false);
      }, 3000); // Adjust the timeout as needed
    }
  };

  const handleDelete = (eventId) => {
    const updatedEvents = events.filter((event) => event !== eventId);
    setEvents(updatedEvents);
    
  };

  const handleNotificationClose = () => {
    setNotificationOpen(false);
  };

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addnotes" element={<AddNotes />} />
          <Route path="/calorie" element={<CalorieTracker />} />
          <Route path="/exercisedetail" element={<ExerciseDetail />} />
          <Route
            path="/exerciseschedule"
            element={
              <ExerciseSchedule
                events={events}
                handleSelect={handleSelect}
                handleDelete={handleDelete}

              />
            }
          />
          <Route
            path="/notification"
            element={
              <NotificationBar
              setNotification={setNotification}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
