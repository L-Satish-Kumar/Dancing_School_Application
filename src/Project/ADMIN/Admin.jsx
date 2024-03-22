import React, { useState } from 'react'
import axiosInstance from '../Help/axiosInstances'

const Admin = () => {
  
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
            let final_data= await axiosInstance.post("/admins/save",payload)
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
          <h3>ADMIN SIGNUP</h3>
          <div className='details'>
            <div className='user'>
              <label htmlFor="username">UserName : </label>
              <input type="text"  id='username' name='userName' value={userName} onChange={handledata}/> <br /> <br />
            </div>
            <div className='user'>
              <label htmlFor="useremail">UserEmail : </label>
              <input type="text"  id='useremail' name='email' value={email} onChange={handledata}/> <br /> <br />
            </div>
            <div className='pass'>
              <label htmlFor="password">Password : </label>
              <input type="password" id='password' name='password' value={password} onChange={handledata}/> <br /> <br />
            </div>
            <div className='user'>
              <label htmlFor="phone">Phone : </label>
              <input type="number"  id='phone' name='phone' value={phone} onChange={handledata}/> <br /> <br />
            </div>
            <div className='user'>
              <label htmlFor="date">Date : </label>
              <input type="date"  id='date' name='dob' value={dob} onChange={handledata}/> <br /> <br />
            </div>
            <div className='user'>
              <label htmlFor="gender">Gender : </label>
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

export default Admin
