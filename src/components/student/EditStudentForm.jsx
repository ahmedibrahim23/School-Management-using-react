import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditStudentForm() {
  const { id } = useParams();
  let navigate = useNavigate();
  const [student, setStudent] = useState({
    fullname: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    phone: '',
    email: '',
    password: '',
    parentname: '',
    parentnumber: '',
    stdClass: {
      id: ''
    }
  });
  const [stdClasses, setStdClasses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadStudent();
    loadClasses();
  }, []);

  const loadStudent = async () => {
    try {
      const response = await axios.get(`https://backend-school-6fb386e3d920.herokuapp.com/api/students/${id}`);
      setStudent(response.data);
    } catch (error) {
      console.error("Error fetching student", error);
      setError(error.response ? error.response.data : "Server error");
    }
  };

  const loadClasses = async () => {
    try {
      const response = await axios.get('https://backend-school-6fb386e3d920.herokuapp.com/api/class');
      setStdClasses(response.data);
    } catch (error) {
      console.error("Error fetching classes", error);
      setError(error.response ? error.response.data : "Server error");
    }
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'stdClass') {
      setStudent({ ...student, stdClass: { id: value } });
    } else {
      setStudent({ ...student, [name]: value });
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`https://backend-school-6fb386e3d920.herokuapp.com/api/students/edit/${id}`, student);
      alert("Student updated successfully");
      navigate(`/stdDetails/${id}`);
    } catch (error) {
      console.error("There was an error updating the student!", error);
      setError(error.response ? error.response.data : "Server Error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center w-full p-4">
      <form className="bg-white p-6 rounded-xl shadow-md max-w-4xl w-full overflow-hidden" onSubmit={onSubmit}>
        <h1 className="text-center text-2xl font-semibold text-gray-800 mb-6">Student Registration</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="block mb-1 text-gray-600 font-semibold" htmlFor="fullname">Fullname</label>
            <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="text" id="fullname" name="fullname" placeholder="Fullname" value={student.fullname} onChange={onInputChange} />
          </div>
          <div className="flex flex-col">
            <label className="block mb-1 text-gray-600 font-semibold" htmlFor="dateOfBirth">Date of Birth</label>
            <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="date" id="dateOfBirth" name="dateOfBirth" value={student.dateOfBirth} onChange={onInputChange} />
          </div>
          <div className="flex flex-col">
            <label className="block mb-1 text-gray-600 font-semibold" htmlFor="email">Email</label>
            <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="email" id="email" name="email" placeholder="Email" value={student.email} onChange={onInputChange} />
          </div>
          <div className="flex flex-col">
            <label className="block mb-1 text-gray-600 font-semibold" htmlFor="password">Password</label>
            <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="password" id="password" name="password" placeholder="********" value={student.password} onChange={onInputChange} />
          </div>
          <div className="flex flex-col">
            <label className="block mb-1 text-gray-600 font-semibold" htmlFor="gender">Gender</label>
            <select className="bg-indigo-50 px-4 py-2 outline-none rounded-md" id="gender" name="gender" value={student.gender} onChange={onInputChange}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="block mb-1 text-gray-600 font-semibold" htmlFor="phone">Phone Number</label>
            <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="tel" id="phone" name="phone" placeholder="Phone Number" value={student.phone} onChange={onInputChange} />
          </div>
          <div className="flex flex-col">
            <label className="block mb-1 text-gray-600 font-semibold" htmlFor="address">Address</label>
            <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="text" id="address" name="address" placeholder="Address" value={student.address} onChange={onInputChange} />
          </div>
          <div className="flex flex-col">
            <label className="block mb-1 text-gray-600 font-semibold" htmlFor="stdClass">Class</label>
            <select className="bg-indigo-50 px-4 py-2 outline-none rounded-md" id="stdClass" name="stdClass" value={student.stdClass.id} onChange={onInputChange}>
              <option value="">Select Class</option>
              {stdClasses.map(cls => (
                <option key={cls.id} value={cls.id}>
                  {cls.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="block mb-1 text-gray-600 font-semibold" htmlFor="parentname">Parent Name</label>
            <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="text" id="parentname" name="parentname" placeholder="Parent Name" value={student.parentname} onChange={onInputChange} />
          </div>
          <div className="flex flex-col">
            <label className="block mb-1 text-gray-600 font-semibold" htmlFor="parentnumber">Parent Number</label>
            <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="tel" id="parentnumber" name="parentnumber" placeholder="Parent Number" value={student.parentnumber} onChange={onInputChange} />
          </div>
        </div>
        <button className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">
          Register
        </button>
      </form>
    </div>
  );
}

export default EditStudentForm;
