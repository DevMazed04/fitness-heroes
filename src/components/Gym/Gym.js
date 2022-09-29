import React, { useEffect, useState } from "react";
import Exercise from "../Exercise/Exercise";
import ExerciseDetails from "../ExerciseDetails/ExerciseDetails";
import Toast from "../Toast/Toast";
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
    //console.log(exercise);
    const newExerciseDetails = [...exerciseDetails, exercise];
    setExerciseDetails(newExerciseDetails);
  }

  return (
    <section className="gym-container">
      <div className="exercises-container">
        <h4 className="mb-4 text-center text-sm-start">Best exercises for health and fitness</h4>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5 card-container">
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

        <div className="mt-5">
          <h5>Add A Break </h5>
          <div className="bg-light rounded-3 mt-4 py-3 ps-2 ps-sm-3">
            <button className="btn btn-sm btn-outline-primary rounded-3 mx-2 mx-sm-3"> <b><span>10</span>s</b></button>
            <button className="btn btn-sm btn-outline-primary rounded-3 mx-2 mx-sm-3"> <b><span>20</span>s</b></button>
            <button className="btn btn-sm btn-outline-primary rounded-3 mx-2 mx-sm-3"> <b><span>30</span>s</b></button>
            <button className="btn btn-sm btn-outline-primary rounded-3 mx-2 mx-sm-3"> <b><span>40</span>s</b></button>
          </div>
        </div>

        <ExerciseDetails exerciseDetails={exerciseDetails}></ExerciseDetails>
      </div>
    </section>
  );
};

export default Gym;
