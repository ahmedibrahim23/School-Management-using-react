import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeacherList from '../components/teacher/TeacherList';
import TeacherForm from '../components/teacher/TeacherForm';
import TeacherDetils from '../components/teacher/TeacherDetils';
import EditTeacherForm from '../components/teacher/EditTeacherForm';
import StudentList from '../components/student/StudentList';
import StudentForm from '../components/student/StudentForm';

import StudentDetail from '../components/student/StudentDetail';
import EditStudentForm from '../components/student/EditStudentForm';

import ClassList from '../components/class/ClassList';
import ClassForm from '../components/class/ClassForm';

import SubjectList from '../components/subject/SubjectList';


import Sidebar from '../components/sidebar/Sidebar';


import Navbar from '../components/navbar/Navbar'
import AttendanceForm from '../components/attendance/AttendanceForm';
import GradeManagement from '../components/exam/GradeManagement';
import GradeEntryForm from '../components/exam/GradeEntryForm';
import EditGradeForm from '../components/exam/EditGradeForm';

const Admin = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <Router>
      <Navbar />   
      <div className="flex flex-grow">
        {/* <TeacherSidebar/> */}

       <Sidebar />
      <div className="flex-1 p-4 transition-all duration-300">
        <Routes>
          <Route path="/" element={<div>Dashboard overviews</div>}/>
          <Route path="/teachers" element={<TeacherList />} />
          <Route path="/details/:id" element={<TeacherDetils />} />
          <Route path="/teachers/new" element={<TeacherForm />} />
          <Route path="/editteacher/:id" element={<EditTeacherForm />} />
          {/* Add routes for Student, Class, Subject, Reports, etc. */}
          <Route path="/students" element={<StudentList/>} />
          <Route path="/students/new" element={<StudentForm/>}/>
          <Route path='/stdDetails/:id' element={<StudentDetail/>}/>
          <Route path='/editstudent/:id' element={<EditStudentForm/>}/>
          <Route path="/classes" element={<ClassList/>} />
          <Route path="/classes/new" element={<ClassForm/>} />
          <Route path="/subjects" element={<SubjectList/>} />
          <Route path="/attendance" element={<AttendanceForm/>} />
          <Route path="/grades" element={<GradeManagement/>} />
          <Route path='/grades/new' element={<GradeEntryForm/>}/>
          <Route path='/grades/:id' element={<EditGradeForm/>}/>
          <Route path="/reports" element={<div>Reports Component</div>} />
          <Route path="/logout" element={<div>Logout Component</div>} />
        </Routes>
      </div>
      </div>
    </Router>
  </div>
  )
}

export default Admin
