import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Gym.css'

const Gym = () => {
   const [exercises, setExercises] = useState([]);

   useEffect(() => {
      fetch('data.json')
         .then(res => res.json())
         .then(data => setExercises(data))
   }, [])

   return (
      <div className='gym-container'>
         <div className='exercises-container'>
            <h4>Exercises: {exercises.length}</h4>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 w-75">
               {
                  exercises.map(exercise => <Exercise
                     key={exercise.id}
                     exercise={exercise}>
                  </Exercise>)
               }
            </div>
         </div>
         <div className='exercise-details-container'>
            <h4>Exercise Details</h4>
         </div>
      </div>
   );
};

export default Gym;