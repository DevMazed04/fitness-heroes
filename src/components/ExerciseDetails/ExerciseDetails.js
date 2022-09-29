import React, { useEffect, useState } from 'react';
import Toast from '../Toast/Toast';

const ExerciseDetails = ({ exerciseDetails }) => {
   let time = 0;
   for (const exercise of exerciseDetails) {
      time = time + exercise.time;
   }

   const breaktimes = [15, 30, 45, 60];
   const [breaktime, setBreaktime] = useState(0);

   useEffect(() => {
      const getBreaktime = localStorage.getItem('breaktime');
      if (getBreaktime) {
         setBreaktime(getBreaktime);
      }
   }, [])

   const showBreaktime = (breaktime) => {
      setBreaktime(breaktime);
      localStorage.setItem('breaktime', breaktime);
      console.log(breaktime);
   }

   return (
      <div>
         <div className="mt-5">
            <h5>Add A Break </h5>

            {
               breaktimes.map(breaktime =>
                  <button
                     className="btn btn-sm btn-outline-primary rounded-3 mx-2 mx-sm-3"
                     onClick={() => showBreaktime(breaktime)}> <b><span>{breaktime}</span>s</b>
                  </button>)
            }
         </div>


         <div className="mt-5">
            <h5>Exercise Details</h5>

            <div className="bg-light rounded-3 mt-4 px-3">
               <div className="d-flex justify-content-between pt-3">
                  <h6>Exercise Time</h6>
                  <p className="text-secondary"><span>{time}</span> seconds</p>
               </div>
            </div>

            <div className="bg-light rounded-3 mt-3 px-3">
               <div className="d-flex justify-content-between pt-3">
                  <h6>Break Time</h6>
                  <p className="text-secondary"><span>{breaktime}</span> seconds</p>
               </div>
            </div>
            <Toast></Toast>
         </div>
      </div >
   );
};

export default ExerciseDetails;