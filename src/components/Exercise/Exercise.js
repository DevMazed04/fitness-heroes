import React from 'react';

const Exercise = (props) => {
   const { img, title, body, time } = props.exercise

   return (
      <div className="col">
         <div className="card rounded-3 border-0">
            <div className='p-3 pb-0'>
               <img src={img} className="card-img-top rounded-3" alt="exercise-img" width="100px" height="120px" />
            </div>
            <div className="card-body">
               <h5 className="card-title">{title}</h5>
               <p className="card-text text-secondary">{body}</p>
               <p className="card-text">Time Required: <b>{time}s</b></p>
               <button className="btn btn-primary bg-gradient rounded-3 w-100">Start Now</button>
            </div>
         </div>
      </div>
   );
};


export default Exercise;

/* {
   <div classNameName='exercise'>
      <img src={img} alt="exercise-img" width="200px" />
      <h4>{title}</h4>
      <p>{body}</p>
      <p>Time Required: <b>{time}s</b></p>
      <button>Add to List</button>
   </div>
} */