import React, { useEffect, useState } from 'react'
import axiosInstance from '../Help/axiosInstances'
import { Link } from 'react-router-dom';

const ViewManager = () => {
    let [state,setState]=useState([])

    let token=localStorage.getItem('token')
    console.log(token)

    useEffect(()=>{
      
        let fetchData = async()=>{
        try{
          let {data}=await axiosInstance.get("/academymanagers/getall",{
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

  return (
    <div className='main-container'>
     {
      state.map((x)=>{
        return (
          <div key={x.di} className='card-details'>
             <label htmlFor="">Name : {x.userName} </label>
              <label htmlFor="">Email : {x.email}</label>
              <label htmlFor="">Phone : {x.phone}</label>
              <label htmlFor="">Gender : {x.gender}</label>
              <Link to={`/adminDashboard/viewManager/viewacademyeachmanager/${x.id}`}>
                <button>View</button></Link>
          </div>
        )
      })
     }
    </div>
  )
}

export default ViewManager
