import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const StudentDetail = () => {
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        loadStudent();
    }, []);

    const loadStudent = async () => {
        try {
            const response = await axios.get(`https://backend-school-cbcfe8928e29.herokuapp.com/api/students${id}`);
            setStudent(response.data);
        } catch (error) {
            console.error("Error fetching student", error);
            setError(error.response ? error.response.data : "Server error");
        }
    };

    const deleteStudent = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this student?");
        if (confirmDelete) {
            try {
                await axios.delete(`https://backend-school-cbcfe8928e29.herokuapp.com/api/students/delete/${id}`);
                navigate('/students');
            } catch (error) {
                console.error("Error deleting student", error);
                setError(error.response ? error.response.data : "Server error");
            }
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!student) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 w-full p-4">
            <div className="p-4">
                <div className="bg-white p-4 rounded-md shadow-md">
                    <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-gray-800 mb-2 lg:mb-0">Student Details</h2>
                    </div>
                    <div className="overflow-x-auto lg:overflow-x-hidden">
                        {/* For larger screens, show the table */}
                        <div className="hidden lg:block">
                            <table className="min-w-full bg-white border border-gray-200 rounded-md">
                                <thead className="bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-bold">
                                    <tr>
                                        <th className="py-2 px-4 border-b text-xs sm:text-sm">ID</th>
                                        <th className="py-2 px-4 border-b text-xs sm:text-sm">Name</th>
                                        <th className="py-2 px-4 border-b text-xs sm:text-sm">Date of Birth</th>
                                        <th className="py-2 px-4 border-b text-xs sm:text-sm">Gender</th>
                                        <th className="py-2 px-4 border-b text-xs sm:text-sm">Address</th>
                                        <th className="py-2 px-4 border-b text-xs sm:text-sm">Phone</th>
                                        <th className="py-2 px-4 border-b text-xs sm:text-sm">Email</th>
                                        <th className="py-2 px-4 border-b text-xs sm:text-sm">Password</th>
                                        <th className="py-2 px-4 border-b text-xs sm:text-sm">Parent Name</th>
                                        <th className="py-2 px-4 border-b text-xs sm:text-sm">Parent Number</th>
                                        <th className="py-2 px-4 border-b text-xs sm:text-sm">Class ID</th>
                                        <th className="py-2 px-4 border-b text-xs sm:text-sm">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-sm font-normal border-t">
                                        <td className="py-2 px-4 border-b text-xs sm:text-sm">{student.id}</td>
                                        <td className="py-2 px-4 border-b text-xs sm:text-sm">{student.fullname}</td>
                                        <td className="py-2 px-4 border-b text-xs sm:text-sm">{student.dateOfBirth}</td>
                                        <td className="py-2 px-4 border-b text-xs sm:text-sm">{student.gender}</td>
                                        <td className="py-2 px-4 border-b text-xs sm:text-sm">{student.address}</td>
                                        <td className="py-2 px-4 border-b text-xs sm:text-sm">{student.phone}</td>
                                        <td className="py-2 px-4 border-b text-xs sm:text-sm">{student.email}</td>
                                        <td className="py-2 px-4 border-b text-xs sm:text-sm">{student.password}</td>
                                        <td className="py-2 px-4 border-b text-xs sm:text-sm">{student.parentname}</td>
                                        <td className="py-2 px-4 border-b text-xs sm:text-sm">{student.parentnumber}</td>
                                        <td className="py-2 px-4 border-b text-xs sm:text-sm">{student.stdClass.id}</td>
                                        <td className="py-2 px-4 border-b text-xs sm:text-sm flex space-x-2">
                                            <Link to={`/admin-dashboard/students/edit/${id}`}
                                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-md text-xs sm:text-sm transition duration-300"
                                                type="button"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-md text-xs sm:text-sm transition duration-300"
                                                type="button"
                                                onClick={deleteStudent}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* For mobile screens, show vertical card layout */}
                        <div className="block lg:hidden">
                            <div className="mb-4 bg-white border border-gray-200 rounded-md p-4 shadow-md">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="font-semibold text-gray-700">ID:</div>
                                    <div>{student.id}</div>
                                    <div className="font-semibold text-gray-700">Name:</div>
                                    <div>{student.fullname}</div>
                                    <div className="font-semibold text-gray-700">Email:</div>
                                    <div>{student.email}</div>
                                    <div className="font-semibold text-gray-700">Phone:</div>
                                    <div>{student.phone}</div>
                                    <div className="font-semibold text-gray-700">Parent Name:</div>
                                    <div>{student.parentname}</div>
                                    <div className="font-semibold text-gray-700">Parent Phone:</div>
                                    <div>{student.parentnumber}</div>
                                    <div className="font-semibold text-gray-700">Date of Birth:</div>
                                    <div>{student.dateOfBirth}</div>
                                    <div className="font-semibold text-gray-700">Password:</div>
                                    <div>{student.password}</div>
                                    <div className="font-semibold text-gray-700">Class:</div>
                                    <div>{student.stdClass.id}</div>
                                </div>
                                <div className="flex gap-2 mt-4">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-md text-xs transition duration-300 w-full"
                                        type="button"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-md text-xs transition duration-300 w-full"
                                        type="button"
                                        onClick={deleteStudent}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDetail;
