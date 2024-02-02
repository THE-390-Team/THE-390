import './index.css';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Navigation from './Components/Home/Navigation.js'
import Login from './Components/LogInSignUp/Login.js'
import Signup from './Components/LogInSignUp/Signup.js'

import { DataProvider } from './context/DataContext.js'

function App() {

  const [type, setType] = useState('SignIn')

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  })

  const [singUpInfo, setSignUpInfo] = useState({
    name: '',
    email: '',
    password: '',
    registrationKey: ''
  })

  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
      console.log(text)
      console.log(type)
    }
  };

  return (
    <div className="App">
      <Navigation />
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

  );
}

export default App;
