import React, { useState } from 'react';
import {
  Switch,
  Route,
  Link,
  useHistory,
  Redirect
} from "react-router-dom";
import { GoogleLogin, GoogleLogout, useGoogleLogin } from 'react-google-login'

export type ProfileObj = {
  email: string;
  imageUrl: string;
  name: string;
}

function App() {

  return (
    <div className='text-center space-y-3'>
      <p className='italic font-semibold text-lg'>My OAuth Application</p>

      <Switch>
        <Route path='/' exact>
          <p className='italic'>Please login</p>
          <GoogleLogin
            clientId=''
            buttonText='Login'
            cookiePolicy={'single_host_origin'}
          />
        </Route>

        <Route path='/profile'>
          <p className='italic'>Profile</p>
          <img className='mx-auto rounded-full' src=''></img>
          <p><span className='font-semibold'>Name : </span> ''</p>
          <p><span className='font-semibold'>Email : </span> ''</p>
          <GoogleLogout
            clientId=''
            buttonText='Logout'
          />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
