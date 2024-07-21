import React from 'react'

const SubjectForm = () => {
  return (
    <div class="h-screen bg-gradient-to-br from-gray-600 to-indigo-100 flex justify-center items-center w-full">
  <form>
    <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-lg">
      <div class="space-y-4">
        <h1 class="text-center text-2xl font-semibold text-gray-600">Subject Registeration</h1>
        <div>
          <label for="Subject" class="block mb-1 text-gray-600 font-semibold">Subject</label>
          <input type="text" id="name" name="name" placeholder="Subject Name" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full "></input>
        </div>
      </div>
      <button class="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Register</button>
    </div>
  </form>
</div>
  )
}

export default SubjectForm
