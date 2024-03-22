import React from 'react'
import './global.css'
import 'boxicons'
import Nav from './Nav'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import About from './About'
import Home from './Home'
import Gallary from './Gallary'
import Admin from './ADMIN/Admin'
import ProtectedRouter from './ProtectedRouter/ProtectedRouter'
import AdminDashboard from './ADMIN/AdminDashboard'
import AddManager from './ADMIN/AddManager'
import ViewManager from './ADMIN/ViewManager'
import ViewAcademyEachManager from './ADMIN/ViewAcademyEachManager'
import UpdateManager from './ADMIN/UpdateManager'
import AddAcademy from './ADMIN/AddAcademy'
import ViewAcademy from './ADMIN/ViewAcademy'
import UpdateViewManager from './ADMIN/UpdateViewManager'
import AddBranch from './ADMIN/AddBranch'
import ViewBranch from './ADMIN/ViewBranch'
import UpdateBranch from './ADMIN/UpdateBranch'
import AddCourse from './ADMIN/AddCourse'
import ViewCourse from './ADMIN/ViewCourse'
import UpdateCourse from './ADMIN/UpdateCourse'
import ViewEachCourse from './ADMIN/ViewEachCourse'
import Register from './Register'


const App = () => {
  return (
    <div>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<ProtectedRouter> <Home/> </ProtectedRouter>}/>
          <Route path='/about' element={<ProtectedRouter> <About/> </ProtectedRouter>}/>
          <Route path='/gallary' element={<ProtectedRouter> <Gallary/> </ProtectedRouter>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/adminsignup' element={<Admin/>}/>

          <Route path='/adminDashboard' element={<AdminDashboard/>}>
            <Route path='/adminDashboard/addManager' element={<AddManager/>}/>

            <Route path='/adminDashboard/viewManager' element={<ViewManager/>}/>
            <Route path='/adminDashboard/viewManager/viewacademyeachmanager/:id' element={<ViewAcademyEachManager/>}/>
            <Route path='/adminDashboard/viewManager/updateAcademyManager/:id' element={<UpdateManager/>}/>
            <Route path='/adminDashboard/viewManager/addAcademyManager/:id' element={<AddAcademy/>}/>

            <Route path='/adminDashboard/viewAcademy' element={<ViewAcademy/>}/>
            <Route path='/adminDashboard/viewAcademy/viewupdateManager/:id' element={<UpdateViewManager/>}/>
            <Route path='/adminDashboard/viewAcademy/addBranch/:id' element={<AddBranch/>}/>

            <Route path='/adminDashboard/viewBranch' element={<ViewBranch/>}/>
            <Route path='/adminDashboard/viewBranch/updateBranch/:id' element={<UpdateBranch/>}/>
            <Route path='/adminDashboard/viewBranch/addCourse/:id' element={<AddCourse/>}/>

            <Route path='/adminDashboard/viewCourse' element={<ViewCourse/>}/>
            <Route path='/adminDashboard/viewCourse/updateCourse/:id' element={<UpdateCourse/>}/>

          </Route>
          <Route path='/viewEachCourse/:id' element={<ViewEachCourse/>}/>
          <Route path='/viewCourse/viewEachCourse/Register/:id' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
