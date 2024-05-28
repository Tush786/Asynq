import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Profile/Login";
import Signup from "../Profile/Signup";


function Allroutes() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={< />} /> */}

        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

    
      </Routes>
    </div>
  );
}

export default Allroutes;
