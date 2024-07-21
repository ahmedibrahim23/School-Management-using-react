import React from 'react'

const TeacherForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-600 to-indigo-100 flex justify-center items-center w-full p-4">
    <form className="bg-white p-6 rounded-xl shadow-md max-w-4xl w-full overflow-hidden">
      <h1 className="text-center text-2xl font-semibold text-gray-800 mb-6">Teacher Registration</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">            
        <div className="flex flex-col">
          <label className="block mb-1 text-gray-600 font-semibold" htmlFor="name">Fullname</label>
          <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="text" id="name" name="name" placeholder="Fullname" />
        </div>
        
        <div className="flex flex-col">
          <label className="block mb-1 text-gray-600 font-semibold" htmlFor="email">Email</label>
          <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div className="flex flex-col">
          <label className="block mb-1 text-gray-600 font-semibold" htmlFor="password">Password</label>
          <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="password" id="password" name="password" placeholder="********" />
        </div>
        <div className="flex flex-col">
          <label className="block mb-1 text-gray-600 font-semibold" htmlFor="gender">Gender</label>
          <select className="bg-indigo-50 px-4 py-2 outline-none rounded-md" id="gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="block mb-1 text-gray-600 font-semibold" htmlFor="phone">Phone Number</label>
          <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="tel" id="phone" name="phone" placeholder="Phone Number" />
        </div>
        <div className="flex flex-col">
          <label className="block mb-1 text-gray-600 font-semibold" htmlFor="address">Address</label>
          <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md" type="text" id="address" name="address" placeholder="Address" />
        </div>
        <div className="flex flex-col">
          <label className="block mb-1 text-gray-600 font-semibold" htmlFor="class">Class</label>
          <select className="bg-indigo-50 px-4 py-2 outline-none rounded-md" id="class" name="class">
              <option value="">Select Class</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="Form 1">Form 1</option>
              <option value="Form 2">Form 2</option>
              <option value="Form 3">Form 3</option>
              <option value="Form 4">Form 4</option>
          </select>
        </div>
        <div className="flex flex-col">
        <label className="block mb-1 text-gray-600 font-semibold" htmlFor="Subject">Subject</label>
        <select className="bg-indigo-50 px-4 py-2 outline-none rounded-md" id="subject" name="subject">
          <option value="">Select Subject</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Science">Science</option>
          <option value="English">English</option>
          <option value="Social Studies">Social Studies</option>
          <option value="Geography">Geography</option>
          <option value="History">History</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Biology">Biology</option>
          <option value="Physics">Physics</option>
          <option value="Afsoomali">AfSoomaali</option>
        </select>
        </div>
  
      </div>
      <button className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">
        Register
      </button>
      
    </form>
  </div>
  )
}

export default TeacherForm
