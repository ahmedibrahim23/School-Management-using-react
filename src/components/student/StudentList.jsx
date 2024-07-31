import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    loadStudents();
  }, []);

  useEffect(() => {
    filterStudents(searchTerm);
  }, [searchTerm, students]);

  const loadStudents = async () => {
    try {
      const response = await axios.get("https://backend-school-cbcfe8928e29.herokuapp.com/api/students");
      setStudents(response.data);
      setFilteredStudents(response.data);
    } catch (error) {
      console.error("Error fetching students", error);
      setError(error.response ? error.response.data : "Server error");
    }
  };

  const filterStudents = (term) => {
    const filtered = students.filter(student =>
      student.fullname.toLowerCase().includes(term.toLowerCase()) ||
      student.email.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredStudents(filtered);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='min-h-screen bg-gray-100 w-full p-4'>
      <div className="p-4">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="mb-4 text-xl font-bold text-gray-800">Student List</h2>
          
          <div className="mb-4 flex items-center">
            <Link to='/admin-dashboard/students/new'
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md text-sm transition duration-300"
              type="button"
            >
              Add Student
            </Link>
            <div className="flex items-center ml-4">
              <FaSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search by name or email"
                className="border border-gray-300 rounded-md py-2 px-4"
              />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-md">
              <thead className="bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-bold">
                <tr>
                  <th className="py-2 px-4 border-b text-left text-xs md:text-sm">ID</th>
                  <th className="py-2 px-4 border-b text-left text-xs md:text-sm">Names</th>
                  <th className="py-2 px-4 border-b text-left text-xs md:text-sm">Phone</th>
                  <th className="py-2 px-4 border-b text-left text-xs md:text-sm">Email</th>
                  <th className="py-2 px-4 border-b text-left text-xs md:text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="text-sm font-normal border-t">
                    <td className="py-2 px-4 border-b text-xs md:text-sm">{student.id}</td>
                    <td className="py-2 px-4 border-b text-xs md:text-sm">{student.fullname}</td>
                    <td className="py-2 px-4 border-b text-xs md:text-sm">{student.phone}</td>
                    <td className="py-2 px-4 border-b text-xs md:text-sm">{student.email}</td>
                    <td className="py-2 px-4 border-b text-xs md:text-sm">
                      <Link to={`/admin-dashboard/students/${student.id}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-md text-xs md:text-sm transition duration-300"
                        type="button"
                      >
                        View Details
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

export default StudentList;
