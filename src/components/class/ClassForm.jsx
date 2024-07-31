import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ClassForm = () => {
    const [teachers, setTeachers] = useState([]);
    const [className, setClassName] = useState('');
    const [selectedTeacher, setSelectedTeacher] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch teachers from the backend
        axios.get('https://backend-school-d129ad763199.herokuapp.com/api/teachers')
            .then(response => {
                setTeachers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the teachers!', error);
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newClass = {
            name: className,
            teacherId: selectedTeacher
        };

        axios.post('https://backend-school-d129ad763199.herokuapp.com/api/class/new', newClass)
            .then(response => {
                console.log('Class created successfully:', response.data);
                // Handle success (e.g., clear form, show success message, navigate to another page)
                navigate('/classes'); // Assuming you have a route to show the list of classes
            })
            .catch(error => {
                console.error('There was an error creating the class!', error);
            });
    };

    return (
        <div className="h-screen bg-gray-100 flex justify-center items-center w-full">
            <form onSubmit={handleSubmit} className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-lg">
                <div className="space-y-4">
                    <h1 className="text-center text-2xl font-semibold text-gray-600">Class Registration</h1>
                    <div>
                        <label htmlFor="className" className="block mb-1 text-gray-600 font-semibold">Class Name</label>
                        <input
                            type="text"
                            id="className"
                            value={className}
                            onChange={(e) => setClassName(e.target.value)}
                            placeholder="Class Name"
                            className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="teacher" className="block mb-1 text-gray-600 font-semibold">Teacher</label>
                        <select
                            id="teacher"
                            value={selectedTeacher}
                            onChange={(e) => setSelectedTeacher(e.target.value)}
                            className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                        >
                            <option value="">Select a teacher</option>
                            {teachers.map((teacher) => (
                                <option key={teacher.id} value={teacher.id}>
                                    {teacher.fullName}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide"
                >
                    Register
                </button>
            </form>
        </div>
    )
}
export default ClassForm