import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import { Route, Router, Routes } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import TeacherForm from '../components/teacher/TeacherForm'


const Admin = () => {
  return (
    <div className="flex">
    <Router>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/teachers' element={<TeacherForm/>}/>
        
      </Routes>
    </Router>
  </div>
  )
}

export default Admin
