import React, { useState } from 'react';

const GradeEntryForm = ({ onGradeSubmitted }) => {
  // Mock data for students and courses
  const mockStudents = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
  ];

  const mockCourses = [
    { id: 1, name: 'Math 101' },
    { id: 2, name: 'Science 201' },
    { id: 3, name: 'History 301' },
  ];

  const [selectedStudent, setSelectedStudent] = useState('');
  const [grades, setGrades] = useState([{ courseId: '', grade: '' }]);

  const handleGradeChange = (index, field, value) => {
    const newGrades = grades.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setGrades(newGrades);
  };

  const addGradeField = () => {
    setGrades([...grades, { courseId: '', grade: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedStudent) {
      const gradeData = {
        studentId: selectedStudent,
        grades: grades.filter(g => g.courseId && g.grade),
      };
      console.log('Submitted Grade Data:', gradeData);
      // Clear form
      setSelectedStudent('');
      setGrades([{ courseId: '', grade: '' }]);
    } else {
      alert('Please select a student.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-600 to-indigo-100 flex justify-center items-center w-full p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md max-w-4xl w-full overflow-hidden">
        <h1 className="text-center text-2xl font-semibold text-gray-800 mb-6">Grade Entry</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="block mb-1 text-gray-600 font-semibold" htmlFor="student">Student</label>
            <select 
              id="student"
              value={selectedStudent} 
              onChange={(e) => setSelectedStudent(e.target.value)}
              className="bg-indigo-50 px-4 py-2 outline-none rounded-md"
            >
              <option value="">Select a student</option>
              {mockStudents.map(student => (
                <option key={student.id} value={student.id}>
                  {student.name}
                </option>
              ))}
            </select>
          </div>
          {grades.map((grade, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex flex-col w-full">
                <label className="block mb-1 text-gray-600 font-semibold" htmlFor={`course-${index}`}>Course</label>
                <select 
                  id={`course-${index}`}
                  value={grade.courseId} 
                  onChange={(e) => handleGradeChange(index, 'courseId', e.target.value)}
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md"
                >
                  <option value="">Select a course</option>
                  {mockCourses.map(course => (
                    <option key={course.id} value={course.id}>
                      {course.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label className="block mb-1 text-gray-600 font-semibold" htmlFor={`grade-${index}`}>Grade</label>
                <input 
                  id={`grade-${index}`}
                  type="text" 
                  value={grade.grade} 
                  onChange={(e) => handleGradeChange(index, 'grade', e.target.value)}
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
        <button 
          type="button"
          onClick={addGradeField}
          className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 mb-4"
        >
          Add Another Course
        </button>
        <button type="submit" className="w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">
          Submit Grades
        </button>
      </form>
    </div>
  );
};

export default GradeEntryForm;
