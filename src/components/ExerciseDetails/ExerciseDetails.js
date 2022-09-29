import React from 'react';

const ExerciseDetails = ({ exerciseDetails }) => {
   console.log(exerciseDetails);
   let time = 0;
   for (const exercise of exerciseDetails) {
      time = time + exercise.time;
   }

   return (
      <div>
         <p>selected: {exerciseDetails.length}</p>
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
                  <p className="text-secondary"><span>15</span> seconds</p>
               </div>
            </div>

            <button className="btn btn-primary bg-gradient rounded-3 w-100 mt-5 mb-2">Exercise Completed</button>
         </div>

      </div>
   );
};

export default ExerciseDetails;