
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ClassList = () => {
     const [classes, setClasses] = useState([]);
     const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // Fetch classes from the backend
        fetchClasses();
    }, []);

    const fetchClasses = async () => {
        try {
            const response = await axios.get('https://backend-school-d129ad763199.herokuapp.com/api/class');
            console.log(response.data);  // Log the response data to check its structure
            setClasses(response.data);
        } catch (error) {
            console.error('There was an error fetching the classes!', error);
        }
    };
     const filteredClasses = classes.filter(clas =>
        clas.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
       <div className='min-h-screen bg-gray-100 w-full p-4'>
            <div className="bg-white p-4 rounded-md shadow-md">
                <h2 className="mb-4 text-xl font-bold text-gray-700">Class List</h2>
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
                    <Link
                      to="/admin-dashboard/classes/new"
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md text-sm transition duration-300"
                    >
                      Add Class
                    </Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-md">
                        <thead className="bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-bold">
                            <tr>
                                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">ID</th>
                                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Class Name</th>
                                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Teacher</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredClasses.map((clas, index) => (
                                <tr key={index} className="text-sm font-normal border-t hover:bg-gray-100">
                                    <td className="py-2 px-4 border-b text-xs sm:text-sm">{clas.id}</td>
                                    <td className="py-2 px-4 border-b text-xs sm:text-sm">{clas.name}</td>
                                    <td className="py-2 px-4 border-b text-xs sm:text-sm">
                                        {clas.teacherName ? clas.teacherName : 'No teacher assigned'}
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

export default ClassList;
