import React from 'react';

const Exercise = ({ exercise, handleAddToList }) => {
   const { img, title, body, time } = exercise;

   return (
      <div className="col">
         <div className="card rounded-3 border-0">
            <div className='p-3 pb-0'>
               <img src={img} className="card-img-top rounded-3" alt="exercise-img" width="100px" height="120px" />
            </div>
            <div className="card-body">
               <h5 className="card-title">{title}</h5>
               <p className="card-text text-secondary">{body.length > 37
                  ? body.slice(0, 37) + "..."
                  : body}</p>
               <p className="card-text">Time Required: <b>{time}s</b></p>
               <button className="btn btn-primary bg-gradient rounded-3 w-100" onClick={() => handleAddToList(exercise)}>Add To List</button>
            </div>
         </div>
      </div>
   );
};

export default Exercise;
