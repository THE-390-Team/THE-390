import React from 'react'

import Login from './Login';
import Signup from './Signup';
import { Routes, Route } from 'react-router-dom'

const LoginSignUp = ({ loginInfo, setLoginInfo, singUpInfo, setSignUpInfo, handleOnClick }) => {


  return (
    <div className='container'>
      <Routes>
        <Route path='/login' element={
          <Login
            email={loginInfo.email}
            password={loginInfo.password}
            setLoginInfo={setLoginInfo}
            handleOnClick={handleOnClick}
          />
        } />
        <Route path='/signup' element={
          <Signup
            name={singUpInfo.name}
            email={singUpInfo.email}
            password={singUpInfo.password}
            registrationKey={singUpInfo}
            setSignUpInfo={setSignUpInfo}
            handleOnClick={handleOnClick}
          />
        } />
      </Routes>
    </div>
  )
}

export default LoginSignUp