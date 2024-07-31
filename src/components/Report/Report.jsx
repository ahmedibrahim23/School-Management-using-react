import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Report() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from an API or database
    axios.get('/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Report</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.value}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Report;