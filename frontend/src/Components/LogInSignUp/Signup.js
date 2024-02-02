import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

//imports for icons and icon styling
import { FaRegUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import { MdKey } from "react-icons/md";

const Signup = ({ email, password, setLoginInfo, handleOnClick }) => {

  return (
    <div className = "container">
      <div className='header'>
        <div className='text'>Sign Up</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <IconContext.Provider value={{ className: "react-icons-signup" }}>
          <div className='input-field'>
            <FaRegUserCircle />
            <input
              type='text'
              placeholder='Name' />
          </div>
          <div className='input-field'>
            <MdEmail />
            <input
              type='email'
              placeholder='Email' />
          </div>
          <div className='input-field'>
            <RiLockPasswordLine />
            <input
              type='password'
              placeholder='Password' />
          </div>
          <div className='input-field'>
            <MdKey />
            <input
              type='text'
              placeholder='Registration Key'
              required />
          </div>
        </IconContext.Provider>
      </div>
      <div className='submit-container'>
        <div className="submit" onClick={() => handleOnClick("signUp")}>Sign Up</div>
      </div>
      <div className="want-to-sign-in">Sign In instead <span><Link to='/login'>Sign In</Link></span></div>
    </div>
  )
}

export default Signup