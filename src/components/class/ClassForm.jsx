import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const ClassForm = () => {
  const navigate = useNavigate();
  const [stdClass, setStdClass] = useState({ name: '' });
  const { name } = stdClass;

  const onInputChange = (event) => {
    setStdClass({ ...stdClass, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/class/new', stdClass);

      if (response.status === 200 || response.status === 201) { // Check for successful response status
        alert('Class added successfully!');
        navigate('/classes');
      } else {
        console.error('Unexpected API response:', response);
      }
    } catch (error) {
      console.error('Error adding class:', error);
      // alert('An error occurred while adding the class. Please try again later.'); // Informative user error message
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-gray-600 to-indigo-100 flex justify-center items-center w-full">
      <form onSubmit={onSubmit}>
        <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-lg">
          <div className="space-y-4">
            <h1 className="text-center text-2xl font-semibold text-gray-600">Class Registeration</h1>
            <div>
              <label htmlFor="className" className="block mb-1 text-gray-600 font-semibold">
                ClassName
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="className"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                value={name}
                onChange={onInputChange}
                required
              />
            </div>
          </div>
          <button className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClassForm;
