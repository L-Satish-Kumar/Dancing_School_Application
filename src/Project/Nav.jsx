import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from './Resources/dance-school-logo-design.jpg'

const Nav = () => {

  let navigate=useNavigate()

  let role=localStorage.getItem('role')
  let token=localStorage.getItem('token')

  let logoutHandler=()=>{
    alert("are you sure you want to log out?")
    localStorage.clear()
    navigate("/login")
  }

  let handleAdminDash=()=>{
    navigate("/adminDashboard")
  }
  
  return (
    <>
    <div>
      <nav>
        <article>
            <img src={logo} alt="logo"  id='logo'/>
            <div className='menus'>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/gallary"}>Gallary</Link>

            {/* admin login nav bar changed*/}
            {role==="ROLE_ADMIN" ? <Link to="/adminDashboard" onClick={handleAdminDash}>Admin Dashboard</Link> : null }

            {/* change button to logout from login and signup */}
            {token ? <Link to="/login" onClick={logoutHandler}>Logout</Link> :
            <>
            <Link to={"/login"}>Login</Link>
            <Link to={"/signup"}>Signup</Link>
            </>
            }
            </div>
        </article>
      </nav>
    </div>
    </>
  )
}

export default Nav
