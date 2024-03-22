import React, { useState } from 'react'
import axiosInstance from './Help/axiosInstances'
import { useNavigate } from 'react-router-dom';
import video from './Resources/signup-bg.mp4'

const Signup = () => {

  let navigate=useNavigate()
  
    let [data,setData]=useState({
        userName:"",
        email:"",
        password:"",
        phone:"",
        dob:"",
        gender:"",
    })

    let {userName,email,password,phone,dob,gender} = data

    let handledata=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setData({...data,[name]:value})
    }

    let handlesubmit= async (e)=>{
        e.preventDefault();
        console.log(data);
        try{
            let payload={
                userName,
                email,
                password,
                phone,
                dob,
                gender,
            }
            let final_data= await axiosInstance.post("/users/save",payload)
            console.log(final_data);
            alert(`Successfully registered with email`)
            navigate("/login")
        }
        catch{
            alert("not able to register");
        }
    }

  return (
    <div>
      <div id='bg-video'>
      <video src={video} autoPlay muted loop id='video'></video>
      </div>
      <form action="" style={{textAlign:"center"}} id='form' onSubmit={handlesubmit}>
        <div className='container'>
          <h3>SignUp</h3>
          <div className='signup_details'>
            <div className='signup_user'>
              <label htmlFor="username">UserName : </label>
              <input type="text" placeholder='User Name' id='username' name='userName' value={userName} onChange={handledata}/> <br /> <br />
            </div>
            <div className='signup_user'>
            <label htmlFor="useremail">UserEmail : </label>
              <input type="text" placeholder='User Email' id='useremail' name='email' value={email} onChange={handledata}/> <br /> <br />
            </div>
            <div className='signup_user'>
              <label htmlFor="password">Password : </label>
              <input type="password" placeholder='Password' id='password' name='password' value={password} onChange={handledata}/> <br /> <br />
            </div>
            <div className='signup_user'>
              <label htmlFor="phone">Phone : </label>
              <input type="number" placeholder='Phone'  id='phone' name='phone' value={phone} onChange={handledata}/> <br /> <br />
            </div>
            <div className='signup_user'>
              <label htmlFor="date">Date : </label>
              <input type="date"  id='date' name='dob' value={dob} onChange={handledata}/> <br /> <br />
            </div>
            <div className='signup_user_gender'>
              <label htmlFor="gender">Gender : </label> <br />
              <input type="radio" id='gender' name='gender' value={"male"} onChange={handledata}/> <label htmlFor="male">Male</label> 
              <input type="radio" id='gender' name='gender' value={"female"} onChange={handledata}/> <label htmlFor="male">Female</label>  <br /> <br />
            </div>
            <div className='btn'>
              <button>Signup</button>
              <button>Cancel</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Signup
