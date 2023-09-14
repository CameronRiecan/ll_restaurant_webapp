// Nav.js

import React from 'react';
import logo from "../images/Logo.svg"

function Nav() {
  return (
    <nav>
        <a href="/">
            <img src={logo} alt="logo" />
        </a>

        <div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
    </nav>
  );
}

export default Nav;