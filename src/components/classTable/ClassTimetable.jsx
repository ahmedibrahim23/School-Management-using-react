import React from 'react';

const ClassTimetable = ({ timetable }) => {
   
      

  const days = ['Monday', 'Tuesday', 'Wednesday',  'Saturday', 'Sunday'];
  const timeSlots = ['8:00 - 9:00 AM', '9:00 - 10:00 AM', '10:00 - 11:00 AM', '11:00 - 12:00 PM', '1:00 - 2:00 PM', '2:00 - 3:00 PM'];

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Class Timetable</h2>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Time</th>
              {days.map(day => (
                <th key={day} className="py-3 px-4 text-left">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((time, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="py-3 px-4 font-semibold text-gray-700">{time}</td>
                {days.map(day => (
                  <td key={day} className="py-3 px-4">
                    {timetable[day][index] ? (
                      <div className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-md shadow-sm">
                        {timetable[day][index]}
                      </div>
                    ) : (
                      <span className="text-gray-400">Free</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassTimetable;
