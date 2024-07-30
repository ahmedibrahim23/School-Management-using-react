import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import { Route, Router, Routes } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import TeacherForm from '../components/teacher/TeacherForm'
import TeacherList from '../components/teacher/TeacherList'
import TeacherDetail from '../components/teacher/TeacherDatail'
import EditTeacherForm from '../components/teacher/EditTeacherForm'


const Admin = () => {
  return (
    <div className="flex">
    <Router>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/teachers' element={<TeacherList/>}/>
        <Route path='/teachers/new' element={<TeacherForm/>}/>
        <Route path='/details/:id' element={<TeacherDetail/>}/>
        <Route path='/details/:id' element={<TeacherDetail/>}/>
        <Route path="/editteacher/:id" element={<EditTeacherForm />} />
      </Routes>
    </Router>
  </div>
  )
}

export default Admin
