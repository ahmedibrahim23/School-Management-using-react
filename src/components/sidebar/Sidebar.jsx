import React from 'react'
import { FaChalkboardTeacher, FaHome, FaPoll, FaUniversity } from 'react-icons/fa'
import { FaBook, FaHouse, FaPersonCircleCheck, FaPersonMilitaryPointing, FaUserLock } from 'react-icons/fa6'

const Sidebar = () => {
  return (
    <div className='w-64 bg-gray-800 fixed h-full px-4 py-2'>

        <div className='my-2 mb-4'>
            <h1 className='text-2x text-white font-bold'> Admin Dashboard</h1>
        </div>
        <hr />
        <ul className='mt-3 text-white font-bold'>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 mt-6'>
                <a href="" className='px-3'>
                    <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
                    Home
                </a>
            </li> <br />

            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 mt-6'>
                <a href="" className='px-3'>
                    <FaChalkboardTeacher className='inline-block w-6 h-6 mr-2 -mt-2'></FaChalkboardTeacher>
                    Teacher
                </a>
            </li><br />
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 mt-6'>
                <a href="" className='px-3'>
                    <FaPersonCircleCheck className='inline-block w-6 h-6 mr-2 -mt-2'></FaPersonCircleCheck>
                    Student
                </a>
            </li><br />
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 mt-6'>
                <a href="" className='px-3'>
                    <FaUniversity className='inline-block w-6 h-6 mr-2 -mt-2'></FaUniversity>
                    Classes
                </a>
            </li><br />
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 mt-6'>
                <a href="" className='px-3'>
                    <FaBook className='inline-block w-6 h-6 mr-2 -mt-2'></FaBook>
                    Subject
                </a>
            </li><br />
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 mt-6'>
                <a href="" className='px-3'>
                    <FaPoll className='inline-block w-6 h-6 mr-2 -mt-2'></FaPoll>
                    Reports
                </a>
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
  )
}

export default Sidebar

