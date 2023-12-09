import React from 'react';

const ExerciseDemo = ({ exerciseName, videoURL }) => {
  return (
    <div className="exercise-demo">
      <h3>{exerciseName}</h3>
      <div className="video-container">
        <iframe
          title={exerciseName}
          width="560"
          height="315"
          src={videoURL}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ExerciseDemo;
