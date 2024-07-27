import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadTeachers();
  }, []);

  const loadTeachers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/teachers");
      setTeachers(response.data);
    } catch (error) {
      console.error("Error fetching teachers:", error);
      setError(error.response ? error.response.data : "Server Error");
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-600 to-indigo-100'>
      <div className="p-4">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="mb-4 text-xl font-bold text-gray-800">Teacher List</h2>
          <div className="mb-4">
            <Link to="/teachers/new"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md text-sm transition duration-300"
            >
              Add Teacher
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-md">
              <thead className="bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-bold">
                <tr>
                  <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">ID</th>
                  <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Full Name</th>
                  <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Email</th>
                  <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Phone</th>
                  <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((teacher) => (
                  <tr key={teacher.id} className="text-sm font-normal border-t">
                    <td className="py-2 px-4 border-b text-xs sm:text-sm">{teacher.id}</td>
                    <td className="py-2 px-4 border-b text-xs sm:text-sm">{teacher.fullName}</td>
                    <td className="py-2 px-4 border-b text-xs sm:text-sm truncate">{teacher.email}</td>
                    <td className="py-2 px-4 border-b text-xs sm:text-sm">{teacher.phone}</td>
                    <td className="py-2 px-4 border-b text-xs sm:text-sm">
                      <Link
                        to={`/details/${teacher.id}`}
                        className="bg-blue-5s00 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-md text-xs sm:text-sm transition duration-300"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherList;
