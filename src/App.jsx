import {Route,Routes} from "react-router-dom"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import PrivateRoute from "./Utils/PrivateRoute";
import Home from "./Pages/Home";
import EditUser from "./Pages/EditUser";
import LandingPage from "./Pages/LandingPage";


function App() {
  

  return (
    <>
    
       
    <Routes>

  <Route path="/" element={<LandingPage />} />
  <Route path="/login" element={<Login />} />
 <Route path="/register" element={<Register />} />
  <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} /> 
  <Route path="/edit-user" element={<PrivateRoute><EditUser /></PrivateRoute>} /> 

</Routes>

\
     

    </>
    
  )
}

export default App
