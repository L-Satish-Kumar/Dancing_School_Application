import React, { useEffect, useState } from 'react'
import axiosInstance from '../Help/axiosInstances'
import { Link, useNavigate } from 'react-router-dom';

const ViewBranch = () => {
  let navigate=useNavigate()
    let [state,setState]=useState([])

    let token=localStorage.getItem('token')
    console.log(token)

    useEffect(()=>{
      
      let fetchData = async()=>{
        try{
          let {data}=await axiosInstance.get("/branches/getall",{
           headers : {Authorization : `Bearer ${token}`}})

          let finalData=data.data
          console.log(finalData);
          setState(finalData)
         }
         catch{
          console.log("unbale to fetch data")
        }
      }

      fetchData();

    },[])

    let handleDelete=async (x) =>{
      console.log("Good afternoon",x);
      await axiosInstance.delete(`/branches/delete/${x}`,
      {headers : {Authorization : `Bearer ${token}`}})
      window.location.assign(`/adminDashboard/viewBranch`)

  }
  return (
    <>
     <h4 style={{textAlign:"center" , padding:"15px",fontSize:"45px",color:"aliceblue"} }>Total number of Branches : {state.length}</h4>
    <div className='main-container'>
     {
      state.map((x)=>{
        return (
          <div key={x.di} className='card-details'>
              <label htmlFor="">Branch Id : {x.id} </label>
              <label htmlFor="">Address : {x.address} </label>
              <label htmlFor="">City : {x.city}</label>
              <label htmlFor="">Phone : {x.phone}</label>
              <label htmlFor="">Pincode : {x.pincode}</label>

              <button ><Link to={`/adminDashboard/viewBranch/updateBranch/${x.id}`}>Update Branch</Link></button>
              <button><Link to={`/adminDashboard/viewBranch/addCourse/${x.id}`}>Add Course</Link></button>
              <button onClick={()=>{handleDelete(x.id)}}>Delete</button>
          </div>
        )
      })
     }
    </div>
    </>
  )
}

export default ViewBranch
