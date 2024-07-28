// import React, { useState } from 'react'
// import { FaSearch } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';



// const ClassList = () => {
//     const [searchQuery, setSearchQuery] = useState('');

//   const Classes = [
//     { Class: 'Form 1', Class_Id: '1' },
//     { Class: 'Form 2', Class_Id: '2' },
//     { Class: 'Form 3', Class_Id: '3' },
//     { Class: 'Form 4', Class_Id: '4' },
//   ];

//   const filteredTeachers = Classes.filter(Classes =>
//     Classes.Class.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     Classes.Class_Id.includes(searchQuery)
//   );
//   return (
//     <div className='min-h-screen bg-gradient-to-br from-gray-600 to-indigo-100 w-full p-4'>
//       <div className="bg-white p-4 rounded-md shadow-md">
//         <h2 className="mb-4 text-xl font-bold text-gray-700">Class List</h2>
//         <div className="mb-4 flex items-center">
//           <div className="relative mr-4">
//             <input
//               type="text"
//               className="border rounded-md py-2 pl-8 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Search..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
//           </div>
//           <button
//             className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md text-sm md:text-base transition duration-300"
//             type="button"
//           >
//             Add Classes
//           </button>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-200 rounded-md">
//             <thead className="bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-bold">
//               <tr>
//                 <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">ID</th>
//                 <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Class-Name</th>
//                 <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredTeachers.map((Classes, index) => (
//                 <tr key={index} className="text-sm font-normal border-t">
//                   <td className="py-2 px-4 border-b text-xs sm:text-sm">{Classes.Class_Id}</td>
//                   <td className="py-2 px-4 border-b text-xs sm:text-sm">{Classes.Class}</td>
//                   <td className="py-2 px-4 border-b text-xs sm:text-sm">
//                     <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-md text-xs md:text-sm transition duration-300" type="button">
//                       Edit
//                     </button>
//                     <button className="ml-2 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-md text-xs md:text-sm transition duration-300" type="button">
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
  
//   )
// }

// export default ClassList


import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ClassList = () => {
    const [searchQuery, setSearchQuery] = useState('');

  const Classes = [
    { Class: 'Form 1', Class_Id: '1' },
    { Class: 'Form 2', Class_Id: '2' },
    { Class: 'Form 3', Class_Id: '3' },
    { Class: 'Form 4', Class_Id: '4' },
  ];

  const filteredTeachers = Classes.filter(Classes =>
    Classes.Class.toLowerCase().includes(searchQuery.toLowerCase()) ||
    Classes.Class_Id.includes(searchQuery)
  );
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-600 to-indigo-100 w-full p-4'>
      <div className="bg-white p-4 rounded-md shadow-md">
        <h2 className="mb-4 text-xl font-bold text-gray-700">Class List</h2>
        <div className="mb-4 flex items-center">
          <div className="relative mr-4">
            <input
              type="text"
              className="border rounded-md py-2 pl-8 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <Link to='/classes/new'
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md text-sm md:text-base transition duration-300"
            type="button"
          >
            Add Classes
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-md">
            <thead className="bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-bold">
              <tr>
                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">ID</th>
                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Class-Name</th>
                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTeachers.map((Classes, index) => (
                <tr key={index} className="text-sm font-normal border-t">
                  <td className="py-2 px-4 border-b text-xs sm:text-sm">{Classes.Class_Id}</td>
                  <td className="py-2 px-4 border-b text-xs sm:text-sm">{Classes.Class}</td>
                  <td className="py-2 px-4 border-b text-xs sm:text-sm">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-md text-xs md:text-sm transition duration-300" type="button">
                      Edit
                    </button>
                    <button className="ml-2 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-md text-xs md:text-sm transition duration-300" type="button">
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
  
  )
}

export default ClassList
