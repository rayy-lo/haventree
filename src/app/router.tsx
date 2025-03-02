import { RouterProvider, createBrowserRouter } from 'react-router';
import { lazy, Suspense } from 'react';

import { paths } from '@/config/paths';
import { Spinner } from '@/components/ui/Spinner';

const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const SearchPage = lazy(() => import('@/pages/SearchPage'));
const ForecastPage = lazy(() => import('@/pages/ForecastPage'));

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      element: (
        <Suspense fallback={<Spinner />}>
          <SearchPage />
        </Suspense>
      ),
      path: paths.home.path,
    },
    {
      element: (
        <Suspense fallback={<Spinner />}>
          <ForecastPage />
        </Suspense>
      ),
      path: paths.forecast.path,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};
