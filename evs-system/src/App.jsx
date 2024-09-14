import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AdminDashboard from './pages/Dashboard/AdminDashboard';

import ClassRoom from './pages/Dashboard/ClassRoom';
import AuthPage from './pages/Auth/Regitsration/AuthPage';
import TeacherDashBoard from './pages/Dashboard/TeacherDashBoard';
import StudentDashBoard from './pages/Dashboard/StudentDashBoard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClassRoom />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/teacher/classes" element={<TeacherDashBoard />} />
        <Route path="/student/courses" element={<StudentDashBoard />} />
      </Routes>
    </Router>
  );
};

export default App;
