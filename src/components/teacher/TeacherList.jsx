import React from 'react'

const TeacherList = () => {
    const teachers = [
        {
          id: '1',
          name: 'John Doe',
          email: 'johndoe@gmail.com',
          phone: '123-456-7890',
          details: 'Admin',
          date: '28/12/2021'
        },
        // Add more teacher objects as needed
      ];
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-600 to-indigo-100  w-full p-4'>
      <div className="bg-white p-4 rounded-md shadow-md">
        <h2 className="mb-4 text-xl font-bold text-gray-700">Teacher List</h2>
        <div className="mb-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md text-sm md:text-base transition duration-300"
            type="button"
          >
            Add Teacher
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-md">
            <thead className="bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-bold">
              <tr>
                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">ID</th>
                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Names</th>
                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Email</th>
                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Phone</th>
                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher) => (
                <tr key={teacher.id} className="text-sm font-normal border-t">
                  <td className="py-2 px-4 border-b text-xs sm:text-sm">{teacher.id}</td>
                  <td className="py-2 px-4 border-b text-xs sm:text-sm">{teacher.name}</td>
                  <td className="py-2 px-4 border-b text-xs sm:text-sm">{teacher.email}</td>
                  <td className="py-2 px-4 border-b text-xs sm:text-sm">{teacher.phone}</td>
                  <td className="py-2 px-4 border-b text-xs sm:text-sm">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-md text-xs sm:text-sm transition duration-300"
                      type="button"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TeacherList

