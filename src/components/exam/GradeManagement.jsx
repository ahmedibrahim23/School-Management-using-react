import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GradeManagement = () => {
  const [grades, setGrades] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadExams();
  }, []);

  const loadExams = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://backend-school-cbcfe8928e29.herokuapp.com/api/exams");
      setGrades(response.data);
      setError(null); // Clear previous errors if successful
    } catch (error) {
      console.error("Error fetching exams", error);
      setError(error.response ? error.response.data : "Server error");
    } finally {
      setLoading(false);
    }
  };

  const deleteSubject = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this exam?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8080/api/exams/delete/${id}`);
        setGrades(grades.filter(grade => grade.id !== id));
        setError(null); // Clear previous errors if successful
      } catch (error) {
        console.error("Error deleting exam", error);
        setError(error.response ? error.response.data : "Server error");
      }
    }
  };

  const filteredGrades = grades.filter(grade =>
    grade.student_id.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
    grade.subject_id.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='min-h-screen bg-gray-100'>
      <div className="p-4">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="mb-4 text-xl font-bold text-gray-800">Grade Management</h2>
          {error && (
            <div className="bg-red-100 text-red-700 p-4 rounded-md mb-4">
              {error}
            </div>
          )}
          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              placeholder="Search by student or course"
              className="bg-indigo-50 px-4 py-2 outline-none rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Link to='/teacher-dashboard/grades/new' 
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md text-sm transition duration-300"
            >
              Add Grade
            </Link>
          </div>
          <div className="overflow-x-auto">
            {loading ? (
              <div>Loading...</div>
            ) : (
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
                      <td className="py-2 px-4 border-b text-xs sm:text-sm">{grade.student_id}</td>
                      <td className="py-2 px-4 border-b text-xs sm:text-sm">{grade.subject_id}</td>
                      <td className="py-2 px-4 border-b text-xs sm:text-sm">{grade.stdMarks}</td>
                      <td className="py-2 px-4 border-b text-xs sm:text-sm flex space-x-2">
                        <Link to={`/grades/${grade.id}`}
                          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-md text-xs transition duration-300"
                        >
                          Update
                        </Link>
                        <button
                          onClick={() => deleteSubject(grade.id)}
                          className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-md text-xs transition duration-300"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradeManagement;
