import React from "react";
import axios from "../Utils/Axios";
import swal from "sweetalert";


const EditUser = () => {

//---------------- update username and password -----------------

    const handleUpdate = async (e) => {
        e.preventDefault();
    
        const userData = {
          name: e.target.name.value,
          password: e.target.password.value,
        };
        try {
          const response = await axios.put("/api/update-user", userData);
          
        } catch (error) {
            swal("Error!", "Something went wrong", "error");
        }
      };

//--------------------- delete user ---------------------------

      const handleDelete = async () => {
        try {
          const response = await axios.delete(
            "api/delete-user"
          );
        
          if(response.status===200){
            await  swal("Success!", "User deleted successfully", "success");
            navigate("/register")
          }
         
        } catch (error) {
            swal("Error!", "Something went wrong", "error");
        }
      };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Update Details
          </h2>
          <form
            onSubmit={handleUpdate}
            className="mt-8 space-y-6"
           
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter name"
                  autoComplete="off"
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm mb-3"
                />
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm mb-3"
                />
                <button
                type="submit"
                className="group mb-5 relative w-full flex justify-center
              py-2 px-4 border border-transparent text-sm font-medium
              rounded-md text-white bg-indigo-600 hover:bg-indigo-700
              focus:outline-none focus:ring-2 focus:ring-offset-2
              focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
               Save
              </button>
              </div>
            </div>
                </form>
            <div>
              
              <button
                onClick={handleDelete}
                className="group relative w-full flex justify-center
              py-2 px-4 border border-transparent text-sm font-medium
              rounded-md text-white bg-red-300 hover:bg-red-700
              focus:outline-none focus:ring-2 focus:ring-offset-2
              focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Delete Account
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
