// Nav.js

import React from 'react';
import logo from "./images/Logo.svg"

function Nav() {
  return (
    <nav>
        <a href="/">
            <img src={logo} alt="logo" />
        </a>
    </nav>
  );
}

export default Nav;