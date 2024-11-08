import React from 'react'
import signUpImg from '../assets/signup.png'
import Template from '../Components/Template'
const Signup = ({setisLoggedIn}) => {
  return (
    <div>
      <Template
      title="Join the millions learning to code with studyNotion for free."
      desc1="Build skills for today, tommorow and beyond."
      desc2="Education to future proof your career."
      image={signUpImg}
      formtype="signup"
      setisLoggedIn={setisLoggedIn} />
    </div>
  )
}

export default Signup