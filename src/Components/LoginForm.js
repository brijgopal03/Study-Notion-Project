import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import toast from 'react-hot-toast';

const LoginForm = ({setisLoggedIn}) => {

const[formData, setFormData] = useState({
    email:"", password: ""
})

const [showPassword, setShowPassword] = useState(false)
const navigate = useNavigate();

function changeHandler(event){
  setFormData((prevData) =>(
    {
 ...prevData,
 [event.target.name]: event.target.value
    }
  ))
}

function submitHandler(event){
   event.preventDefault();
   setisLoggedIn(true);
   toast.success("Logged In !")
   navigate("/dashboard")
}

  return (
    <form onSubmit={submitHandler}>
        <label htmlFor="">
        <p>Email Address</p> <sup>*</sup>

        <input type="email"
               required
               placeholder='Enter your Email Id'
               value={formData.email}
               onChange={changeHandler}
               name='email' />
        </label>


        <label htmlFor="">
        <p>Password</p> <sup>*</sup>

        <input type={showPassword ? ("text") : ("password")}
               required
               placeholder='Enter the Password'
               value={formData.password}
               onChange={changeHandler}
               name='password' />

        <span onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)}
        </span>

        <Link to= "#"><p>Forgot Password</p></Link>

        </label>

        <button>Sign In</button>

    </form>
  )
}

export default LoginForm