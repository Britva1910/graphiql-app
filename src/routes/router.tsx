import { createBrowserRouter } from 'react-router-dom';
import { AuthPage } from '../pages/AuthPage/AuthPage';
import { MainPage } from '../pages/MainPage/MainPage';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import RootLayout from '../layouts/RootLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
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
    ],
  },
]);
