import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';

// import TeacherNav from '../components/navbar/TeacherNav'

import TeacherList from '../components/teacher/TeacherList';
import TeacherForm from '../components/teacher/TeacherForm';
import EditTeacherForm from '../components/teacher/EditTeacherForm';

import StudentList from '../components/student/StudentList';

import StudentForm from '../components/student/StudentForm';

import EditStudentForm from '../components/student/EditStudentForm';


import ClassList from '../components/class/ClassList';

import SubjectList from '../components/subject/SubjectList';

import ClassForm from '../components/class/ClassForm';
import TeacherDetils from '../components/teacher/TeacherDetils';

// import Reports from '../components/reports/Reports';



const Admin = () => {
  return (
    <div className='w-full' >
      <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />   
        <div className="flex flex-grow">
          <Sidebar/>

        <div className="flex-1 p-4 transition-all duration-300">
          <Routes>
            <Route path="/" element={<div>Dashboard overviews</div>}/>
            <Route path="/teachers" element={<TeacherList/>} />
            <Route path="/teachers/details/:id" element={<TeacherDetils/>} />
            <Route path="/teachers/new" element={<TeacherForm />} />
            <Route path="/editteacher/:id" element={<EditTeacherForm />} />
            {/* Add routes for Student, Class, Subject, Reports, etc. */}
            <Route path="/students" element={<StudentList/>} />
            <Route path="/students/new" element={<StudentForm/>}/>
            <Route path='/editstudent/:id' element={<EditStudentForm/>}/>
            <Route path="/classes" element={<ClassList/>} />
            <Route path="/classes/new" element={<ClassForm/>} />
            <Route path="/subjects" element={<SubjectList/>} />
            <Route path="/reports" element={<div>Reports Component</div>} />
            <Route path="/logout" element={<div>Logout Component</div>} />
          </Routes>
        </div>
        </div>
      </Router>
    </div>
      
    </div>
  )
}

export default Admin
