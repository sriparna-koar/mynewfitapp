
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './AddNotes.css'; 

const AddNotes = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [exerciseType, setExerciseType] = useState('');
  const [workoutDetails, setWorkoutDetails] = useState('');
  const [notes, setNotes] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddNote = () => {
    if (selectedDate && exerciseType && workoutDetails) {
      const newNote = {
        id: Date.now(),
        date: selectedDate,
        exerciseType,
        workoutDetails,
      };

      setNotes([...notes, newNote]);
      setSelectedDate(new Date());
      setExerciseType('');
      setWorkoutDetails('');
    }
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="add-notes-container">
      <h2>Add Workout Notes</h2>
      <div>
        <label>Date: </label>
        <DatePicker selected={selectedDate} onChange={handleDateChange} />
      </div>
      <div>
        <label>Exercise Type: </label>
        <input
          type="text"
          value={exerciseType}
          onChange={(e) => setExerciseType(e.target.value)}
          placeholder="Enter exercise type"
        />
      </div>
      <div>
        <label>Workout Details: </label>
        <ReactQuill
          theme="snow"
          value={workoutDetails}
          onChange={setWorkoutDetails}
          placeholder="Enter workout details"
          style={{ color: 'white', fontSize: '17px' }}
          
        />
      </div>
      <button onClick={handleAddNote}>Add Workout Note</button>

      <div>
        <h3>Added Workout Notes:</h3>
        <TransitionGroup className="note-list">
          {notes.map((note, index) => (
            <CSSTransition key={index} timeout={500} classNames="note-item">
              <div className="note-item">
                <strong>Date:</strong> {note.date.toLocaleDateString()} |{' '}
                <strong>Exercise Type:</strong> {note.exerciseType} |{' '}
                <strong>Workout Details:</strong> {note.workoutDetails}
                <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default AddNotes;
