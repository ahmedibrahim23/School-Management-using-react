import React, { useState } from 'react';
import {
  FaBars, FaTimes, FaChalkboardTeacher, FaCalendarAlt, FaClipboardList, FaGraduationCap, FaBullhorn, FaUserFriends,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TeacherSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleTeacherSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-gradient-to-tr from-indigo-800 to-purple-500 text-white font-bold h-screen transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className="flex justify-between items-center p-4">
        <span className={`${isOpen ? 'block' : 'hidden'} text-xl`}>Teacher Panel</span>
        <button onClick={toggleTeacherSidebar} className="focus:outline-none">
          {isOpen ? <FaTimes size={34} /> : <FaBars size={34} />}
        </button>
      </div>
      <nav className="mt-8 space-y-10">
        <Link to="/dashboard" className="flex items-center space-x-2 hover:bg-teal-600 p-3 rounded transition-colors duration-200">
          <FaChalkboardTeacher size={34} />
          <span className={`${isOpen ? 'inline' : 'hidden'} ml-2`}>Dashboard</span>
        </Link>
        <Link to="/timetables" className="flex items-center space-x-2 hover:bg-teal-600 p-3 rounded transition-colors duration-200">
          <FaCalendarAlt size={34} />
          <span className={`${isOpen ? 'inline' : 'hidden'} ml-2`}>Class Timetables</span>
        </Link>
        <Link to="/attendance" className="flex items-center space-x-2 hover:bg-teal-600 p-3 rounded transition-colors duration-200">
          <FaClipboardList size={34} />
          <span className={`${isOpen ? 'inline' : 'hidden'} ml-2`}>Record Attendance</span>
        </Link>
        <Link to="/grades" className="flex items-center space-x-2 hover:bg-teal-600 p-3 rounded transition-colors duration-200">
          <FaGraduationCap size={34} />
          <span className={`${isOpen ? 'inline' : 'hidden'} ml-2`}>Manage Grades</span>
        </Link>
        <Link to="/announcements" className="flex items-center space-x-2 hover:bg-teal-600 p-3 rounded transition-colors duration-200">
          <FaBullhorn size={34} />
          <span className={`${isOpen ? 'inline' : 'hidden'} ml-2`}>Announcements</span>
        </Link>
        <Link to="/profiles" className="flex items-center space-x-2 hover:bg-teal-600 p-3 rounded transition-colors duration-200">
          <FaUserFriends size={34} />
          <span className={`${isOpen ? 'inline' : 'hidden'} ml-2`}>Teacher Profiles</span>
        </Link>
      </nav>
    </div>
  );
};

export default TeacherSidebar;
