import React from 'react'
import FrameImage from '../assets/frame.png'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

const Template = ({title, desc1, desc2, image, formtype, setisLoggedIn}) => {
  return (
    <div>
<div>
    <h1>{title}</h1>
    <p>
        <span>{desc1}</span>
        <span>{desc2}</span>
    </p>

    {formtype === "signup" ? (<SignupForm setisLoggedIn= {setisLoggedIn} />) : (<LoginForm setisLoggedIn = {setisLoggedIn} />)}

    <div>
        <div></div>
        <div>OR</div>
        <div></div>
    </div>

    <button><p>SignUp with Google</p></button>

</div>
<img src={FrameImage} alt="pattern image" width={558} height={504} loading='lazy'/>
<img src={image} alt="students image" width={558} height={504} loading='lazy'/>

<div>

</div>
    </div>
  )
}

export default Template