import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from './Help/axiosInstances'

const Register = () => {
  let navigate=useNavigate()
  let {id}=useParams()
  let token=localStorage.getItem('token')
  let uid=localStorage.getItem('uid')
  let bid=localStorage.getItem('bid')
  let cid=localStorage.getItem('cid')

  let[data,setData]=useState({
    dateOfJoining:"",
    memeberShipEndDate:"",
    status:"",
    totalFee:""
  })

  let{dateOfJoining,memeberShipEndDate,status,totalFee}=data

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
          dateOfJoining,memeberShipEndDate,status,totalFee,uid
        }
        await axiosInstance.post(`/memberships/createmembership?branchId=${bid}&danceCourseId=${cid}&userId=${uid}`,payload,
        {headers : {Authorization: `Bearer ${token}`}})
        alert(`sucessfully added`)
    }catch{
        console.log("unable to post data")
    }
  }

  return (
    <div>
      <form action=""  style={{textAlign:"center"}} id='form' onSubmit={handleSubmit}>
        <div className='container'>
            <h3>MEMBERSHIP REGISTER</h3>
            <div className='signup_details'>
                <div className='signup_user'>
                <label htmlFor="dateOfJoining">DATE OF JOINING : </label>
                <input type="date" id='dateOfJoining' name='dateOfJoining' value={dateOfJoining} onChange={handledata}/> <br /> <br />
                </div>
                <div className='signup_user'>
                <label htmlFor="memeberShipEndDate">MEMBERSHIP END DATE : </label>
                <input type="date" id='memeberShipEndDate' name='memeberShipEndDate' value={memeberShipEndDate} onChange={handledata}/> <br /> <br />
                </div>
                <div className='signup_user'>
                <label htmlFor="status">STATUS : </label>
                <input type="text" placeholder='STATUS' id='status' name='status' value={status} onChange={handledata}/> <br /> <br />
                </div>
                <div className='signup_user'>
                <label htmlFor="totalFee">TOTAL FEE : </label>
                <input type="number" placeholder='TOTAL FEE' id='totalFee' name='totalFee' value={totalFee} onChange={handledata}/> <br /> <br />
                </div>
                <div className='btn'>
                <button>Register</button>
            </div>
            </div>
        </div>
      </form>
    </div>
  )
}

export default Register
