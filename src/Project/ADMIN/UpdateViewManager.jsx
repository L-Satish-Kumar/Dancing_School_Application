import React, { useEffect, useState } from 'react'
import axiosInstance from '../Help/axiosInstances'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateViewManager = () => {

    let navigate=useNavigate()
    let {id}=useParams()
    let token=localStorage.getItem('token')

    let [data,setData]=useState({
        academyName:"",
        description:"",
        email:"",
        contact:"",
    })

    let {academyName,description,email,contact}=data

    let handledata=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setData({...data,[name]:value})
    }

    useEffect(()=>{
        let fetchData=async()=>{
            try{
                let {data}=await axiosInstance.get(`/academies/get/${id}`,
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
                academyName,description,email,contact,id
            }
            let finalData=await axiosInstance.put("/academies/update",payload,
            {headers:{Authorization : ` Bearer ${token}`}})
            console.log(finalData)
            alert(`successfully updated the data`)
            navigate(`/adminDashboard/viewAcademy`)
        }
        catch{
            console.log("unable to connect to server")
        }
    }

  return (
    <div>
      <form action=""  style={{textAlign:"center"}} id='form' onSubmit={handleSubmit}>
        <div className='container'>
            <h3>UPDATE ACADEMY</h3>
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

export default UpdateViewManager
