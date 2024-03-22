import React, { useEffect, useState } from 'react'
import axiosInstance from '../Help/axiosInstances'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateManager = () => {

    let navigate=useNavigate()
    let {id}=useParams()

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

    useEffect(()=>{
        let fetchData=async()=>{
            try{
                let {data}=await axiosInstance.get(`/academymanagers/get/${id}`,
                {headers : {Authorization : `Bearer ${token}`}})
                let finalData=data.data
                console.log(finalData);
                setData(finalData)
            }catch{
                console.log("unable to fetch data")
            }
        }
        fetchData()
    },[])

    let handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            let payload={
                userName,email,password,phone,dob,gender,id
            }
            let finalData=await axiosInstance.put("/academymanagers/update",payload,
            {headers:{Authorization : ` Bearer ${token}`}})
            console.log(finalData)
            alert(`successfully updated the data with email ${email} as academy manager`)
            navigate(`/adminDashboard/viewManager`)
        }
        catch{
            console.log("unable to connect to server")
        }
    }

  return (
    <div>
      <form action="" style={{textAlign:"center"}} id='form' onSubmit={handleSubmit} >
        <div className='container'>
          <h3>UPDATE MANAGER</h3>
          <div className='signup_details'>
            <div className='signup_user'>
              <label htmlFor="username">UserName : </label>
              <input type="text"  id='username' name='userName' value={userName} onChange={handledata}/> <br /> <br />
            </div>
            <div className='signup_user'>
              <label htmlFor="useremail">UserEmail : </label>
              <input type="text"  id='useremail' name='email' value={email} onChange={handledata}/> <br /> <br />
            </div>
            <div className='signup_user'>
              <label htmlFor="password">Password : </label>
              <input type="password" id='password' name='password' value={password} onChange={handledata}/> <br /> <br />
            </div>
            <div className='signup_user'>
              <label htmlFor="phone">Phone : </label>
              <input type="number"  id='phone' name='phone' value={phone} onChange={handledata}/> <br /> <br />
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
              <button>UPDATE</button>
              <button>Cancel</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UpdateManager
