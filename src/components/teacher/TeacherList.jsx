import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    loadTeachers();
  }, []);

  useEffect(() => {
    filterTeachers(searchTerm);
  }, [searchTerm, teachers]);

  const loadTeachers = async () => {
    try {
      const response = await axios.get("https://backend-school-6fb386e3d920.herokuapp.com/api/teachers");
      setTeachers(response.data);
      setFilteredTeachers(response.data);
    } catch (error) {
      console.error("Error fetching teachers:", error);
      setError(error.response ? error.response.data : "Server Error");
    }
  };

  const filterTeachers = (term) => {
    const filtered = teachers.filter(teacher =>
      teacher.id.toString().includes(term) ||
      teacher.fullName.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredTeachers(filtered);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='min-h-screen bg-gray-100'>
      <div className="p-4">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="mb-4 text-xl font-bold text-gray-800">Teacher List</h2>
          <div className="mb-4 flex items-center">
            <Link to="/admin-dashboard/teachers/new"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md text-sm transition duration-300"
            >
              Add Teacher
            </Link>
            <div className="flex items-center ml-4">
              <FaSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search by ID or name"
                className="border border-gray-300 rounded-md py-2 px-4"
              />
            </div>
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
                {filteredTeachers.map((teacher) => (
                  <tr key={teacher.id} className="text-sm font-normal border-t">
                    <td className="py-2 px-4 border-b text-xs sm:text-sm">{teacher.id}</td>
                    <td className="py-2 px-4 border-b text-xs sm:text-sm">{teacher.fullName}</td>
                    <td className="py-2 px-4 border-b text-xs sm:text-sm truncate">{teacher.email}</td>
                    <td className="py-2 px-4 border-b text-xs sm:text-sm">{teacher.phone}</td>
                    <td className="py-2 px-4 border-b text-xs sm:text-sm">
                      <Link
                        to={`/admin-dashboard/teachers/${teacher.id}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-md text-xs sm:text-sm transition duration-300"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {error && <div className="text-red-500 mt-4">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default TeacherList;
