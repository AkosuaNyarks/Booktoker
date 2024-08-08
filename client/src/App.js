import React, {useState} from "react"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import {Login} from "./Login";
import {Register} from "./Register";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";


function App() {
  // const[currentForm,setCurrentForm]=useState('login');

  // const toggleForm =(formName) =>{
  //   setCurrentForm(formName);
  // }

  return (
    <Router>
       <Navbar />
       
    <div className="App">
      
     
      <Routes>
        <Route path="/" element={<Home className="home" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
    </div>

  </Router>
);
}
        
      


  

export default App;
