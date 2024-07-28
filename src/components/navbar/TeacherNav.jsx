import React from 'react'

const TeacherNav = () => {
  return (
    <div className="bg-gradient-to-tr from-blue-800 to-cyan-600 text-white font-bold  p-4 flex justify-between items-center shadow-lg">
    <div className="text-2xl font-semibold">Teacher Dashboard</div>
    <div>
      <button className="bg-white text-teal-600 px-4 py-2 rounded-md shadow">Profile</button>
    </div>
  </div>
  )
}

export default TeacherNav
