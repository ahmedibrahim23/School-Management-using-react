// TeacherDashboard.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeacherNav from '../components/navbar/TeacherNav';
import TeacherSidebar from '../components/sidebar/TeacherSidebar';
import GradeManagement from '../components/exam/GradeManagement'
import GradeEntryForm from '../components/exam/GradeEntryForm'
import EditGradeForm from '../components/exam/EditGradeForm'
const TeacherDashboard = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <TeacherNav/>
        <div className="flex flex-grow">
            <TeacherSidebar/>
          <div className="flex-grow p-5 bg-gray-50">
            <Routes>
              <Route path="/dashboard" element={<div>Dashboard</div>} />
              <Route path="/timetables" element={<div>Class Timetables</div>} />
              <Route path="/attendance" element={<div>Record Attendance</div>} />
              <Route path="/grades" element={<GradeManagement/>} />
              <Route path='/grades/new' element={<GradeEntryForm/>}/>
              <Route path='/grades/:id' element={<EditGradeForm/>}/>
              <Route path="/announcements" element={<div>Announcements</div>} />
              <Route path="/profiles" element={<div>Teacher Profiles</div>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default TeacherDashboard;