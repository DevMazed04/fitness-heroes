import React, { useEffect, useState } from "react";
import Exercise from "../Exercise/Exercise";
import ExerciseDetails from "../ExerciseDetails/ExerciseDetails";
import UserInfo from "../UserInfo/UserInfo";
import "./Gym.css";

const Gym = () => {
  const [exercises, setExercises] = useState([]);
  const [exerciseDetails, setExerciseDetails] = useState([])

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  const handleAddToList = (exercise) => {
    const newExerciseDetails = [...exerciseDetails, exercise];
    setExerciseDetails(newExerciseDetails);
  }

  return (
    <section className="gym-container">
      <div className="exercises-container">
        <h4 className="mb-4 text-center text-sm-start px-3 px-sm-0">Best exercises for health and fitness</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mb-5 card-container">
          {exercises.map((exercise) => (
            <Exercise
              key={exercise.id}
              exercise={exercise}
              handleAddToList={handleAddToList}
            ></Exercise>
          ))}
        </div>
      </div>

      <div className="exercise-details-container bg-white p-4 rounded-3">
        <UserInfo></UserInfo>

        <ExerciseDetails
          exerciseDetails={exerciseDetails}>
        </ExerciseDetails>
      </div>
    </section>
  );
};

export default Gym;
