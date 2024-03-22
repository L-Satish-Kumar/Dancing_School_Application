import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from './Help/axiosInstances';
import video from './Resources/login-bg.mp4'

const Login = () => {
  let navigate=useNavigate()

  let [data,setData]=useState({
    userEmail:"",
    password:"",
  })

  let {userEmail,password}=data

  let handleData=(e)=>{
    let name=e.target.name
    let value=e.target.value
    setData({...data,[name]:value})
  }

  let handlesubmit= async (e) =>{

    e.preventDefault()
    try{
      let payload={
        userEmail,password
      }

      let {data}=await axiosInstance.post("/authenticate",payload)
      console.log(data);
      //token and role is used to check logged in or not

      let token=data.token
      let role=data.role
      let userId=data.userId
      // let branchId=data.branchId
      if(token){
        localStorage.setItem("token",token)
        localStorage.setItem("role",role)
        localStorage.setItem('uid',userId)
        alert("logged in successfully")
        navigate("/")
      }
    }catch{
      console.log("not working")
    }
  }

  return (
    <div>
      <div id='bg-video'>
      <video src={video} autoPlay muted loop id='video'></video>
    </div>
      <form action="" style={{textAlign:"center"}} id='form' onSubmit={handlesubmit}>
        <div className='container'>
          <h3>Login</h3>
          <div className='details'>
            <div className='login_user'>
              <label htmlFor="username">Email : </label> <br />
              <input type="text" placeholder='Email' name='userEmail' value={userEmail} onChange={handleData}/>
              <box-icon id="email_icon" type='solid' color="white" size="30px" name='envelope'></box-icon><br /> <br />
            </div>
            <div className='login_user'>
              <label htmlFor="password">Password : </label> <br />
              <input type="password" placeholder="Password" name='password' value={password} onChange={handleData}/>
              <box-icon id="pass_icon" type='solid' color="white" size="30px" name='lock-alt'></box-icon> <br /> <br />
            </div>
            <div className='btn'>
              <button>Login</button>
              <button>Cancel</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
