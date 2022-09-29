import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
   const showToast = () =>
      toast.success('Congratulations! You are done with your activity..', {
         position: "top-center",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
      });

   return (
      <div>
         <button className="btn btn-primary bg-gradient rounded-3 w-100 mt-5 mb-2" onClick={showToast}>Exercise Completed</button>
         <ToastContainer
            theme="dark"
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         />
      </div>
   );
};

export default Toast;