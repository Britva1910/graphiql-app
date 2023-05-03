import { createBrowserRouter } from 'react-router-dom';
import { AuthPage } from '../pages/AuthPage/AuthPage';
import { MainPage } from '../pages/MainPage/MainPage';
import { WelcomePage } from '../pages/WelcomePage/WelcomePage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomePage />,
  },
  {
    path: '/main',
    element: <MainPage />,
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
