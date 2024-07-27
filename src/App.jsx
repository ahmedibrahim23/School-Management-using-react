import { useState } from 'react'
import'./index.css'
import Sidebar from './components/sidebar/Sidebar'
import Admin from './dashBoards/Admin'
import ClassForm from './components/class/ClassForm'
import SubjectForm from './components/subject/SubjectForm'
import StudentForm from './components/student/StudentForm'
import StudentList from './components/student/StudentList'
import StudentDetail from './components/student/StudentDetail'
import TeacherDatail from './components/teacher/TeacherDatail'
import TeacherForm from './components/teacher/TeacherForm'
import TeacherList from './components/teacher/TeacherList'
import ClassList from './components/class/ClassList'
import SubjectList from './components/subject/SubjectList'


function App() {
  return (
    <div className=" flex">
      <Admin/>
      {/* <ClassForm/> */}
      {/* <ClassList/> */}
      {/* <SubjectForm/> */}
      {/* <SubjectList/> */}
      {/* <StudentForm/> */}
      {/* <StudentList/> */}
      {/* <StudentDetail/> */}
      {/* <TeacherDatail/> */}
      {/* <TeacherForm/> */}
      {/* <TeacherList/> */}
     {/* <Sidebar/> */}
    </div>
  )
}

export default App;
