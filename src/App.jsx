import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClassForm from './components/class/ClassForm';
import SubjectForm from './components/subject/SubjectForm';
import StudentForm from './components/student/StudentForm';
import TeacherForm from './components/teacher/TeacherForm';
import Admin from './dashBoards/Admin';
import Sidebar from './components/sidebar/Sidebar';
import './global.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/home" element={<Admin/>} />
            <Route path="/student" element={<StudentForm />} />
            <Route path="/teacher" element={<TeacherForm />} />
            <Route path="/class" element={<ClassForm />} />
            <Route path="/subject" element={<SubjectForm />} />
            {/* <Route path="/report" element={<GenerateReports />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
