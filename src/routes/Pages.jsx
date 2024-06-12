import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './Root';
import Post from '../pages/Post';
import Posts from '../pages/Posts';
import Groups from '../pages/Groups';
import ErrorPage from '../pages/Error';

export default function Pages() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      // loader: rootLoader,
      children: [
        { index: true, element: <Groups /> },
        {
          path: 'groups',
          element: <Groups />,
        },
        {
          path: 'groups/:groupId',
          element: <Posts />,
        },
        {
          path: 'groups/:groupId/posts/:postId',
          element: <Post />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
