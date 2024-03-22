import React, { useEffect, useState } from 'react'
import axiosInstance from '../Help/axiosInstances'
import { Link, useNavigate, useParams } from 'react-router-dom';

const ViewEachCourse = () => {
    let{id}=useParams()
    let navigate=useNavigate()
    let [state,setState]=useState([])

    let token=localStorage.getItem('token')
    console.log(token)

    useEffect(()=>{
    let fetchData = async()=>{
        try{
        let {data}=await axiosInstance.get(`/dancecourses/getbybranchid/${id}`,{
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

let handle_cid=(cid)=>{
  localStorage.setItem(`cid`,`${cid}`)
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

             <button onClick={()=>{handle_cid(x.id)}}><Link to={`/viewCourse/viewEachCourse/Register/${x.id}`}>Register</Link></button>
         </div>
       )
     })
    }
   </div>
   </>
  )
}

export default ViewEachCourse
