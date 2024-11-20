import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignupForm = ({setisLoggedIn}) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");
    const navigate = useNavigate();

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    }

function submitHandler(event){
event.preventDefault();
if(formData.confirmPassword != formData.password){
    toast.error("Passwords do not match");
    return;
}
else{
    navigate("/dashboard");
toast.success("Signed Up !");
setisLoggedIn(true);
const accountData = {...formData, accountType};
console.log("Printing the form data");
console.log(accountData);
}

}

    return (
        <div>
            <div className="flex bg-richblack-800 p-1 gap-x-1 my-5 rounded-full max-w-max">
                <button className= {` py-2 px-5 transition-all rounded-full duration-200 ${accountType === "student" ? "bg-richblack-900 text-richblack-5" : "text-richblack-100 bg-transparent"}` }
                onClick={() => setAccountType("student")} >Student</button>
                <button className= {` py-2 px-5 transition-all rounded-full duration-200 ${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : "text-richblack-100 bg-transparent"}` }
                onClick={() => setAccountType("instructor")} >Instructor</button>
            </div>

            <form onSubmit={submitHandler}>
                <div className="flex justify-between mt-[20px]">
                    <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            First Name <sup className='text-pink-200'>*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            placeholder="Enter your First Name"
                            onChange={changeHandler}
                            value={formData.firstName}
                            className='w-full h-[2.5rem] rounded-[0.5rem] border bg-richblack-800 border-richblack-700 text-richblack-100 px-2'
                        />
                    </label>

                    <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Last Name <sup className='text-pink-200'>*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            placeholder="Enter your Last Name"
                            onChange={changeHandler}
                            value={formData.lastName}
                            className='w-full h-[2.5rem] rounded-[0.5rem] border bg-richblack-800 border-richblack-700 text-richblack-100 px-2'
                        />
                    </label>
                </div>

               <div className="mt-[20px]">
               <label className="w-full mt-[20px]">
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        Email Address <sup className='text-pink-200'>*</sup>
                    </p>
                    <input
                        required
                        type="email"
                        name="email"
                        placeholder="Enter your Email Address"
                        onChange={changeHandler}
                        value={formData.email}
                        className='w-full h-[2.5rem] rounded-[0.5rem] border bg-richblack-800 border-richblack-700 text-richblack-100 px-2'
                    />
                </label>
               </div>

               <div className="flex justify-between  mt-[20px]">
               <label className="relative">
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        Create Password <sup className='text-pink-200'>*</sup>
                    </p>
                    <input
                        required
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Create Password"
                        onChange={changeHandler}
                        value={formData.password}
                        className='w-full h-[2.5rem] rounded-[0.5rem] border bg-richblack-800 border-richblack-700 text-richblack-100 px-2'
                    />

                    <span 
                    className='absolute right-3 top-[35px] cursor-pointer'
                    onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? <AiOutlineEye fontSize={24} fill='#AFB2BF' /> : <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />}
                    </span>
                </label>

                <label className="relative">
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        Confirm Password <sup className='text-pink-200'>*</sup>
                    </p>
                    <input
                        required
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={changeHandler}
                        value={formData.confirmPassword}
                        className='w-full h-[2.5rem] rounded-[0.5rem] border bg-richblack-800 border-richblack-700 text-richblack-100 px-2'
                    />

                    <span 
                    className='absolute right-3 top-[35px] cursor-pointer'
                    onClick={() => setShowConfirmPassword((prev) => !prev)}>
                        {showConfirmPassword ? <AiOutlineEye fontSize={24} fill='#AFB2BF' /> : <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />}
                    </span>
                </label>
               </div>

<button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-10 w-full'>Create Account</button>

            </form>
        </div>
    );
};

export default SignupForm;
