import React from 'react';
// import { AuthContext } from './AuthContextProvider'; 
import { Navigate } from 'react-router-dom';


function PrivateRoute({ children }) {
 const Token =localStorage.getItem("Token");

  if (!Token) {
    return <Navigate to="/login" />;
  }


  return children;
}

export default PrivateRoute;
