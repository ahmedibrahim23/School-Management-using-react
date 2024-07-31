import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeeForm = () => {
  const [students, setStudents] = useState([]);
  const [studentId, setStudentId] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState(false);

  useEffect(() => {
    // Fetch the list of students from the backend
    axios.get('http://localhost:8080/api/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the students!', error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const feeData = {
      studentId,
      amount,
      status
    };

    axios.post('https://backend-school-cbcfe8928e29.herokuapp.com/api/fees/new', null, { params: feeData })
      .then(response => {
        console.log('Fee created successfully:', response.data);
        // Reset form fields
        setStudentId('');
        setAmount('');
        setStatus(false);
      })
      .catch(error => {
        console.error('There was an error creating the fee!', error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 w-full p-4">
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="mb-4 text-xl font-bold text-gray-700">Create Fee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="mr-2">Select Student:</label>
          <select
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
            className="border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select a student</option>
            {students.map(student => (
              <option key={student.id} value={student.id}>
                {student.fullname}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="mr-2">Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label className="mr-2">Status:</label>
          <input
            type="checkbox"
            checked={status}
            onChange={(e) => setStatus(e.target.checked)}
            className="focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
        >
          Submit Fee
        </button>
      </form>
    </div>
  </div>
  );
};

export default FeeForm;
