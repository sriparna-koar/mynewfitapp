

import React, { useState, useEffect } from 'react';
import './NotificationBar.css';

const NotificationBar = ({ setNotification }) => {
  const [exerciseName, setExerciseName] = useState('');
  const [notificationTime, setNotificationTime] = useState('');
  const [message, setMessage] = useState('');
  const [notifications, setNotifications] = useState([]);

  const handleExerciseNameChange = (event) => {
    setExerciseName(event.target.value);
  };

  const handleNotificationTimeChange = (event) => {
    setNotificationTime(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSetNotification = () => {
    const notificationData = {
      exerciseName,
      notificationTime: new Date(notificationTime),
      message,
    };

    setNotification(notificationData);
    setNotifications([...notifications, notificationData]);
    setExerciseName('');
    setNotificationTime('');
    setMessage('');
  };


  return (
    <div className="container">
      <div className="notification-form">
        <input
          type="text"
          placeholder="Exercise Name"
          value={exerciseName}
          onChange={handleExerciseNameChange}
          className="input-style"
        />
        <input
          type="datetime-local"
          value={notificationTime}
          onChange={handleNotificationTimeChange}
          className="input-style"
        />
        <input
          type="text"
          placeholder="Notification Message"
          value={message}
          onChange={handleMessageChange}
          className="input-style"
        />
        <button onClick={handleSetNotification} className="button-style">
          Set Notification
        </button>
      </div>

      <div className="notification-list" >
        <h2>Notifications</h2>
        <ul>
          {notifications.map((notification) => (
            <li>
              <span className="notification-name">{notification.exerciseName}</span>
              <span className="notification-time">{new Date(notification.notificationTime).toLocaleString()}</span>
              {notification.message && <span className="notification-message">Message: {notification.message}</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotificationBar;
