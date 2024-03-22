import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../Help/axiosInstances'

const AddCourse = () => {

  let navigate=useNavigate()
  let {id}=useParams()
  let token=localStorage.getItem('token')
  
  let[data,setData]=useState({
    courseDurationInMonths:"",
    fee:"",
    imagedata:"",
    type:"",
  })
  
  let{courseDurationInMonths,fee,imagedata,type}=data
  
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
        courseDurationInMonths,fee,imagedata,type,id
      }
      await axiosInstance.post(`dancecourses/save?branchid=${id}`,payload,
      {headers : {Authorization: `Bearer ${token}`}})
      alert(`sucessfully added`)
      navigate(`/adminDashboard/viewCourse`)
      }catch{
      console.log("unable to post data")
    }
  }

  return (
    <div>
      <form action=""  style={{textAlign:"center"}} id='form' onClick={handleSubmit}>
        <div className='container'>
            <h3>ADD Course</h3>
            <div className='signup_details'>
                <div className='signup_user'>
                <label htmlFor="courseduration">COURSE DURATION : </label>
                <input type="integer" placeholder='COURSE DURATION' id='courseduration' name='courseDurationInMonths' value={courseDurationInMonths} onChange={handledata}/> <br /> <br />
                </div>
                <div className='signup_user'>
                <label htmlFor="fee">FEE : </label>
                <input type="number" placeholder='FEE' id='FEE' name='fee' value={fee} onChange={handledata}/> <br /> <br />
                </div>
                <div className='signup_user'>
                <label htmlFor="imagedata">IMAGE DATA : </label>
                <input type="text" placeholder='IMAGE DATA' id='ImageData' name='imagedata' value={imagedata} onChange={handledata}/> <br /> <br />
                </div>
                <div className='signup_user'>
                <label htmlFor="coursetype">COURSE TYPE : </label>
                <input type="text" placeholder='COURSE TYPE' id='CourseType' name='type' value={type} onChange={handledata}/> <br /> <br />
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

export default AddCourse
