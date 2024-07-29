import { useState } from "react";

const GradeManagement = () => {
  // Sample data
  const [grades, setGrades] = useState([
    { id: 1, studentName: 'John Doe', courseName: 'Math 101', grade: 'A' },
    { id: 2, studentName: 'Jane Smith', courseName: 'Science 201', grade: 'B' },
    { id: 3, studentName: 'Alice Johnson', courseName: 'History 301', grade: 'C' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleUpdate = (id) => {
    // Update logic here
    console.log(`Update grade with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Delete logic here
    console.log(`Delete grade with ID: ${id}`);
    setGrades(grades.filter(grade => grade.id !== id));
  };

  const filteredGrades = grades.filter(grade =>
    grade.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    grade.courseName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-600 to-indigo-100'>
      <div className="p-4">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="mb-4 text-xl font-bold text-gray-800">Grade Management</h2>
          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              placeholder="Search by student or course"
              className="bg-indigo-50 px-4 py-2 outline-none rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md text-sm transition duration-300"
            >
              Add Grade
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-md">
              <thead className="bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-bold">
                <tr>
                  <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Student</th>
                  <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Course</th>
                  <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Grade</th>
                  <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredGrades.map((grade) => (
                  <tr key={grade.id} className="text-sm font-normal border-t">
                    <td className="py-2 px-4 border-b text-xs sm:text-sm">{grade.studentName}</td>
                    <td className="py-2 px-4 border-b text-xs sm:text-sm">{grade.courseName}</td>
                    <td className="py-2 px-4 border-b text-xs sm:text-sm">{grade.grade}</td>
                    <td className="py-2 px-4 border-b text-xs sm:text-sm flex space-x-2">
                      <button
                        onClick={() => handleUpdate(grade.id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-md text-xs transition duration-300"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(grade.id)}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-md text-xs transition duration-300"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradeManagement;
