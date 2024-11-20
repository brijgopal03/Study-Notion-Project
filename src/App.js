import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useState } from "react";

function App() {

const [isLoggedIn, setisLoggedIn] = useState(false)
   
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
    <Navbar isLoggedIn = {isLoggedIn} setisLoggedIn = {setisLoggedIn} />


<Routes>
  <Route path="/" element = {<Home isLoggedIn = {isLoggedIn}/>} />
  <Route path="/login" element = {<Login setisLoggedIn={setisLoggedIn}/>} />
  <Route path="/dashboard" element = {
    <PrivateRoute isLoggedIn = {isLoggedIn}>
      <Dashboard/>
    </PrivateRoute>
  } />
  <Route path="/signup" element = {<Signup setisLoggedIn={setisLoggedIn}/>} />

</Routes>

  </div>
  ) 
};

export default App;
