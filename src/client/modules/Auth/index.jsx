import React from 'react';
import { useParams } from 'react-router';

import Signin from './components/Signin'
import Signup from './components/Signup'

const Auth = (props) => {
  const params = useParams()

  return (
    <>
      <h1>Quiz Game</h1>

      {props.signin ? 
        <Signin />
      :
        <Signup />
      }
    </>
  )
}

export default Auth