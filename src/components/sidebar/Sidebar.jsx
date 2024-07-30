import React, { useState } from 'react';
import { FaBars, FaChalkboardTeacher, FaClipboardList, FaSchool, FaSignOutAlt, FaTimes, FaUserGraduate, FaBook, FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-gradient-to-tr from-indigo-800 to-purple-500 text-white font-bold h-screen transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className="flex justify-between items-center p-4">
        <span className={`${isOpen ? 'block' : 'hidden'} text-xl`}>Dashboard</span>
        <button onClick={toggleSidebar} className="focus:outline-none">
          {isOpen ? <FaTimes size={34} /> : <FaBars size={34} />}
        </button>
    </div>
    <nav className="mt-8 space-y-10">
      <Link to="/dashboard" className="flex items-center space-x-2 hover:bg-teal-600 p-2 rounded">
        <FaSchool size={34} />
        <span className={`${isOpen? 'inline' : 'hidden'} ml-2`}>Dashboard</span>
      </Link>
        <Link to="/teachers" className="flex items-center space-x-2 hover:bg-indigo-600 p-2 rounded">
        <FaChalkboardTeacher size={34} />
        <span className={`${isOpen ? 'inline' : 'hidden'} ml-2`}>Teacher</span>
        </Link>
        <Link to="/students" className="flex items-center space-x-2 hover:bg-teal-600 p-3 rounded transition-colors duration-200">
          <FaUserGraduate size={34} />
          <span className={`${isOpen ? 'inline' : 'hidden'} ml-2`}>Student</span>
        </Link>
        <Link to="/classes" className="flex items-center space-x-2 hover:bg-teal-600 p-3 rounded transition-colors duration-200">
          <FaSchool size={34} />
          <span className={`${isOpen ? 'inline' : 'hidden'} ml-2`}>Class</span>
        </Link>
        <Link to="/subjects" className="flex items-center space-x-2 hover:bg-teal-600 p-3 rounded transition-colors duration-200">
          <FaBook size={34} />
          <span className={`${isOpen ? 'inline' : 'hidden'} ml-2`}>Subject</span>
        </Link>
        <Link to="/attendance" className="flex items-center space-x-2 hover:bg-teal-600 p-3 rounded transition-colors duration-200">
          <FaClipboardList size={34} />
          <span className={`${isOpen ? 'inline' : 'hidden'} ml-2`}>Record Attendance</span>
        </Link>
        <Link to="/grades" className="flex items-center space-x-2 hover:bg-teal-600 p-3 rounded transition-colors duration-200">
          <FaGraduationCap size={34} />
          <span className={`${isOpen ? 'inline' : 'hidden'} ml-2`}>Manage Grades</span>
        </Link>
        <Link to="/reports" className="flex items-center space-x-2 hover:bg-indigo-600 p-2 rounded">
        <FaClipboardList size={34} />
        <span className={`${isOpen ? 'inline' : 'hidden'} ml-2`}>Reports</span>
        </Link>
        <Link to="/logout" className="flex items-center space-x-2 hover:bg-teal-600 p-3 rounded transition-colors duration-200">
          <FaSignOutAlt size={34} />
          <span className={`${isOpen ? 'inline' : 'hidden'} ml-2`}>Logout</span>
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
