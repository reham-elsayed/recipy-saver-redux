import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login/Login.jsx';
import Layout from './components/layout/layout';
import Home from './components/home/home.jsx'
import Contact from './components/contact/contact.jsx';
import ForgotPassword from './components/Forgotpassword/Forgotpassword.jsx';
import './App.css'
import ProtectedRoutes from '../context/ProtectedRoutes/ProtectedRoutes.jsx'
import RecipeList from './components/about/about.jsx';
import Signup from './components/Signup/Signup.jsx';


// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
const router = createBrowserRouter([
  {
    path:'',
    element:<Layout/>,
    children:[
      {
        index: true,
        element:<Home/>,  
      },
     
      {
        path: "/home",
        element:<Home/>,  
      },
      {
        path:"/myrecipy",
        element:<ProtectedRoutes>
          <RecipeList />
        </ProtectedRoutes>
      },
      {
        path:"/Ingredient",
        element:<Contact />
      },
      {
        path:"/signup",
        element:<Signup />
      },
     
      {
        path:"/login",
        element:<Login />
      },
      {
        path:"/forgotpassword",
        element:<ForgotPassword />
      },
      {path:"/*",
      element:<div>"something went wrong"</div>
      }
    ]
  },
  
])

 function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
