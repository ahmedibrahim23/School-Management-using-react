import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUserGraduate, FaChalkboardTeacher, FaSchool } from 'react-icons/fa';

const Dashboard = () => {
  const [studentCount, setStudentCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);
  const [classCount, setClassCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const studentResponse = await axios.get('http://localhost:8080/api/students/count');
        const teacherResponse = await axios.get('http://localhost:8080/api/teachers/count');
        const classResponse = await axios.get('http://localhost:8080/api/class/count');

        setStudentCount(studentResponse.data);
        setTeacherCount(teacherResponse.data);
        setClassCount(classResponse.data);
      } catch (error) {
        console.error('Error fetching counts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="bg-white p-6 rounded-md shadow-md flex items-center">
            <FaUserGraduate size={50} className="text-blue-500 mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Total Students</h3>
              <p className="text-2xl">{studentCount}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md flex items-center">
            <FaChalkboardTeacher size={50} className="text-green-500 mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Total Teachers</h3>
              <p className="text-2xl">{teacherCount}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md flex items-center">
            <FaSchool size={50} className="text-purple-500 mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Total Classes</h3>
              <p className="text-2xl">{classCount}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
