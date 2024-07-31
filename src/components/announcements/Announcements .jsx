import React, { useState, useEffect } from 'react';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: 'New Curriculum Update',
      date: '2023-07-25',
      content: 'We have updated the curriculum for the upcoming academic year...',
    },
    {
      id: 2,
      title: 'Holiday Notice',
      date: '2023-07-22',
      content: 'The school will be closed on July 30th due to a public holiday...',
    },
    // Add more announcements as needed
  ]);

  // This useEffect is for demonstration, you can fetch announcements from an API
  useEffect(() => {
    // Fetch announcements from API and set them to state
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Announcements</h1>
      <div className="bg-white shadow rounded-lg p-4">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="border-b border-gray-200 pb-4 mb-4">
            <h2 className="text-xl font-semibold text-gray-700">{announcement.title}</h2>
            <p className="text-sm text-gray-500">{announcement.date}</p>
            <p className="text-gray-600 mt-2">{announcement.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
