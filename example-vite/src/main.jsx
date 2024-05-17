import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './pages/products/Products.jsx';
import Sneaker from './pages/products/Sneaker.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'login/:id',
    element: (
      <div>
        <h1>Login Screen</h1>
      </div>
    ),
  },
  {
    path: 'products',
    element: <Products />,
    children: [
      {
        path: 'sneakers',
        element: <Sneaker />,
        children: [{ path: 'app', element: <App /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
