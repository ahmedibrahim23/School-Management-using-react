import React from 'react'
import { Link } from 'react-router-dom'

function AttendanceRecord({ submittedAttendance }) {
  return (
    <div className="mt-8">
        
      <h3 className="mb-4 text-lg font-bold text-gray-700">Submitted Attendance</h3>
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
            {submittedAttendance.map((record, index) => (
              <tr key={index} className="text-sm font-normal border-t">
                <td className="py-2 px-4 border-b text-xs sm:text-sm">{record.studentId}</td>
                <td className="py-2 px-4 border-b text-xs sm:text-sm">{record.studentName}</td>
                <td className="py-2 px-4 border-b text-xs sm:text-sm">{record.date}</td>
                <td className="py-2 px-4 border-b text-xs sm:text-sm">
                  {record.present ? 'Present' : 'Absent'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AttendanceRecord