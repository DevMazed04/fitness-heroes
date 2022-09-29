import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import myImg from '../../images/devMazed.png'
import './Gym.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons'

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
            <h4 className='mb-4'>Best exercises for health and fitness</h4>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5 card-container">
               {
                  exercises.map(exercise => <Exercise
                     key={exercise.id}
                     exercise={exercise}>
                  </Exercise>)
               }
            </div>
         </div>
         <div className='exercise-details-container bg-white p-4'>
            <div className='d-flex align-items-center gap-3'>
               <div>
                  <img className='rounded-pill mb-2' src={myImg} alt="devmazed-img" width="50px" />
               </div>
               <div className=''>
                  <h4 className='mb-1'>Md. Mazedul Islam</h4>
                  <div className='d-flex gap-2'>
                     <p className='opacity-75'> <FontAwesomeIcon icon={faChalkboardUser}></FontAwesomeIcon></p>
                     <small className='text-secondary'>Web Developer</small>
                  </div>
               </div>
               
            </div>
         </div>
      </div>
   );
};

export default Gym;