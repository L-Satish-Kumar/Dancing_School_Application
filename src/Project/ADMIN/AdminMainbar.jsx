import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminMainbar = () => {
  return (
    <>
    <div className='Admin-mainbar'>
      <div className='admin-main-bg'>
        <Outlet/>
      </div>
    </div>
    </>
  )
}

export default AdminMainbar
