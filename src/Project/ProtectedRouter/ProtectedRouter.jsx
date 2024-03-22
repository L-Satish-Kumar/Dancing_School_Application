import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedRouter = ({children}) => {

    let token=localStorage.getItem('token')
    if(token){
        return (
            <>
            {children}
            </>
        )
    }
    else {
        return (
            <>
            {alert("please login to view Home Page")}
            <Navigate to="/login"/>
            </>
        )
    }
  return (
    <div>
      
    </div>
  )
}

export default ProtectedRouter
