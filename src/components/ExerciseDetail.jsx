import React, { useState } from 'react';
import ExerciseDemo from './ExerciseDemo';
import './ExerciseDetail.css';

const ExerciseDetail = () => {
  
  const initialExerciseDetails = [
    {
      name: 'Squats',
      videoURL: 'https://www.youtube.com/watch?v=actual_squats_video_id',
      description: 'Perform squats to strengthen your legs and glutes.',
    
    },
    {
      name: 'Push-ups',
      videoURL: 'https://www.youtube.com/embed/example_pushups',
      description: 'Do push-ups to strengthen your chest, arms, and core.',
    
    },
    {
      name: 'Plank',
      videoURL: 'https://www.youtube.com/embed/example_plank',
      description: 'Hold a plank to work on your core strength and stability.',
    
    },
    {
      name: 'Lunges',
      videoURL: 'https://www.youtube.com/embed/example_lunges',
      description: 'Perform lunges to target your legs and glutes.',
    
    },
  
  ];

  const [exerciseDetails, setExerciseDetails] = useState(initialExerciseDetails);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredExercises = exerciseDetails.filter((exercise) =>
    exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="exercise-detail">
      <input
        type="text"
        placeholder="Search exercise by name"
        value={searchTerm}
        onChange={handleSearch}
      />
      {filteredExercises.map((exercise, index) => (
        <div key={index}>
          <h2>{exercise.name}</h2>
          <p>{exercise.description}</p>
          <ExerciseDemo
            exerciseName={exercise.name}
            videoURL={exercise.videoURL}
          />
        </div>
      ))}
    </div>
  );
};

export default ExerciseDetail;
