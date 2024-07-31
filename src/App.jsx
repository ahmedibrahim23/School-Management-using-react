import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeacherDashboard from './dashBoards/TeacherDashboard';
import Admin from './dashBoards/Admin';
import LoginPage from './components/login page/LoginPage';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin-dashboard/*" element={<Admin />} />
        <Route path="/teacher-dashboard/*" element={<TeacherDashboard />} />
        <Route path="*" element={<NotFound />} /> 

      </Routes>
    </Router>
  );
};

export default App;
