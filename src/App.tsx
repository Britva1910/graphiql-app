import { AuthPage } from './pages/AuthPage/AuthPage';
import { MainPage } from './pages/MainPage/MainPage';
import { WelcomePage } from './pages/WelcomePage/WelcomePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
