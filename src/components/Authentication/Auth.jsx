import React from 'react'
import SignIn from '../SignIn'
import SignUp from '../SignUp'

function Auth() {
  return (
    <div className='auth-container'>
        <SignUp/>
        <SignIn/>
    </div>
  )
}

export default Auth