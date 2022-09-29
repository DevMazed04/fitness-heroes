import React from 'react';
import './Questions.css'

const Questions = () => {
   return (
      <div className="accordian">
         <h2 className="fw-semibold text-black opacity-75 text-center px-4 mt-5 mb-3 mb-sm-3">
            Common React Questions
         </h2>

         <div className="accordion border border-0 w-accordian mx-auto mt-4 mt-sm-5 my-lg-4 px-4 px-sm-0 px-lg-5 w-75 rounded"
            id="accordionExample">
            <div className="accordion-item border border-0 mb-3">
               <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button bg-gradient text-dark opacity-75 fw-semibold px-4 py-4 rounded border"
                     type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                     aria-controls="collapseOne">
                     How does React work?
                  </button>
               </h2>
               <div id="collapseOne" className="accordion-collapse collapse show rounded-3" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body text-secondary px-0 pe-3 px-lg-4 pb-3 lh-tab">
                     <small>
                        <b>React</b> is a declarative, efficient, and flexible JavaScript library for building user interfaces. While building client-side apps, the DOM (Document Object MOdel) become slow. So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM.
                        Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it's worth keeping a DOM tree in it to speed up its manipulation.
                        Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js.
                     </small>
                  </div>
               </div>
            </div>

            <div className="accordion-item border border-0 mb-3">
               <h2 className="accordion-header" id="headingTwo">
                  <button
                     className="accordion-button collapsed bg-gradient text-dark opacity-75 fw-semibold px-4 py-4 border border-dark border-opacity-10 rounded"
                     type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                     aria-controls="collapseTwo">
                     What is the difference between state and props in React JS?
                  </button>
               </h2>
               <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body text-secondary px-0 pe-3 px-lg-4 pb-3 lh-tab">
                     <small>
                        <b>1)</b>  Props are read-only, where State changes can be asynchronous, <br />
                        <b>2)</b> Props are immutable but State is mutable, <br />
                        <b>3)</b> Props allow you to pass data from one component to other components as an argument, where State holds information about the components, <br />
                        <b>4)</b> Props can be accessed by the child component but State cannot be accessed by child components, <br />
                        <b>5)</b> Props are used to communicate between components, where States can be used for rendering dynamic changes with the component.
                     </small>
                  </div>
               </div>
            </div>

            <div className="accordion-item border border-0 mb-5">
               <h2 className="accordion-header" id="headingThree">
                  <button
                     className="accordion-button collapsed bg-gradient text-dark opacity-75 fw-semibold px-4 py-4 border border-dark border-opacity-10 rounded"
                     type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                     aria-controls="collapseThree">
                     What are the other uses of useState Hook in React JS except loading api data?
                  </button>
               </h2>
               <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body text-secondary px-0 pe-3 px-lg-4 pb-3 lh-tab">
                     <small>
                        <b>1)</b> The useEffect hook allows us to handle side effects such as logging, making asynchronous calls, or setting values on local storage, <br />
                        <b>2)</b> Running once on mount: fetch API data, <br />
                        <b>3)</b> Running on state change: validating input field, live filtering, trigger animation on new array value, <br />
                        <b>4)</b> Running on props change: update paragraph list on fetched API data update,  updating fetched API data to get BTC updated price
                        <b>5)</b>
                     </small>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Questions;