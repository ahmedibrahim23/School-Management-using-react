import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../../public/pexels-olenkabohovyk-3646172.jpg';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Fetch teachers data from API
      const response = await fetch("https://backend-school-d129ad763199.herokuapp.com/api/teachers");
      const teachers = await response.json();

      // Check if the user is a teacher
      const teacher = teachers.find(teacher => teacher.email === username && teacher.password === password);
      
      if (role === 'teacher' && teacher) {
        // Redirect to Teacher Dashboard
        navigate('/teacher-dashboard');
      } else if (role === 'admin' && username === 'admin' && password === 'ADMIN@12354') {
        navigate('/admin-dashboard');
      } else {
        
        alert('Invalid credentials or role.');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg flex flex-col md:flex-row w-full max-w-4xl rounded-lg overflow-hidden">
        {/* Left side: Image */}
        <div className="md:w-1/2 hidden md:block">
          <img src={image} alt="School" className="object-cover w-full h-full" />
        </div>
        {/* Right side: Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
              > 
                <option value="" disabled>Select Role</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
              <option value="admin">Admin</option>
              </select>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
