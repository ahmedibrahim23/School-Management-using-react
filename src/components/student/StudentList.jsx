import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const StudentList = () => {
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
    <div className='min-h-screen bg-gradient-to-br from-gray-600 to-indigo-100 w-full p-4'>

  
    <div className="p-4">
      <div className="bg-white p-4 rounded-md shadow-md">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Student List</h2>
        
        <div className="mb-4">
          < Link to='/students/new'
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md text-sm transition duration-300"
            type="button"
          >
            Add Student
          </Link>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-md">
            <thead className="bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-bold">
              <tr>
                <th className="py-2 px-4 border-b text-left text-xs md:text-sm">ID</th>
                <th className="py-2 px-4 border-b text-left text-xs md:text-sm">Names</th>
                <th className="py-2 px-4 border-b text-left text-xs md:text-sm">Email</th>
                <th className="py-2 px-4 border-b text-left text-xs md:text-sm">Phone</th>
                <th className="py-2 px-4 border-b text-left text-xs md:text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher) => (
                <tr key={teacher.id} className="text-sm font-normal border-t">
                  <td className="py-2 px-4 border-b text-xs md:text-sm">{teacher.id}</td>
                  <td className="py-2 px-4 border-b text-xs md:text-sm">{teacher.name}</td>
                  <td className="py-2 px-4 border-b text-xs md:text-sm">{teacher.email}</td>
                  <td className="py-2 px-4 border-b text-xs md:text-sm">{teacher.phone}</td>
                  <td className="py-2 px-4 border-b text-xs md:text-sm">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-md text-xs md:text-sm transition duration-300"
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
    </div>
  )
}

export default StudentList
