import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TeacherForm = () => {
  let navigate = useNavigate();
  
  const [teacher, setTeacher] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    phone: '',
    email: '',
    age: '',
    password: '',
    hireDate: '',
    role: ''
  });

  const { fullName, dateOfBirth, gender, address, phone, email, age, password, hireDate ,role} = teacher;

  const onInputChange = (event) => {
    setTeacher({ ...teacher, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://backend-school-d129ad763199.herokuapp.com/api/teachers/new", teacher);
      alert("Teacher added successfully");
      navigate('/');
    } catch (error) {
      console.error("There was an error adding the teacher!", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center w-full p-4">
      <form className="bg-white p-6 rounded-xl shadow-md max-w-4xl w-full overflow-hidden" onSubmit={onSubmit}>
        <h1 className="text-center text-2xl font-semibold text-gray-800 mb-6">Teacher Registration</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="block mb-1 text-gray-600 font-semibold" htmlFor="fullName">Full Name</label>
            <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="text" id="fullName" name="fullName" placeholder="Full Name" value={fullName} onChange={onInputChange} required />
          </div>
          <div className="flex flex-col">
            <label className="block mb-1 text-gray-600 font-semibold" htmlFor="email">Email</label>
            <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="email" id="email" name="email" placeholder="Email" value={email} onChange={onInputChange} required />
          </div>
          <div className="flex flex-col">
            <label className="block mb-1 text-gray-600 font-semibold" htmlFor="password">Password</label>
            <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="password" id="password" name="password" placeholder="********" value={password} onChange={onInputChange} required />
          </div>
          <div className="flex flex-col">
          <label className="block mb-1 text-gray-600 font-semibold" htmlFor="Role">ROLES</label>
          <select className="bg-indigo-50 px-4 py-2 outline-none rounded-md" id="role" name="role" value={role} onChange={onInputChange} required>
              <option value="" disabled>Select Role</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>

            </div>



          <div className="flex flex-col">
            <label className="block mb-1 text-gray-600 font-semibold" htmlFor="gender">Gender</label>
            <select className="bg-indigo-50 px-4 py-2 outline-none rounded-md" id="gender" name="gender" value={gender} onChange={onInputChange} required>
              <option value="" disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="block mb-1 text-gray-600 font-semibold" htmlFor="phone">Phone Number</label>
            <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="tel" id="phone" name="phone" placeholder="Phone Number" value={phone} onChange={onInputChange} required />
          </div>
          <div className="flex flex-col">
            <label className="block mb-1 text-gray-600 font-semibold" htmlFor="age">Age</label>
            <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="number" id="age" name="age" placeholder="Age" value={age} onChange={onInputChange} required />
          </div>
          <div className="flex flex-col">
            <label className="block mb-1 text-gray-600 font-semibold" htmlFor="address">Address</label>
            <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="text" id="address" name="address" placeholder="Address" value={address} onChange={onInputChange} required />
          </div>
          <div className="flex flex-col">
            <label className="block mb-1 text-gray-600 font-semibold" htmlFor="hireDate">Hire Date</label>
            <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="date" id="hireDate" name="hireDate" value={hireDate} onChange={onInputChange} required />
          </div>
          <div className="flex flex-col">
            <label className="block mb-1 text-gray-600 font-semibold" htmlFor="dateOfBirth">Date of Birth</label>
            <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="date" id="dateOfBirth" name="dateOfBirth" value={dateOfBirth} onChange={onInputChange} required />
          </div>
        </div>
        <button className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default TeacherForm;
