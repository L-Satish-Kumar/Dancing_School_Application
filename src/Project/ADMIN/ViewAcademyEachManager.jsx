import React, { useEffect, useState } from 'react'
import axiosInstance from '../Help/axiosInstances'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ViewAcademyEachManager = () => {
    let {id}=useParams()
    let [state,setState]=useState([])
    let navigate=useNavigate()

    let token=localStorage.getItem('token')
    console.log(token)

    useEffect(()=>{
      
        let fetchData = async()=>{
        try{
          let {data}=await axiosInstance.get(`/academymanagers/get/${id}`,
          { headers : {Authorization : `Bearer ${token}`}})
          console.log(data)

          let finalData=data.data
          console.log(finalData);
          setState(finalData)
         }
         catch{
          console.log("unbale to connect")
        }
      }

      fetchData();

    },[])

    let handleDelete=async (id) =>{
        console.log("Good afternoon",id);
        await axiosInstance.delete(`/academymanagers/delete/${id}`,
        {headers : {Authorization : `Bearer ${token}`}})
        navigate("/adminDashboard/viewManager")

    }

  return (
    <div className='main-container'>
     {
            <>
          <div className='card-details'>
            <label htmlFor="">Name : {state.userName} </label>
            <label htmlFor="">Email : {state.email}</label>
            <label htmlFor="">Phone : {state.phone}</label>
            <label htmlFor="">Gender : {state.gender}</label>

            <button ><Link to={`/adminDashboard/viewManager/updateAcademyManager/${state.id}`}>Update</Link></button>
            <button><Link to={`/adminDashboard/viewManager/addAcademyManager/${state.id}`}>Add Acedamy</Link></button>
            <button onClick={()=>{handleDelete(state.id)}}>Delete</button>
          </div>
          </>
     }
    </div>
  )
}

export default ViewAcademyEachManager
