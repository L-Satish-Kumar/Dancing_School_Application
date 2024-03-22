import React, { useEffect, useState } from 'react'
import axiosInstance from '../Help/axiosInstances'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateBranch = () => {

    let navigate=useNavigate()
    let {id}=useParams()
    let token=localStorage.getItem('token')

    let[data,setData]=useState({
      address:"",
      city:"",
      phone:"",
      pincode:""
    })

    let{address,city,phone,pincode}=data

    let handledata=(e)=>{
      let name=e.target.name
      let value=e.target.value
      setData({...data,[name]:value})
    }

    useEffect(()=>{
        let fetchData=async()=>{
            try{
                let {data}=await axiosInstance.get(`/branches/get/${id}`,
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

    let handleSubmit= async(e)=>{
      e.preventDefault()
      console.log(data)
      try{
        let payload={
            address,city,phone,pincode,id
        }
        await axiosInstance.put(`/branches/update/${id}`,payload,
        {headers : {Authorization: `Bearer ${token}`}})
        alert(`sucessfully updated`)
        navigate(`/adminDashboard/viewBranch`)
      }catch{
        console.log("unable to update data")
      }
    }

  return (
    <div>
      <form action=""  style={{textAlign:"center"}} id='form' onSubmit={handleSubmit}>
        <div className='container'>
            <h3>UPDATE BRANCH</h3>
            <div className='signup_details'>
                <div className='signup_user'>
                <label htmlFor="address">ADDRESS : </label>
                <input type="text" placeholder='ADDRESS' id='address' name='address' value={address} onChange={handledata}/> <br /> <br />
                </div>
                <div className='signup_user'>
                <label htmlFor="city">CITY : </label>
                <input type="text" placeholder='CITY' id='city' name='city' value={city} onChange={handledata}/> <br /> <br />
                </div>
                <div className='signup_user'>
                <label htmlFor="phone">PHONE : </label>
                <input type="number" placeholder='PHONE' id='phone' name='phone' value={phone} onChange={handledata}/> <br /> <br />
                </div>
                <div className='signup_user'>
                <label htmlFor="pincode">PINCODE : </label>
                <input type="NUMBER" placeholder='PINCODE' id='pincode' name='pincode' value={pincode} onChange={handledata}/> <br /> <br />
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

export default UpdateBranch
