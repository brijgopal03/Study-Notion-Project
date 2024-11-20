import React from 'react'
import { Navigate } from 'react-router-dom'
const PrivateRoute = ({isLoggedIn, children}) => {
  
  if(!isLoggedIn){
  
    return <Navigate to="/login" />
  }else{
    return (
        <>
        {children}
        </>
    )
}
}

export default PrivateRoute