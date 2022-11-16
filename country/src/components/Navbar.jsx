import React from 'react';

import { useState,createContext  } from 'react';
import { Navigate, useLocation, useNavigate, useNavigationType } from 'react-router-dom';
import "./Navbar.css"
const UserContext = createContext();

const Navbar = () => {
    const path=useLocation()
    

  const navigate=useNavigate()
    const[data,setDat]=useState("")
    const[set,setSet]=useState("")
    
  
    return (
        
        <div className="navbar">
            <div className="logo">
            <h3>Masai Country</h3>
             

            </div>
            <div className="nav">
                <a href="/">home</a>
              
            </div>
        </div>
      
    );
};

export default Navbar;