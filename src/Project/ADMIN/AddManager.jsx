import React, { useState } from 'react'
import axiosInstance from '../Help/axiosInstances'

const AddManager = () => {

    let token=localStorage.getItem('token')

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
            let final_data= await axiosInstance.post("/academymanagers/save",payload,{
              headers : {Authorization : `Bearer ${token}`}})
              console.log(final_data);
              alert(`${userName} Successfully registered`)
        }
        catch{
            alert("not able to register");
        }
    }
  return (
    <div>
      <form action="" style={{textAlign:"center"}} id='form' onSubmit={handlesubmit}>
        <div className='container'>
          <h3>ADD MANAGER</h3>
          <div className='signup_details'>
            <div className='signup_user'>
              <label htmlFor="username">UserName : </label>
              <input type="text" placeholder='User Name' id='username' name='userName' value={userName} onChange={handledata}/> <br /> <br />
            </div>
            <div className='signup_user'>
              <label htmlFor="useremail">UserEmail : </label>
              <input type="text" placeholder='Email'  id='useremail' name='email' value={email} onChange={handledata}/> <br /> <br />
            </div>
            <div className='signup_user'>
              <label htmlFor="password">Password : </label>
              <input type="password" placeholder='Password' id='password' name='password' value={password} onChange={handledata}/> <br /> <br />
            </div>
            <div className='signup_user'>
              <label htmlFor="phone">Phone : </label>
              <input type="number" placeholder='phone' id='phone' name='phone' value={phone} onChange={handledata}/> <br /> <br />
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
              <button>Add Manager</button>
              <button>Cancel</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddManager
