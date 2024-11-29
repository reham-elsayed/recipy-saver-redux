import { useContext, useState } from "react"
import {Link,  useNavigate} from "react-router-dom"
import { AuthContext } from "../../../context/authContext/authContext"
import logo from '../../../public/logo.png'
export default function Nav(){
  const navigate = useNavigate()
  const [error, setError]= useState(null)
  const {currentUser, logout} = useContext(AuthContext);
  const [isClicked, setIsClicked]= useState(false)
  console.log(currentUser)
  function handleNav(){
setIsClicked(!isClicked)
  }
  async function handleSignout(){
    try{
await logout()
navigate('/home')
}
catch{
  setError("Failed to logout");
}
  }
    return(
        <>
        <div>
          
                    

<nav className="fixed top-0 left-0 right-0 shadow-slate-900 bg-indigo-500 border-gray-200 dark:bg-gray-900 z-50 nn">
  <div className="relative text-start max-w-screen-xl flex flex-col md:flex-row items-center justify-between mx-auto p-4">
 <div className="self-start"> <a href="#" className=" flex -order-2 items-center space-x-3 rtl:space-x-reverse">
      <img src={logo} className="h-8" alt="Recipy Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Recipy Saver
      </span>
  </a></div>
 
    <button data-collapse-toggle="navbar-search" onClick={handleNav}  type="button" className="inline-flex -order-1 right-2 absolute items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  
    <div className={`items-start justify-between w-full md:w-fit  md:flex   ${isClicked?'block':'hidden'}`} id="navbar-search">
      
     
      <ul className={` flex flex-col p-4 md:p-0 mt-4 font-medium border md:border-gray-100 rounded-lg bg-indigo-500 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 `}>
        <li>
          <Link to="/home" className="block py-2 px-3 text-white bg-indigo-500 rounded md:bg-transparent  md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
        </li>
        <li>
          <Link to="/myrecipy" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">My recipies</Link>
        </li>
        <li>
          <Link to="/ingredient" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Ingredients</Link>
        </li>  
      </ul>
    </div>
    
    <div className={`md:flex justify-center items-center w-full md:w-fit   ${isClicked?'block':'hidden'}`}>
 
 <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:border-gray-100 rounded-lg bg-indigo-500 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
 {currentUser?<li>
    <a 
    onClick={handleSignout}
     className="block py-2 px-3 bg-indigo-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">sign out</a>
  </li>
  
  :
  <>
  <li>
    <Link to="/signup" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">signup</Link>
  </li>
  <li>
    <Link to="/login" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Login</Link>
  </li>
  </>}
 
  </ul>
  {error && <p>{error}</p>}
</div>
  </div>
</nav>
        
                </div>
           
        </>
    )
}