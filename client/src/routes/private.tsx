import { Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Profile = lazy(() => import('../pages/Profile'));

const Private = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export const privateRoutes = [
  {
    path: '/',
    element: <Private />,
    children: [{ path: '/profile', element: <Profile /> }],
  },
];
