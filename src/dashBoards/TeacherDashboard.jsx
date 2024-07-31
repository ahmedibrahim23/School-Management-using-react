import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TeacherNav from '../components/navbar/TeacherNav';
import TeacherSidebar from '../components/sidebar/TeacherSidebar';
import GradeManagement from '../components/exam/GradeManagement';
import GradeEntryForm from '../components/exam/GradeEntryForm';
import EditGradeForm from '../components/exam/EditGradeForm';
import AttendanceForm from '../components/attendance/AttendanceForm';
import ClassTimetable from '../components/classTable/ClassTimetable';
import Announcements from '../components/announcements/Announcements ';
import TeacherDashboardOverview from '../components/Admin_overiews/TeacherDashboardOverview';


const timetable = {
  Monday: ['Math', 'English', 'Biology', '', 'Physics', 'Afsoomali'],
  Tuesday: ['History', 'Math', '', 'Chemistry', '', 'PE'],
  Wednesday: ['English', '', 'Math', 'Biology', 'Afsoomali', 'History'],
  Saturday: ['Chemistry', 'biology', 'Physics', 'Math', '', 'Art'],
  Sunday: ['PE', 'History', 'English', '', 'Biology', 'Math'],
};

const TeacherDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TeacherNav />
      <div className="flex flex-grow">
        <TeacherSidebar />
        <div className="flex-grow p-5 bg-gray-50">
          <Routes>
          <Route path="dashboard" element={<TeacherDashboardOverview />} />
          <Route path="timetables" element={<ClassTimetable timetable={timetable} />} />
            <Route path="attendance" element={<AttendanceForm />} />
            <Route path="grades" element={<GradeManagement />} />
            <Route path="grades/new" element={<GradeEntryForm />} />
            <Route path="grades/:id" element={<EditGradeForm />} />
            <Route path="announcements" element={<Announcements />} />
            <Route path="profiles" element={<div>Teacher Profiles</div>} />

          </Routes>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
