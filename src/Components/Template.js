import React from 'react'
import FrameImage from '../assets/frame.png'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import {FcGoogle} from 'react-icons/fc'

const Template = ({ title, desc1, desc2, image, formtype, setisLoggedIn }) => {
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 '>
      <div className='w-11/12 max-w-[450px]' >
        <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
        <p className='text-[1.23rem] leading-[1.625rem] mt-4'>
          <span className='text-richblack-100'>{desc1}</span>
          <br />
          <span className='text-blue-100 italic'>{desc2}</span>
        </p>

        {formtype === "signup" ? (<SignupForm setisLoggedIn={setisLoggedIn} />) : (<LoginForm setisLoggedIn={setisLoggedIn} />)}

        <div className='flex w-full items-center my-4 gap-x-2'>
          <div className='h-[1px] bg-richblack-700 w-full'></div>
          <div className='text-richblack-700 font-medium leading-[1.375rem]'>OR</div>
          <div className='h-[1px] bg-richblack-700 w-full'></div>
        </div>

        <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] mt-6 gap-x-2'>
        <FcGoogle></FcGoogle>
        <p> SignUp with Google</p></button>

      </div>
     

      <div className='relative w-11/12 max-w-[450px]'>
      <img src={FrameImage} alt="pattern " width={558} height={504} loading='lazy' />
      <img className='absolute -top-4 right-4' src={image} alt="students " width={558} height={504} loading='lazy' />
      </div>
    </div>
  )
}

export default Template