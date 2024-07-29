import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditGradeForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [grade, setGrade] = useState({
    student: { id: '' },
    subject: { id: '' },
    marks: ''
  });

  const [students, setStudents] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    loadStudents();
    loadSubjects();
    loadExam();
  }, []);

  const loadStudents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/students');
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
      setError('Error fetching students');
    }
  };

  const loadSubjects = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/subjects');
      setSubjects(response.data);
    } catch (error) {
      console.error("Error fetching subjects:", error);
      setError('Error fetching subjects');
    }
  };

  const loadExam = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/exams/${id}`);
      setGrade(response.data);
    } catch (error) {
      console.error("Error fetching exam:", error);
      setError('Error fetching exam');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'student') {
      setGrade((prevState) => ({
        ...prevState,
        student: { id: value }
      }));
    } else if (name === 'subject') {
      setGrade((prevState) => ({
        ...prevState,
        subject: { id: value }
      }));
    } else {
      setGrade((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/exams/edit/${id}`, grade);
      alert("Exam updated successfully");
      navigate("/reports");
    } catch (error) {
      console.error("There was an error updating the exam!", error);
      setError('There was an error updating the exam');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center w-full p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-center text-2xl font-semibold text-gray-800 mb-6">Edit Grade</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="mb-6">
          <label className="block mb-2 text-gray-700 font-semibold" htmlFor="student">Student</label>
          <select 
            id="student"
            name="student"
            value={grade.student.id} 
            onChange={handleChange}
            className="bg-gray-200 px-4 py-2 outline-none rounded-md w-full"
          >
            <option value="">Select a student</option>
            {students.map(student => (
              <option key={student.id} value={student.id}>
                {student.fullname}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-gray-700 font-semibold" htmlFor="subject">Subject</label>
          <select 
            id="subject"
            name="subject"
            value={grade.subject.id} 
            onChange={handleChange}
            className="bg-gray-200 px-4 py-2 outline-none rounded-md w-full"
          >
            <option value="">Select a subject</option>
            {subjects.map(subject => (
              <option key={subject.id} value={subject.id}>
                {subject.subjectName}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-gray-700 font-semibold" htmlFor="marks">Marks</label>
          <input 
            id="marks"
            name="marks"
            type="number" 
            value={grade.marks} 
            onChange={handleChange}
            className="bg-gray-200 px-4 py-2 outline-none rounded-md w-full"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md text-lg hover:bg-blue-700 transition duration-300"
        >
          Update Grade
        </button>
      </form>
    </div>
  );
}

export default EditGradeForm;
