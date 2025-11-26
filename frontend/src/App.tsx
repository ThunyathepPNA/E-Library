// App.tsx - กำหนด routing หลักของระบบ
import { Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import ReaderPage from './pages/ReaderPage';

function App() {
  return (
    // Routes
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/home/" element={<HomePage />} />
      {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
      <Route path="/reader/:id" element={<ReaderPage />} />
    </Routes>
  );
}

export default App;
