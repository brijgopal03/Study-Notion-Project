import React from 'react'
import Template from '../Components/Template'
import loginImg from '../assets/login.png'

const Login = ({setisLoggedIn}) => {
  return (
    <div>
      <Template
      title="Welcome Back!"
      desc1="Build skills for today, tommorow and beyond."
      desc2="Education to future proof your career."
      image={loginImg}
      formtype="login"
      setisLoggedIn={setisLoggedIn} />
    </div>
  )
}

export default Login