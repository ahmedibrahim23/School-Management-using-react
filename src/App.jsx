import { useState } from 'react'
import'./index.css'
import Sidebar from './components/sidebar/Sidebar'
import Admin from './dashBoards/Admin'


function App() {

  return (
    <div className=" flex">
      <Admin/>
     <Sidebar/>
    </div>
  )
}

export default App
