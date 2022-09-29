import React, { useState } from 'react';
import { addToLS } from "../../utilities/fakeDb";

const ExerciseDetails = ({ exerciseDetails }) => {
   let time = 0;
   for (const exercise of exerciseDetails) {
      time = time + exercise.time;
   }

   const breaktimes = [15, 30, 45, 60];
   const [breaktime, setBreaktime] = useState(0);

   const showBreaktime = (breaktime) => {
      setBreaktime(breaktime);
      localStorage.setItem('breaktime', breaktime)
      console.log(breaktime);
   }

   return (
      <div>
         {/* <p>selected: {exerciseDetails.length}</p> */}
         <div className="mt-5">
            <h5>Add A Break </h5>
            {/*  <div className="bg-light rounded-3 mt-4 py-3 ps-2 ps-sm-3">
               <button className="btn btn-sm btn-outline-primary rounded-3 mx-2 mx-sm-3" onClick={() => addToLS('breakTime', 15)}> <b><span>15</span>s</b></button>

               <button className="btn btn-sm btn-outline-primary rounded-3 mx-2 mx-sm-3" onClick={() => addToLS('breakTime', 30)}> <b><span>30</span>s</b></button>
               <button className="btn btn-sm btn-outline-primary rounded-3 mx-2 mx-sm-3" onClick={() => addToLS('breakTime', 45)}> <b><span>45</span>s</b></button>
               <button className="btn btn-sm btn-outline-primary rounded-3 mx-2 mx-sm-3" onClick={() => addToLS('breakTime', 60)}> <b><span>60</span>s</b></button>

            </div> */}

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

            <button className="btn btn-primary bg-gradient rounded-3 w-100 mt-5 mb-2">Exercise Completed</button>
         </div>
      </div >
   );
};

export default ExerciseDetails;