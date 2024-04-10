import React from "react";
import {useNavigate} from "react-router-dom";
import swal from "sweetalert";
import axios from "../Utils/Axios";



const Login = () => {

 const navigate = useNavigate()

 const handleLogin = async (e) => {
  e.preventDefault();
  const userData = {
    email: e.target.email.value,
    password: e.target.password.value,
  };
  try {
    const response = await axios.post("/api/login", userData);

    if (response.status === 200) {
      localStorage.setItem('token', response.data.token);
      await swal("Success!", "User logged in successfully", "success");
      navigate("/home");  // Navigate after successful login
    }
  } catch (error) {
    console.log(error)
    swal("Error!", "Something went wrong", "error");
  }
};

 

  return (
  
   <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
      >
        {/* left side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Welcome back</span>
          <span className="font-light text-gray-400 mb-8">
            Welcom back! Please enter your details
          </span>
          <form onSubmit={handleLogin}>

        
          <div className="py-4">
            <span className="mb-2 text-md">Email</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
              autoComplete="off"
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password"
              name="password"
              id="pass"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              <input type="checkbox" name="ch" id="ch" className="mr-2" />
              <span className="text-md">Remember for 30 days</span>
            </div>
            <span className="font-bold text-md">Forgot password</span>
          </div>
          <button
            className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white  hover:text-black hover:border hover:border-gray-300"
            type="submit"
          >
            Login
          </button>
          </form>
          <button
            className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
          >
            Login with Google
          </button>
          <div className="text-center text-gray-400">
            Dont'have an account?
            <span className="font-bold text-black cursor-pointer" onClick={()=>navigate("/register")}>Sign up for free</span>
          </div>
        </div>
        {/* right side */} 
        <div className="relative">
          <img
            src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?w=360"
            alt="img"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-fit"
          />
         
        </div>
      </div>
    </div>
   </>
    
    
  );
};

export default Login;
