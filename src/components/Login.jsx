import React from 'react';
import Image from './Images';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container text-center">
        <div className="row">
            <div className="col-lg-6 login-int"><Image/></div>
            <div className="col-lg-6 login-text">
              <h1 className='fiirstpa-ebutton-text02 login-int'>COMPETE YOUR CREATIVITY AMONG OTHERS.....</h1>
              <Link className='fiirstpa-ebutton-text10 login-int' to='RegistrationPage'>Get Started</Link>
            </div>
        </div>
    </div>
  );
};

export default Login;
