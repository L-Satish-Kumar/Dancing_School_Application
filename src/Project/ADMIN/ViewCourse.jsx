import React, { useEffect, useState } from 'react'
import axiosInstance from '../Help/axiosInstances'
import { Link, useNavigate } from 'react-router-dom';

const ViewCourse = () => {

    let navigate=useNavigate()
    let [state,setState]=useState([])

    let token=localStorage.getItem('token')
    console.log(token)

    useEffect(()=>{
    let fetchData = async()=>{
        try{
        let {data}=await axiosInstance.get("/dancecourses/getall",{
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
    await axiosInstance.delete(`/dancecourses/delete/${x}`,
    {headers : {Authorization : `Bearer ${token}`}})
    window.location.assign(`/adminDashboard/viewCourse`)
  }

  return (
    <>
    <h4 style={{textAlign:"center" , padding:"15px",fontSize:"45px",color:"aliceblue"} }>Total number of Course : {state.length}</h4>
   <div className='main-container'>
    {
     state.map((x)=>{
       return (
         <div key={x.di} className='card-details'>
             <label htmlFor="">Course Id : {x.id} </label>
             <label htmlFor="">Course Duration : {x.courseDurationInMonths} </label>
             <label htmlFor="">Fee : {x.fee}</label>
             <label htmlFor="">Image Data : {x.imagedata}</label>
             <label htmlFor="">type : {x.type}</label>

             <button ><Link to={`/adminDashboard/viewCourse/updateCourse/${x.id}`}>Update Course</Link></button>
             <button onClick={()=>{handleDelete(x.id)}}>Delete</button>
         </div>
       )
     })
    }
   </div>
   </>
  )
}

export default ViewCourse
