import React from 'react'
import { useState } from 'react';
import { FaBars, FaChalkboardTeacher, FaClipboardList, FaHome, FaPoll, FaSchool, FaSignOutAlt, FaTimes, FaUniversity, FaUserGraduate } from 'react-icons/fa'
import { FaBook, FaHouse, FaPersonCircleCheck, FaPersonMilitaryPointing, FaUserLock } from 'react-icons/fa6'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <div className='w-64 bg-gray-800 fixed h-full px-4 py-2'>

    //     <div className='my-2 mb-4'>
    //         <h1 className='text-2x text-white font-bold'> Admin Dashboard</h1>
    //     </div>
    //     <hr />
    //     <ul className='mt-3 text-white font-bold'>
    //         <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 mt-6'>
    //             <a href="" className='px-3'>
    //                 <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
    //                 Home
    //             </a>
    //         </li> <br />

    //         <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 mt-6'>
    //             <a href="" className='px-3'>
    //                 <FaChalkboardTeacher className='inline-block w-6 h-6 mr-2 -mt-2'></FaChalkboardTeacher>
    //                 Teacher
    //             </a>
    //         </li><br />
    //         <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 mt-6'>
    //             <a href="" className='px-3'>
    //                 <FaPersonCircleCheck className='inline-block w-6 h-6 mr-2 -mt-2'></FaPersonCircleCheck>
    //                 Student
    //             </a>
    //         </li><br />
    //         <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 mt-6'>
    //             <a href="" className='px-3'>
    //                 <FaUniversity className='inline-block w-6 h-6 mr-2 -mt-2'></FaUniversity>
    //                 Classes
    //             </a>
    //         </li><br />
    //         <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 mt-6'>
    //             <a href="" className='px-3'>
    //                 <FaBook className='inline-block w-6 h-6 mr-2 -mt-2'></FaBook>
    //                 Subject
    //             </a>
    //         </li><br />
    //         <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 mt-6'>
    //             <a href="" className='px-3'>
    //                 <FaPoll className='inline-block w-6 h-6 mr-2 -mt-2'></FaPoll>
    //                 Reports
    //             </a>
    //         </li>
    //         <br />
    //         <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 mt-6'>
    //             <a href="" className='px-3'>
    //                 <FaUserLock className='inline-block w-6 h-6 mr-2 -mt-2'></FaUserLock>
    //                 Logout
    //             </a>
    //         </li>

    //     </ul>
    // </div>
    <div className={`bg-gradient-to-tr from-indigo-500 to-purple-800 text-white font-bold h-full min-h-screen transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
    <div className="flex justify-between items-center p-4">
        <span className={`${isOpen ? 'block' : 'hidden'} text-xl`}>Dashboard</span>
        <button onClick={toggleSidebar} className="focus:outline-none">
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
    </div>
    <nav className="space-y-4">
        <Link to="/" className="flex items-center space-x-2 hover:bg-indigo-600 p-2 rounded">
        <FaChalkboardTeacher size={20} />
        <span className={`${isOpen ? 'inline' : 'hidden'} ml-2`}>Teacher</span>
        </Link>
        <Link to="/students" className="flex items-center space-x-2 hover:bg-indigo-600 p-2 rounded">
        <FaUserGraduate size={20} />
        <span className={`${isOpen ? 'inline' : 'hidden'} ml-2`}>Student</span>
        </Link>
        <Link to="/classes" className="flex items-center space-x-2 hover:bg-indigo-600 p-2 rounded">
        <FaSchool size={20} />
        <span className={`${isOpen ? 'inline' : 'hidden'} ml-2`}>Class</span>
        </Link>
        <Link to="/subjects" className="flex items-center space-x-2 hover:bg-indigo-600 p-2 rounded">
        <FaBook size={20} />
        <span className={`${isOpen ? 'inline' : 'hidden'} ml-2`}>Subject</span>
        </Link>
        <Link to="/reports" className="flex items-center space-x-2 hover:bg-indigo-600 p-2 rounded">
        <FaClipboardList size={20} />
        <span className={`${isOpen ? 'inline' : 'hidden'} ml-2`}>Reports</span>
        </Link>
        <Link to="/logout" className="flex items-center space-x-2 hover:bg-indigo-600 p-2 rounded">
        <FaSignOutAlt size={20} />
        <span className={`${isOpen ? 'inline' : 'hidden'} ml-2`}>Logout</span>
        </Link>
    </nav>
    </div>
  )
}

export default Sidebar;
