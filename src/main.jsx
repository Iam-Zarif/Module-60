import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Components/Home/Home.jsx';
import LogIn from './Components/LogIn/LogIn.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import Order from './Components/Order/Order.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import Profile from './Components/Profile/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {path:'/' , element:<Home></Home>},
      {path:'/login' , element:<LogIn></LogIn>},
      {path:'/register' , element:<Register></Register>},
      {path:'/order' , element:<PrivateRoute><Order></Order></PrivateRoute>},
      {path:'/profile' , element:<PrivateRoute><Profile></Profile></PrivateRoute>}
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
