import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AttendanceForm = () => {
    const [students, setStudents] = useState([]);
    const [classes, setClasses] = useState([]);
    const [selectedClassId, setSelectedClassId] = useState('');
    const [attendance, setAttendance] = useState([]);
    const [message, setMessage] = useState('');
  
    useEffect(() => {
      // Fetch classes when component mounts
      axios.get('http://localhost:8080/api/class')
        .then(response => setClasses(response.data))
        .catch(error => console.error('Error fetching classes:', error));
    }, []);
  
    const handleClassChange = (e) => {
      setSelectedClassId(e.target.value);
      fetchStudents(e.target.value);
    };
  
    const fetchStudents = (classId) => {
      // Fetch students of the selected class
      axios.get(`http://localhost:8080/api/attendances/classes/${classId}/students`)
        .then(response => {
          setStudents(response.data);
          initializeAttendance(response.data);
        })
        .catch(error => console.error('Error fetching students:', error));
    };
  
    const initializeAttendance = (students) => {
      const initialAttendance = students.map(student => ({
        studentId: student.id,
        studentName: student.fullname,
        date: new Date().toISOString().split('T')[0],
        present: false,
      }));
      setAttendance(initialAttendance);
    };
  
    const handleCheckboxChange = (index) => {
      const updatedAttendance = [...attendance];
      updatedAttendance[index].present = !updatedAttendance[index].present;
      setAttendance(updatedAttendance);
    };
  
    const handleSubmit = () => {
      attendance.forEach(record => {
        axios.post('http://localhost:8080/api/attendances/mark', null, {
          params: {
            studentId: record.studentId,
            classId: selectedClassId,
            present: record.present,
          }
        })
        .then(response => {
          console.log('Attendance marked:', response.data);
          setMessage('Attendance marked successfully!');
        })
        .catch(error => {
          console.error('Error marking attendance:', error);
          setMessage('Error marking attendance. Please try again.');
        });
      });
    };
  
    return (
    //   <div>
    //     <h2>Mark Attendance</h2>
    //     <div>
    //       <label>Select Class:</label>
    //       <select value={selectedClassId} onChange={handleClassChange} required>
    //         <option value="">Select a class</option>
    //         {classes.map(cls => (
    //           <option key={cls.id} value={cls.id}>{cls.name}</option>
    //         ))}
    //       </select>
    //     </div>
    //     <table>
    //       <thead>
    //         <tr>
    //           <th>Student ID</th>
    //           <th>Student Name</th>
    //           <th>Date</th>
    //           <th>Present</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {attendance.map((record, index) => (
    //           <tr key={record.studentId}>
    //             <td>{record.studentId}</td>
    //             <td>{record.studentName}</td>
    //             <td>{record.date}</td>
    //             <td>
    //               <input
    //                 type="checkbox"
    //                 checked={record.present}
    //                 onChange={() => handleCheckboxChange(index)}
    //               />
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //     <button onClick={handleSubmit}>Submit Attendance</button>
    //     {message && <p>{message}</p>}
    //   </div>
    <div className='min-h-screen bg-gradient-to-br from-gray-600 to-indigo-100 w-full p-4'>
      <div className="bg-white p-4 rounded-md shadow-md">
        <h2 className="mb-4 text-xl font-bold text-gray-700">Mark Attendance</h2>
        <div className="mb-4">
          <label className="mr-2">Select Class:</label>
          <select
            value={selectedClassId}
            onChange={handleClassChange}
            required
            className="border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select a class</option>
            {classes.map(cls => (
              <option key={cls.id} value={cls.id}>{cls.name}</option>
            ))}
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-md">
            <thead className="bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-bold">
              <tr>
                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Student ID</th>
                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Student Name</th>
                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Date</th>
                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Present</th>
              </tr>
            </thead>
            <tbody>
              {attendance.map((record, index) => (
                <tr key={record.studentId} className="text-sm font-normal border-t">
                  <td className="py-2 px-4 border-b text-xs sm:text-sm">{record.studentId}</td>
                  <td className="py-2 px-4 border-b text-xs sm:text-sm">{record.studentName}</td>
                  <td className="py-2 px-4 border-b text-xs sm:text-sm">{record.date}</td>
                  <td className="py-2 px-4 border-b text-xs sm:text-sm">
                    <input
                      type="checkbox"
                      checked={record.present}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          onClick={handleSubmit}
          className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
        >
          Submit Attendance
        </button>
        {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
      </div>
    </div>
    );
  };

export default AttendanceForm;
