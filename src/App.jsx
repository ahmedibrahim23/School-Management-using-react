import React from 'react'
import TeacherDashboard from './dashBoards/TeacherDashboard'
import Admin from './dashBoards/Admin';
// import LoginPage from './components/login page/LoginPage';

const App = () => {
  return (
    <div>
<
      { <TeacherDashboard/> }
      {/* <LoginPage/> */}
       {<Admin/>} 
    </div>
  )
}

export default App;
