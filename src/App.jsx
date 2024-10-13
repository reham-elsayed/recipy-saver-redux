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
      index:true,
        element:<Home/>,  
      },
     
      {
        path: "/home",
        element:<Home/>,  
      },
      {
        path:"/about",
        element:<ProtectedRoutes>
          <RecipeList />
        </ProtectedRoutes>
      },
      {
        path:"/contact",
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
    ]
  },
  
])

 function App() {
//   const firebaseConfig = {
//     apiKey: "AIzaSyBRrTWRbw91oKFHHV8AW0xx50dO0s4-7po",
//     authDomain: "newprojectauthrecipy.firebaseapp.com",
//     projectId: "newprojectauthrecipy",
//     storageBucket: "newprojectauthrecipy.appspot.com",
//     messagingSenderId: "280878145026",
//     appId: "1:280878145026:web:8397cbd63aa5396784911b"
//   };
  
//   // Initialize Firebase
//   const firebaseApp = initializeApp(firebaseConfig);
//     const auth = getAuth(firebaseApp);
    
    // console.log(auth)

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
