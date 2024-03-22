import React, { useEffect, useState } from 'react'
import video from './Resources/jujutsu.mp4'
import name from './Resources/name.png'
import axiosInstance from './Help/axiosInstances'
import { Link, useParams } from 'react-router-dom'
import homebg from './Resources/home-bg.jpg'
import sec_home from './Resources/home-2nd-bg.jpg'


const Home = () => {
  
  let[state,setState]=useState([])

  let token=localStorage.getItem('token')
  console.log(token)

  useEffect(()=>{

    let fetchData=async()=>{
        try{
            let {data}=await axiosInstance.get(`/branches/getall/`,{
                headers : {Authorization : `Bearer ${token}`}})

                let finalData=data.data
                console.log(finalData)
                setState(finalData)
        } catch{
            console.log(`unable to fetch data`)
        }
    }
    fetchData()

  },[])

  let handle_bid=(bid)=>{
    localStorage.setItem(`bid`,`${bid}`)
  }

  return (
    <>
    {/* <div id='bg-video'>
      <video src={video} autoPlay controls loop id='video'></video>
    </div> */}
    {/* <div className='name'>
        <img src={name} alt="" />
            <strong>82% Match</strong>
            <label>2023</label>
            <label>12 episodes</label>
    </div> */}

    <div className='home-bg'>
      <img src={homebg} alt="" />
    </div>

    <div className='sec-home-bg'>
      {/* <img src={sec_home} alt="" /> */}
    </div>

    <div className='main-container'>
        {state.map((x)=>{
            return (
                <div key={x.id} className='card-details'>
                    <label htmlFor="">Branch Id : {x.id} </label>
                    <label htmlFor="">Address : {x.address} </label>
                    <label htmlFor="">City : {x.city}</label>
                    <label htmlFor="">Phone : {x.phone}</label>
                    <label htmlFor="">Pincode : {x.pincode}</label>

                    <button onClick={()=>{handle_bid(x.id)}}><Link to={`/viewEachCourse/${x.id}`}>View Course</Link></button>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Home
