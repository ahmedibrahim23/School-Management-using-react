import React from 'react'

const TeacherDatail = () => {
    const teachers = [
        {
          id: '1',
          name: 'John Doe',
          email: 'johndoe@gmail.com',
          phone: '123-456-7890',
          gender: 'Male',
          address: '123 Main St',
          password: 'password123',
          class: 'Form 1',
          subject: 'biology',
          date: '28/12/2021'
        },
        // Add more teacher objects as needed
      ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-600 to-indigo-100 w-full p-4">

    <div className="p-4">
    <div className="bg-white p-4 rounded-md shadow-md">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2 lg:mb-0">Teacher List</h2>
          
        </div>
        <div className="overflow-x-auto lg:overflow-x-hidden">
          {/* For larger screens, show the table */}
          <div className="hidden lg:block">
            <table className="min-w-full bg-white border border-gray-200 rounded-md">
              <thead className="bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-bold">
              <tr>
                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">ID</th>
                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Name</th>
                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Email</th>
                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Phone</th>
                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Gender</th>
                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Address</th>
                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Password</th>
                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Class</th>
                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Subject</th>
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
                  <td className="py-2 px-4 border-b text-xs sm:text-sm">{teacher.gender}</td>
                  <td className="py-2 px-4 border-b text-xs sm:text-sm">{teacher.address}</td>
                  <td className="py-2 px-4 border-b text-xs sm:text-sm">{teacher.password}</td>
                  <td className="py-2 px-4 border-b text-xs sm:text-sm">{teacher.class}</td>
                  <td className="py-2 px-4 border-b text-xs sm:text-sm">{teacher.subject}</td>
                  <td className="py-2 px-4 border-b text-xs sm:text-sm flex space-x-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-md text-xs sm:text-sm transition duration-300"
                      type="button"
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-md text-xs sm:text-sm transition duration-300"
                      type="button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
        </div>
          {/* For mobile screens, show vertical card layout */}
          <div className="block lg:hidden">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="mb-4 bg-white border border-gray-200 rounded-md p-4 shadow-md">

                <div className="grid grid-cols-2 gap-4">
                    <div className="font-semibold text-gray-700">ID:</div>
                    <div>{teacher.id}</div>
                    <div className="font-semibold text-gray-700">Name:</div>
                    <div>{teacher.name}</div>
                    <div className="font-semibold text-gray-700">Email:</div>
                    <div>{teacher.email}</div>

                    <div className="font-semibold text-gray-700">Phone:</div>
                    <div>{teacher.phone}</div>

                    <div className="font-semibold text-gray-700">Gender:</div>
                    <div>{teacher.gender}</div>

                    <div className="font-semibold text-gray-700">Address:</div>
                    <div>{teacher.address}</div>

                    <div className="font-semibold text-gray-700">Password:</div>
                    <div>{teacher.password}</div>

                    <div className="font-semibold text-gray-700">Class:</div>
                    <div>{teacher.class}</div>

                    <div className="font-semibold text-gray-700">Subject:</div>
                    <div>{teacher.subject}</div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-md text-xs transition duration-300 w-full"
                    type="button"
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-md text-xs transition duration-300 w-full"
                    type="button"
                  >
                    Delete
                  </button>
                </div>
            </div>

          ))}
          </div>
        </div>
        </div>
        </div>
        </div>
  )
}

export default TeacherDatail
