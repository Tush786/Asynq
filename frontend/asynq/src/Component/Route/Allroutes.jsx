import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Profile/Login";
import Signup from "../Profile/Signup";
import TaskEmpty from "../TaskEmpty";
import Task from "../Taskcomp/Task";
import PrivateRoute  from "./Privateroute";
import Home from "../Home";

function Allroutes() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}

        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Task />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default Allroutes;
