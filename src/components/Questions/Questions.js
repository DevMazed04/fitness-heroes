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
                     What is the difference between var let and const in JavaScript?
                  </button>
               </h2>
               <div id="collapseOne" className="accordion-collapse collapse show rounded-3" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body text-secondary px-0 pe-3 px-lg-4 pb-3 lh-tab">
                     <small>
                        The 'var' is the oldest keyword to declare a variable in
                        JavaScript, where 'let' and 'const' are the latest ES6 keyword
                        in JavaScript to declare a variable. Variables declared with var
                        are in the function scope, where variables declared as let and
                        const are in the block scope. Hoisting that means define a
                        variable before its declaration is allowed in var. On the other
                        hand hoisting is not allowed both for let and const. Reassign a
                        value is allowed both for var and let, but const does not allow
                        reassign.
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
                     What is the difference between regular functions and arrow
                     functions in JavaScript?
                  </button>
               </h2>
               <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body text-secondary px-0 pe-3 px-lg-4 pb-3 lh-tab">
                     <small>
                        In regular function, 'this' changes according to the way that
                        function is invoked, where arrow functions don't have their own
                        'this', and they don't redefine the value of 'this' within the
                        function. In regular JavaScript functions, arguments keywords
                        can be used to access the passed arguments when the function is
                        invoked. But arrow functions do not have their own arguments and
                        it uses the arguments from the outer function. We can easily
                        construct objects with regular functions, We just need to invoke
                        the function with the new keyword. But arrow functions can not
                        be used as constructors.
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
                     Why we use template strings in JavaScript?
                  </button>
               </h2>
               <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body text-secondary px-0 pe-3 px-lg-4 pb-3 lh-tab">
                     <small>
                        Template strings are a powerful feature of modern JavaScript
                        released in ES6. It lets us insert/interpolate variables and
                        expressions into strings without needing to concatenate like in
                        older versions of JavaScript. It allows us to create strings
                        that are complex and contain dynamic elements. In normal
                        strings, we have to use an escape sequence \n to give a new line
                        for creating a multiline string. However, in template literals,
                        there is no need to use \n because string ends only when it gets
                        backtick(`) character. ES6 template literals support string
                        interpolation. Template literals can use the placeholders for
                        string substitution. To embed expressions with normal strings,
                        we have to use the ${ } syntax.
                     </small>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Questions;