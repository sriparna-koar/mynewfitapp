import React, { useState, useEffect } from 'react';

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

  const checkNotificationTime = (notificationTime) => {
    const now = new Date();
    const timeDifference = new Date(notificationTime) - now;
    return timeDifference <= 0;
  };

  useEffect(() => {
    const updateNotifications = () => {
      const updatedNotifications = notifications.map((notification) => {
        return {
          ...notification,
          isApproaching: checkNotificationTime(notification.notificationTime),
        };
      });
      setNotifications(updatedNotifications);
    };

    const timer = setInterval(() => {
      updateNotifications();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [notifications]);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Exercise Name"
          value={exerciseName}
          onChange={handleExerciseNameChange}
        />
        <input
          type="datetime-local"
          value={notificationTime}
          onChange={handleNotificationTimeChange}
        />
        <input
          type="text"
          placeholder="Notification Message"
          value={message}
          onChange={handleMessageChange}
        />
        <button onClick={handleSetNotification}>Set Notification</button>
      </div>

      <div>
        <h2>Notifications</h2>
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>
              {notification.exerciseName} - {notification.notificationTime.toString()}{' '}
              {notification.isApproaching ? '(Approaching)' : ''}
              <br />
              {notification.message && `Message: ${notification.message}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotificationBar;
