import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SubjectForm = () => {
  const [teachers, setTeachers] = useState([]);
  const [subjectName, setSubjectName] = useState('');
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

      const newSubject = {
          name: subjectName,
          teacherId: selectedTeacher
      };

      axios.post('https://backend-school-d129ad763199.herokuapp.com/api/subjects/new', newSubject)
          .then(response => {
              console.log('Subject created successfully:', response.data);
              // Handle success (e.g., clear form, show success message, navigate to another page)
              navigate('/subjects'); // Assuming you have a route to show the list of classes
          })
          .catch(error => {
              console.error('There was an error creating the subject!', error);
          });
  };
  return (
    <div class="h-screen bg-gray-100 flex justify-center items-center w-full">
  <form onSubmit={handleSubmit} >
    <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-lg">
      <div class="space-y-4">
        <h1 class="text-center text-2xl font-semibold text-gray-600">Subject Registeration</h1>
        <div>
          <label htmlFor="className" className="block mb-1 text-gray-600 font-semibold">Class Name</label>
          <input
              type="text"
              id="className"
              value={subjectName}
              onChange={(e) => setSubjectName(e.target.value)}
              placeholder="subject Name"
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
      <button class="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Register</button>
    </div>
  </form>
</div>
  )
}

export default SubjectForm
