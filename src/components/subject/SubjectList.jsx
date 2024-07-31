import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SubjectList = () => {
    // const [searchQuery, setSearchQuery] = useState('');
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        // Fetch classes from the backend
        fetchSubject();
    }, []);

    const fetchSubject = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/subjects');
            console.log(response.data);  // Log the response data to check its structure
            setSubjects(response.data);
        } catch (error) {
            console.error('There was an error fetching the classes!', error);
        }
    };

        


    return (
        <div className='min-h-screen bg-gray-100 w-full p-4'>
            <div className="bg-white p-4 rounded-md shadow-md">
                <h2 className="mb-4 text-xl font-bold text-gray-700">Subject List</h2>
                <div className="mb-4 flex items-center">
                    <div className="relative mr-4">
                        <input
                            type="text"
                            className="border rounded-md py-2 pl-8 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Search..."
                            // value={searchQuery}
                            // onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>
                    <Link
                      to="/admin-dashboard/subjects/new"
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md text-sm transition duration-300"
                    >
                      Add subject
                    </Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-md">
                        <thead className="bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-bold">
                            <tr>
                                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">ID</th>
                                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">subject Name</th>
                                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Teacher</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subjects.map((subject, index) => (
                                <tr key={index} className="text-sm font-normal border-t hover:bg-gray-100">
                                    <td className="py-2 px-4 border-b text-xs sm:text-sm">{subject.id}</td>
                                    <td className="py-2 px-4 border-b text-xs sm:text-sm">{subject.name}</td>
                                    <td className="py-2 px-4 border-b text-xs sm:text-sm">
                                        {subject.teacherName ? subject.teacherName : 'No teacher assigned'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SubjectList;
