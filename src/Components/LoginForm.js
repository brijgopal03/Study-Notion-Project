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
   console.log("Printing the form data")
   console.log(formData)
   
}

  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address  <sup className='text-pink-200'>*</sup></p>

        <input type="email"
               required
               placeholder='Enter your Email Address'
               value={formData.email}
               onChange={changeHandler}
               name='email' 
                className='w-full h-[2.5rem] rounded-[0.5rem] border bg-richblack-800 border-richblack-700 text-richblack-100 px-2'
               />
        </label>


        <label className='w-full relative'>
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password <sup className='text-pink-200'>*</sup></p> 

        <input type={showPassword ? ("text") : ("password")}
               required
               placeholder='Enter the Password'
               value={formData.password}
               onChange={changeHandler}
               name='password' 
                className='w-full h-[2.5rem] rounded-[0.5rem] border bg-richblack-800 border-richblack-700 text-richblack-100 px-[12px]'
               />

        <span className='absolute right-3 top-[38px] cursor-pointer'
          onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)}
        </span>

        <Link to= "#" ><p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forgot Password</p></Link>

        </label>

        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Sign In</button>

    </form>
  )
}

export default LoginForm