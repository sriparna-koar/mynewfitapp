
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './NotificationBar.css';

const NotificationBar = () => {
  const [notification, setNotification] = useState({
    text: '',
    timeout: 0,
    type: 'info',
  });

  const addNotification = () => {
    const { text, timeout, type } = notification;
    const options = {
      autoClose: timeout,
      type,
      onClose: () => console.log('Notification closed'),
    };

    const toastId = toast(text, options);

    if (timeout > 0) {
      setTimeout(() => {
        toast.dismiss(toastId);
      }, timeout);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNotification((prevNotification) => ({
      ...prevNotification,
      [name]: value,
    }));
  };

  return (
    <div className="notification-container">
      <input
        type="text"
        name="text"
        value={notification.text}
        onChange={handleInputChange}
        placeholder="Enter notification message"
      />
      <input
        type="number"
        name="timeout"
        value={notification.timeout}
        onChange={handleInputChange}
        placeholder="Enter notification duration in milliseconds"
      />
      <select
        name="type"
        value={notification.type}
        onChange={handleInputChange}
      >
        <option value="info">Info</option>
        <option value="success">Success</option>
        <option value="warning">Warning</option>
        <option value="error">Error</option>
      </select>
      <button onClick={addNotification}>
        Add Notification
      </button>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Notification Bar</h1>
      <NotificationBar />
    </div>
  );
};

export default App;
