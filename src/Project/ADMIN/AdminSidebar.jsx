import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <div className='Admin-sidebar'>
      <div className='admin-sidebar-bg'>
        <h1>AdminSidebar</h1>
        <ul>
          <li><Link to={'/adminDashboard/addManager'}>Add Manager</Link></li>
          <li><Link to={'/adminDashboard/viewManager'}>View Manager</Link></li>
          <li><Link to={'/adminDashboard/viewAcademy'}>View Academy</Link></li>
          <li><Link to={'/adminDashboard/viewBranch'}>View Branch</Link></li>
          <li><Link to={'/adminDashboard/viewCourse'}>View Course</Link></li>
          <li><Link to={'/'}>Home</Link></li>
        </ul>
      </div>

    </div>
  )
}

export default AdminSidebar
