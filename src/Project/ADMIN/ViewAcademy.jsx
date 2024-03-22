import React, { useEffect, useState } from 'react'
import axiosInstance from '../Help/axiosInstances'
import { Link, useNavigate } from 'react-router-dom';

const ViewAcademy = () => {
    let navigate=useNavigate()
    let [state,setState]=useState([])

    let token=localStorage.getItem('token')
    console.log(token)

    useEffect(()=>{
      
        let fetchData = async()=>{
        try{
          let {data}=await axiosInstance.get("/academies/getall",{
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
      await axiosInstance.delete(`/academies/delete/${x}`,
      {headers : {Authorization : `Bearer ${token}`}})
      window.location.assign("/adminDashboard/viewAcademy")

  }
  return (
    <>
     <h4 style={{textAlign:"center" , padding:"15px",fontSize:"45px",color:"aliceblue"} }>Total number of Manager is {state.length}</h4>
    <div className='main-container'>
     {
      state.map((x)=>{
        return (
          <div key={x.di} className='card-details'>
              <label htmlFor="">Id : {x.id} </label>
              <label htmlFor="">Name : {x.academyName} </label>
              <label htmlFor="">Email : {x.description}</label>
              <label htmlFor="">Phone : {x.email}</label>
              <label htmlFor="">Gender : {x.contact}</label>

              <button ><Link to={`/adminDashboard/viewAcademy/viewupdateManager/${x.id}`}>Update</Link></button>
              <button><Link to={`/adminDashboard/viewAcademy/addBranch/${x.id}`}>Add Branch</Link></button>
              <button onClick={()=>{handleDelete(x.id)}}>Delete</button>
          </div>
        )
      })
     }
    </div>
    </>
  )
}

export default ViewAcademy
