import React from 'react';
import './Login.css';

import logo from '../assets/logo.svg';

function Login() {
  return (
    <div className="login-container">
      <form>
        <img src={logo} alt="Tindev" />
        <input placeholder="Enter your Github username" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
