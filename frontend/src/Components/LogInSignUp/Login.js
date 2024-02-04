import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

//imports for icons and icon styling
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IconContext } from "react-icons";

const Login = ({ name, email, password, registrationKey, setLoginInfo, handleOnClick }) => {
  return (
    <>
      <div className='container'>
        <div className='header'>
          <div className='text'>Login</div>
          <div className='underline'></div>
        </div>
        <div className='inputs'>
          <IconContext.Provider value={{ className: "react-icons-signup" }}>
            <div className='input-field'>
              <MdEmail />
              <input type='email' placeholder='Email' />
            </div>
            <div className='input-field'>
              <RiLockPasswordLine />
              <input type='password' placeholder='Password' />
            </div>
          </IconContext.Provider>
        </div>
        <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
        <div className='submit-container'>
          <div className="submit" onClick={() => handleOnClick("Login")}><Link to='/profile'>Login</Link></div>
        </div>
        <div className="no-account">Don't have an account? <span><Link to='/signup'>Sign Up</Link></span></div>
      </div>

    </>
  )
}

export default Login