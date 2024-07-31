import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TeacherList from '../components/teacher/TeacherList';
import TeacherForm from '../components/teacher/TeacherForm';
import TeacherDetails from '../components/teacher/TeacherDetils'; // Correct typo in import
import EditTeacherForm from '../components/teacher/EditTeacherForm';
import StudentList from '../components/student/StudentList';
import StudentForm from '../components/student/StudentForm';
import StudentDetail from '../components/student/StudentDetail';
import EditStudentForm from '../components/student/EditStudentForm';
import ClassList from '../components/class/ClassList';
import ClassForm from '../components/class/ClassForm';
import SubjectList from '../components/subject/SubjectList';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import AttendanceForm from '../components/attendance/AttendanceForm';
import SubjectForm from '../components/subject/SubjectForm';
import FeeForm from '../components/fee/FeeForm';
import FeeList from '../components/fee/FeeList';
import AttendanceRecord from '../components/attendance/AttendanceRecord';
import Dashboard from '../components/Admin_overiews/Dashboard';
import NotFound from '../components/NotFound';

const Admin = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-1 p-4 transition-all duration-300">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/teachers" element={<TeacherList />} />
            <Route path="/teachers/new" element={<TeacherForm />} />
            <Route path="/teachers/:id" element={<TeacherDetails />} /> {/* Use :id for dynamic segments */}
            <Route path="/teachers/edit/:id" element={<EditTeacherForm />} /> {/* Consistent route naming */}
            <Route path="/students" element={<StudentList />} />
            <Route path="/students/new" element={<StudentForm />} />
            <Route path="/students/:id" element={<StudentDetail />} />
            <Route path="/students/edit/:id" element={<EditStudentForm />} />
            <Route path="/classes" element={<ClassList />} />
            <Route path="/classes/new" element={<ClassForm />} />
            <Route path="/subjects" element={<SubjectList />} />
            <Route path="/subjects/new" element={<SubjectForm />} />
            <Route path="/attendance" element={<AttendanceForm />} />
            <Route path="/attendance/record/:id" element={<AttendanceRecord />} />
            <Route path="/fee" element={<FeeList />} />
            <Route path="/fee/new" element={<FeeForm />} />
            <Route path="/reports" element={<div>Reports Component</div>} />
            <Route path="/logout" element={<div>Logout Component</div>} />
            <Route path="*" element={<NotFound />} /> 

          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
