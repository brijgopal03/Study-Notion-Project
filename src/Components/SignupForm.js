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
}
else{
    navigate("/dashboard");
toast.success("Signed Up !");
setisLoggedIn(true);
}

}

    return (
        <div>
            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>

            <form onSubmit={submitHandler}>
                <div>
                    <label>
                        <p>
                            First Name <sup>*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            placeholder="Enter your First Name"
                            onChange={changeHandler}
                            value={formData.firstName}
                        />
                    </label>

                    <label>
                        <p>
                            Last Name <sup>*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            placeholder="Enter your Last Name"
                            onChange={changeHandler}
                            value={formData.lastName}
                        />
                    </label>
                </div>

                <label>
                    <p>
                        Email Address <sup>*</sup>
                    </p>
                    <input
                        required
                        type="email"
                        name="email"
                        placeholder="Enter your Email Address"
                        onChange={changeHandler}
                        value={formData.email}
                    />
                </label>

               <div>
               <label>
                    <p>
                        Create Password <sup>*</sup>
                    </p>
                    <input
                        required
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Create your Password"
                        onChange={changeHandler}
                        value={formData.password}
                    />

                    <span onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                    </span>
                </label>

                <label>
                    <p>
                        Confirm Password <sup>*</sup>
                    </p>
                    <input
                        required
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm your Password"
                        onChange={changeHandler}
                        value={formData.confirmPassword}
                    />

                    <span onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                    </span>
                </label>
               </div>

<button>Create Account</button>

            </form>
        </div>
    );
};

export default SignupForm;
