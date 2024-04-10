import {Route,Routes} from "react-router-dom"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import PrivateRoute from "./Utils/PrivateRoute";
import Home from "./Pages/Home";
import EditUser from "./Pages/EditUser";


function App() {
  

  return (
    <>
    
       
       <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
          
          <Route element={<PrivateRoute/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/edit-user" element={<EditUser/>}/>
       </Routes>
     

    </>
    
  )
}

export default App
