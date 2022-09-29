import React, { useEffect, useState } from "react";
import Exercise from "../Exercise/Exercise";
import UserInfo from "../UserInfo/UserInfo";
import "./Gym.css";


const Gym = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  return (
    <section className="gym-container">
      <div className="exercises-container">
        <h4 className="mb-4">Best exercises for health and fitness</h4>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5 card-container">
          {exercises.map((exercise) => (
            <Exercise key={exercise.id} exercise={exercise}></Exercise>
          ))}
        </div>
      </div>

      <div className="exercise-details-container bg-white p-4 rounded-3">
        <UserInfo></UserInfo>
      </div>
    </section>
  );
};

export default Gym;
