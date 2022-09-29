import React from 'react';
import './Header.css'
import logo from '../../images/gym.png'

const Header = () => {
   return (
      <div className='d-flex gap-3 align-items-center justify-content-center justify-content-sm-start mb-4 mt-5 header'>
         <img src={logo} alt="logo" width="50px" />
         <h3 className='m-0'>FITNESS-HEROES</h3>
      </div>
   );
};

export default Header;