import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../Help/axiosInstances'

const AddAcademy = () => {

  let navigate=useNavigate()
  let {id}=useParams()
  let token=localStorage.getItem('token')

  let[data,setData]=useState({
    academyName:"",
    description:"",
    email:"",
    contact:""
  })

  let{academyName,description,email,contact}=data

  let handledata=(e)=>{
    let name=e.target.name
    let value=e.target.value
    setData({...data,[name]:value})
    }

  let handleSubmit= async(e)=>{
    e.preventDefault()
    console.log(data)
    try{
        let payload={
            academyName,description,email,contact
        }
        await axiosInstance.post(`/academies/saveacademy?managerId=${id}`,payload,
        {headers : {Authorization: `Bearer ${token}`}})
        alert(`sucessfully added`)
        navigate(`/adminDashboard/viewacademy`)
    }catch{
        console.log("unable to post data")
    }
  }

  return (
    <div>
      <form action=""  style={{textAlign:"center"}} id='form' onClick={handleSubmit}>
        <div className='container'>
            <h3>ADD ACADEMY</h3>
            <div className='signup_details'>
                <div className='signup_user'>
                <label htmlFor="academyName">ACADEMY NAME : </label>
                <input type="text" placeholder='ACADEMY NAME' id='academyName' name='academyName' value={academyName} onChange={handledata}/> <br /> <br />
                </div>
                <div className='signup_user'>
                <label htmlFor="description">DESCRIPTION : </label>
                <input type="text" placeholder='DESCRIPTION' id='description' name='description' value={description} onChange={handledata}/> <br /> <br />
                </div>
                <div className='signup_user'>
                <label htmlFor="email">EMAIL : </label>
                <input type="text" placeholder='EMAIL' id='email' name='email' value={email} onChange={handledata}/> <br /> <br />
                </div>
                <div className='signup_user'>
                <label htmlFor="contact">CONTACT : </label>
                <input type="text" placeholder='CONTACT' id='contact' name='contact' value={contact} onChange={handledata}/> <br /> <br />
                </div>
                <div className='btn'>
                <button>Submit</button>
            </div>
            </div>
        </div>
      </form>
    </div>
  )
}

export default AddAcademy
