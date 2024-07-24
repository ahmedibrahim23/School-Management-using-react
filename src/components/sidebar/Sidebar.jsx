import React from 'react'
import { FaChalkboardTeacher, FaHome, FaPoll, FaUniversity } from 'react-icons/fa'
import { FaBook, FaHouse, FaPersonCircleCheck, FaPersonMilitaryPointing, FaUserLock } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-64 bg-gray-800 fixed h-full px-4 py-2'>

        <div className='my-2 mb-4'>
            <h1 className='text-2x text-white font-bold'> Admin Dashboard</h1>
        </div>
        <hr />
        <ul className='mt-3 text-white font-bold'>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 mt-6'>
            <Link to="/"><FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
            Home
            </Link> 
            </li> <br />

            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 mt-6'>

            <Link to="/teacher"> 
             <FaChalkboardTeacher className='inline-block w-6 h-6 mr-2 -mt-2'></FaChalkboardTeacher>
            Teacher
            </Link>    
            </li><br />
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 mt-6'>
                
            <Link to="/student" >
            <FaPersonCircleCheck className='inline-block w-6 h-6 mr-2 -mt-2'></FaPersonCircleCheck>
            Student
            </Link>
                
            </li><br />
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 mt-6'>
                <a href="" className='px-3'>
                    <FaUniversity className='inline-block w-6 h-6 mr-2 -mt-2'></FaUniversity>
                    Classes
                </a>
            </li><br />
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 mt-6'>
                
            <Link to="/subject"><FaBook className='inline-block w-6 h-6 mr-2 -mt-2'></FaBook>
            Subjects
            </Link>
                
            </li><br />
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 mt-6'>
            <Link to="/report"><FaPoll className='inline-block w-6 h-6 mr-2 -mt-2'></FaPoll>
            Reports</Link>
            </li>
            <br />
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 mt-6'>
                <a href="" className='px-3'>
                    <FaUserLock className='inline-block w-6 h-6 mr-2 -mt-2'></FaUserLock>
                    Logout
                </a>
            </li>

        </ul>
    </div>
    // <div className="sidebar">
    //   <h2>Admin Dashboard</h2>
    //   <ul>
    //     <li><Link to="/">Dashboard</Link></li>
    //     <li><Link to="/student">Manage Students</Link></li>
    //     <li><Link to="/teacher">Manage Teachers</Link></li>
    //     <li><Link to="/class">Manage Classes</Link></li>
    //     <li><Link to="/subject">Manage Subjects</Link></li>
    //     {/* <li><Link to="/report">Generate Reports</Link></li> */}
    //   </ul>
    // </div>
  )
}

export default Sidebar

