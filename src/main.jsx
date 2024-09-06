import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



import Home from './componenet/Home/Home.jsx';
import Products from './Pages/Products.jsx';
import Categories from './Pages/Categories/Categories.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import Cart from './Pages/Register/Cart/Cart.jsx';
import PrivateRoute from './componenet/PrivateRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      
      {
        path: '/',
        element: <PrivateRoute><Home></Home></PrivateRoute>
      },
      {
        path: '/products',
        element: <PrivateRoute><Products></Products></PrivateRoute>
      },
      {
        path: '/categories',
        element: <PrivateRoute><Categories></Categories></PrivateRoute>
      },
      {
        path: '/cart',
        element: <PrivateRoute><Cart></Cart></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
   <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
