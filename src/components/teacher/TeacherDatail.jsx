import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

const TeacherDetail = () => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadTeacher();
  }, []);

  const loadTeacher = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/teachers/${id}`);
      setTeacher(response.data);
    } catch (error) {
      console.error("Error fetching teacher:", error);
      setError(error.response ? error.response.data : "Server Error");
    }
  };

  const deleteTeacher = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this teacher?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8080/api/teachers/delete/${id}`);
        navigate('/');
      } catch (error) {
        console.error("Error deleting teacher:", error);
        setError(error.response ? error.response.data : "Server Error");
      }
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-600 to-indigo-100 p-4'>
      <div className="bg-white p-6 rounded-md shadow-md max-w-4xl mx-auto">
        {error && <div className="alert alert-danger">{error}</div>}
        {teacher ? (
          <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-800">Teacher Information</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-md">
                <tbody>
                  <tr className="border-t">
                    <td className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">Full Name</td>
                    <td className="py-2 px-4 border-b text-left text-sm">{teacher.fullName}</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">Email</td>
                    <td className="py-2 px-4 border-b text-left text-sm">{teacher.email}</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">Phone</td>
                    <td className="py-2 px-4 border-b text-left text-sm">{teacher.phone}</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">Date of Birth</td>
                    <td className="py-2 px-4 border-b text-left text-sm">{teacher.dateOfBirth}</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">Hire Date</td>
                    <td className="py-2 px-4 border-b text-left text-sm">{teacher.hireDate}</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">Age</td>
                    <td className="py-2 px-4 border-b text-left text-sm">{teacher.age}</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">Password</td>
                    <td className="py-2 px-4 border-b text-left text-sm">********</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">Address</td>
                    <td className="py-2 px-4 border-b text-left text-sm">{teacher.address}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex space-x-2">
              <Link
                to={`/editteacher/${id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-md text-sm transition duration-300"
              >
                Edit
              </Link>
              <button
                onClick={deleteTeacher}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-md text-sm transition duration-300"
                type="button"
              >
                Delete
              </button>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default TeacherDetail;
