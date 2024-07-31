import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeacherDashboardOverview = () => {
  const [numClasses, setNumClasses] = useState(0);
  const [numSubjects, setNumSubjects] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch class and subject counts
        const classResponse = await axios.get('https://backend-school-d129ad763199.herokuapp.com/api/teacher/class/count');
        const subjectResponse = await axios.get('https://backend-school-d129ad763199.herokuapp.com/api/teacher/subjects/count');

        setNumClasses(classResponse.data.count);
        setNumSubjects(subjectResponse.data.count);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-md shadow-md max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Teacher Dashboard Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold">Total Classes</h3>
            <p className="text-3xl font-bold">{numClasses}</p>
          </div>
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold">Total Subjects</h3>
            <p className="text-3xl font-bold">{numSubjects}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboardOverview;
