import React from 'react'
import '../CSS/Admin.css'
import AdminSidebar from './AdminSidebar'
import AdminMainbar from './AdminMainbar'
import Nav from '../Nav'

const AdminDashboard = () => {
  return (
    <div>
      <section className='admin_dashboard'>
        <div className='Adminarticle'>
          <AdminSidebar/>
          <AdminMainbar/>
        </div>
      </section>
    </div>
  )
}

export default AdminDashboard
