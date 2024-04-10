import React from 'react';
import {useNavigate} from "react-router-dom";
import axios from "../Utils/Axios";




const Register = () => {

    const navigate = useNavigate();

    const handleRegister = async (e)=>{
        e.preventDefault();
          const userData = {
            name:e.target.name.value,
           email:e.target.email.value,
           password:e.target.password.value
          }
         
         try{
           const response = await axios.post("/api/register",userData)
           console.log(response)
                
           if(response.status===200){
             await  swal("Success!", "User logged in successfully", "success");
              navigate("/login")
           }
           
       
         }catch(error){
           swal("Error!", "Something went wrong", "error");
         }
       
         }

  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100 " >
      <div
        className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0  "
      >
        {/* left side */}
        <div className="flex flex-col justify-center p-8 md:p-14 ">
          <span className="mb-3 text-4xl font-bold">Get Ready!!!!</span>
          <span className="font-light text-gray-400 mb-8">
          Create your account and start exploring today!
          </span>
          <form onSubmit={handleRegister}>

        
          <div className="py-4 ">
            <span className="mb-2 text-md">Name</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="name"
              id="name"
              autoComplete="off"
            />
          </div>
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
      
          <button
            className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white  hover:text-black hover:border hover:border-gray-300" type='submit'
          >
            Sign up
          </button>

          <button
            className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
          >
            Sign up with Google
          </button>
          </form>
          <div className="text-center text-gray-400">
            Already have an account?
            <span className="font-bold text-black cursor-pointer" onClick={()=>navigate("/login")}>Login</span>
          </div>
        </div>
        {/* right side */} 
        <div className="relative">
          <img
            src="https://cdni.iconscout.com/illustration/free/thumb/free-sign-up-form-4575543-3798675.png"
            alt="img"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-fit"
          />
         
        </div>
      </div>
    </div>
    </>
  )
}

export default Register