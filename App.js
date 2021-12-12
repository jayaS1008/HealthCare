import './App.css'
import React from "react"
import Homepage from "./components/home/Home"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState,Fragment } from 'react';

function App() {

  const [ user, setLoginUser] = useState({})
  return (
   
    <div className="App">
    <Router>
        <Routes>
           <Route path ="/" element={
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>} />
           <Route path ="/Login" element={<Login setLoginUser={setLoginUser}/>}/> 
           <Route path ="/Register"element ={<Register/>}/> 
        </Routes> 
    </Router>
    </div>

  );
}

export default App;