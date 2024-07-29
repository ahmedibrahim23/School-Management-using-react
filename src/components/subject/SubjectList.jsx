import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const SubjectList = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const Subjects = [
      { Subject: 'Manth', subject_Id: '1' },
      { Subject: 'English', subject_Id: '2' },
      { Subject: 'Afsoomali', subject_Id: '3' },
      { Subject: 'Biology', subject_Id: '4' },
    ];
  
    const filteredTeachers = Subjects.filter(Subjects =>
        Subjects.Subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        Subjects.subject_Id.includes(searchQuery)
    );
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-600 to-indigo-100 w-full p-4'>
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="mb-4 text-xl font-bold text-gray-700">Subjects List</h2>
      <div className="mb-4 flex items-center">
        <div className="relative mr-4">
          <input
            type="text"
            className="border rounded-md py-2 pl-8 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
        <Link to='/subjects/new'
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md text-sm md:text-base transition duration-300"
            type="button"
          >
            Add Subject
          </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-md">
          <thead className="bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-bold">
            <tr>
              <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">ID</th>
              <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Subject-Name</th>
              <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTeachers.map((Subjects, index) => (
              <tr key={index} className="text-sm font-normal border-t">
                <td className="py-2 px-4 border-b text-xs sm:text-sm">{Subjects.subject_Id}</td>
                <td className="py-2 px-4 border-b text-xs sm:text-sm">{Subjects.Subject}</td>
                <td className="py-2 px-4 border-b text-xs sm:text-sm">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-md text-xs md:text-sm transition duration-300" type="button">
                    Edit
                  </button>
                  <button className="ml-2 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-md text-xs md:text-sm transition duration-300" type="button">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default SubjectList
