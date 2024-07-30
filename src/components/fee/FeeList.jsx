import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FeeList = () => {
  const [fees, setFees] = useState([]);

  useEffect(() => {
    // Fetch the list of fees from the backend
    axios.get('http://localhost:8080/api/fees')
      .then(response => {
        setFees(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the fees!', error);
      });
  }, []);

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-600 to-indigo-100 w-full p-4'>
      <div className="bg-white p-4 rounded-md shadow-md">
        <h2 className="mb-4 text-xl font-bold text-gray-700">Fee List</h2>
        <Link to='/fee/new'
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md text-sm md:text-base transition duration-300"
            type="button"
          >
            Add Subject
          </Link>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-md">
            <thead className="bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-bold">
              <tr>
                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Fee ID</th>
                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Student ID</th>
                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Amount</th>
                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Date</th>
                <th className="py-2 px-4 border-b text-left text-xs sm:text-sm">Status</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((fee) => (
                <tr key={fee.id} className="text-sm font-normal border-t">
                  <td className="py-2 px-4 border-b text-xs sm:text-sm">{fee.id}</td>
                  <td className="py-2 px-4 border-b text-xs sm:text-sm">{fee.studentId}</td>
                  <td className="py-2 px-4 border-b text-xs sm:text-sm">{fee.amount}</td>
                  <td className="py-2 px-4 border-b text-xs sm:text-sm">{new Date(fee.date).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border-b text-xs sm:text-sm">{fee.status ? 'Paid' : 'Unpaid'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeeList;
