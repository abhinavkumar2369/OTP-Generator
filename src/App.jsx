import React, { useState } from "react";
import logo from './logo.png';
import './App.css';


function App() {
  const [otp,setotp] = useState('123456');
  const Generate_OTP = ()=>{
    const newOTP = Math.floor(100000 + Math.random() * 900000);
    setotp(newOTP.toString());
  };
  return (
    <>
      {/* ----- Container ----- */}
      <div className="container">
        {/* Logo */}
        <span className="logo"><img src={logo} alt=""/></span>
        {/* Heading */}
        <span className="heading">OTP Generator</span>
        {/* OTP Box */}
        <div className="otp">
          {
            otp.split('').map((digit,index)=>(
              <span key={index}>{digit}</span>
            ))
          }
        </div>
        {/* Button */}
        <span className="button">
          <button onClick={Generate_OTP} className="generate-button">Generate OTP</button>
        </span>
      </div>
    </>
  )
}

export default App;