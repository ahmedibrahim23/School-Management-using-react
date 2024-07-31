import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
const StudentForm = () => {
  let navigate =useNavigate();
  const [student,setStudent]= useState({
    "fullname": '',
  "dateOfBirth": '',
  "gender": '',
  "address": '',
  "phone": '',
  "email": '',
  "password": '',
  "role": '',
  "parentname": '',
  "parentnumber": '',
  "stdClass": {
    "id": ''
  }
  });
  const [stdClasses,setstdClasses ] = useState([])
  useEffect(()=>{
    axios.get("https://backend-school-d129ad763199.herokuapp.com/api/class")
    .then(response => {
      console.log("API Response: ", response.data); // Log the entire response for debugging
      if (Array.isArray(response.data)) {
        const classList = response.data.map(cls => {
          // Ensure that each class object has 'id' and 'name' properties
          if (cls.id && cls.name) {
            return { id: cls.id, name: cls.name };
          } else {
            console.error("Class object missing 'id' or 'name': ", cls);
            return null; // Filter out any malformed class objects
          }
        }).filter(cls => cls !== null); // Remove null entries
        setstdClasses(classList);
      } else {
        console.error("Unexpected response format: ", response.data);
      }
    })
    .catch(Error=>{
      console.error("There was an error fetching the classes!", Error);
    });
  },[]);
  const handlechange=(e)=>{
    const{name, value}=e.target;
    if(name == "stdClass"){
      setStudent(prevState=>({
        ...prevState, stdClass:{id:value}
      }));
    }else{
      setStudent(prevState=>({
        ...prevState, [name]: value
      }));
    }
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("https://backend-school-d129ad763199.herokuapp.com/api/students/new" ,student)
    .then(Response=>{
      navigate('/admin-dashboard/students');
    })
    .catch(error => {
      console.error("There was an error submitting the form!", error);
    });
  };
  return(
  <div className="min-h-screen bg-gray-100 flex justify-center items-center w-full p-4">
  <form className="bg-white p-6 rounded-xl shadow-md max-w-4xl w-full overflow-hidden" onSubmit={handleSubmit}>
    <h1 className="text-center text-2xl font-semibold text-gray-800 mb-6">Student Registration</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col">
        <label className="block mb-1 text-gray-600 font-semibold" htmlFor="fullname">Fullname</label>
        <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="text" id="fullname" name="fullname" placeholder="Fullname" value={student.fullname} onChange={handlechange} />
      </div>
      <div className="flex flex-col">
        <label className="block mb-1 text-gray-600 font-semibold" htmlFor="dateOfBirth">Date of Birth</label>
        <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="date" id="dateOfBirth" name="dateOfBirth" value={student.dateOfBirth} onChange={handlechange} />
      </div>
      <div className="flex flex-col">
        <label className="block mb-1 text-gray-600 font-semibold" htmlFor="email">Email</label>
        <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="email" id="email" name="email" placeholder="Email" value={student.email} onChange={handlechange} />
      </div>
      <div className="flex flex-col">
        <label className="block mb-1 text-gray-600 font-semibold" htmlFor="password">Password</label>
        <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="password" id="password" name="password" placeholder="********" value={student.password} onChange={handlechange} />
      </div>
      <div className="flex flex-col">
          <label className="block mb-1 text-gray-600 font-semibold" htmlFor="Role">ROLES</label>
          <select className="bg-indigo-50 px-4 py-2 outline-none rounded-md" id="role" name="role" value={student.role} onChange={handlechange} required>
              <option value="" disabled>Select Role</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
        </div>
      <div className="flex flex-col">
        <label className="block mb-1 text-gray-600 font-semibold" htmlFor="gender">Gender</label>
        <select className="bg-indigo-50 px-4 py-2 outline-none rounded-md" id="gender" name="gender" value={student.gender} onChange={handlechange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="block mb-1 text-gray-600 font-semibold" htmlFor="phone">Phone Number</label>
        <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="tel" id="phone" name="phone" placeholder="Phone Number" value={student.phone} onChange={handlechange} />
      </div>
      <div className="flex flex-col">
        <label className="block mb-1 text-gray-600 font-semibold" htmlFor="address">Address</label>
        <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="text" id="address" name="address" placeholder="Address" value={student.address} onChange={handlechange} />
      </div>
      <div className="flex flex-col">
        <label className="block mb-1 text-gray-600 font-semibold" htmlFor="stdClass">Class</label>
        <select className="bg-indigo-50 px-4 py-2 outline-none rounded-md" id="stdClass" name="stdClass" value={student.stdClass.id} onChange={handlechange}>
          <option value="">Select Class</option>
          {stdClasses.map(cls => (
            <option key={cls.id} value={cls.id}>
              {cls.name}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label className="block mb-1 text-gray-600 font-semibold" htmlFor="parentname">Parent Name</label>
        <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="text" id="parentname" name="parentname" placeholder="Parent Name" value={student.parentname} onChange={handlechange} />
      </div>
      <div className="flex flex-col">
        <label className="block mb-1 text-gray-600 font-semibold" htmlFor="parentnumber">Parent Number</label>
        <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="tel" id="parentnumber" name="parentnumber" placeholder="Parent Number" value={student.parentnumber} onChange={handlechange} />
      </div>
    </div>
    <button className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">
      Register
    </button>
  </form>
</div>
)
}

export default StudentForm
