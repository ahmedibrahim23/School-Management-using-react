// TeacherDashboard.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeacherNav from '../components/navbar/TeacherNav';
import TeacherSidebar from '../components/sidebar/TeacherSidebar';

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
              <Route path="/grades" element={<div>Record Attendance</div>} />
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