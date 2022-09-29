import React from 'react';
import './Header.css'
import logo from '../../images/gym.png'

const Header = () => {
   return (
      <div className='d-flex gap-3 align-items-center mb-4 mt-5'>
            <img src={logo} alt="logo" width="50px" />
            <h3 className='header mb-0'>FITNESS-HEROES</h3>
      </div>
   );
};

export default Header;