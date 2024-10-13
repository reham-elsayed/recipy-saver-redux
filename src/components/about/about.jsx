
import React, { useEffect,useState } from 'react';
import styles from './about.module.css'
import {useContext} from 'react';
import { AuthContext } from '../../../context/authContext/authContext';
import { SavedRecipyContext } from '../../../context/SavedRecipyContext/SavedrecipyContext';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSingleRecipy } from "../../../Redux/singleRecipy/singleRecipy";
import image from"../../../public/images1.png"
export default function RecipeList() {
  const{ recipy } = useSelector((store)=> store.singleRecipySlice)
    const navigate= useNavigate;
    const dispatch = useDispatch()
const {currentUser} = useContext(AuthContext)
const {getData, deleteData} = useContext(SavedRecipyContext)
const [recipies, setRecipies] = useState([])
const [isOpen, setIsOpen] = useState(false);

const toggleDrawer = () => {
  setIsOpen(!isOpen);
  console.log(isOpen)
};
const closeDrawer = () => {
   setIsOpen(false);
   console.log(isOpen)
 };
async function getrecipies(){
return await getData().then(recipes => {
  setRecipies(recipes);
}).catch(error => {
  console.error("Failed to set recipes:", error);
});

}


useEffect(()=>{
  getrecipies()

},[])
useEffect(()=>{
  if(recipies.length>0){
    dispatch(getSingleRecipy(recipies[0]?.idMeal))
  }
 
  },[])
async function deleteFromSaved(rec){
  await deleteData(rec)
  await  getrecipies()
  
  console.log(savedRecipy)
}
console.log(recipy)
  return (
    <article>
     
      
     
      <div className="grid grid-cols-4 pt-20  h-screen ">
                <div className="col-span-1 h-full shadow-lg shadow-slate-900">
                <button data-drawer-target="separator-sidebar" 
              onClick={toggleDrawer}
                
                data-drawer-toggle="separator-sidebar"
                 aria-controls="separator-sidebar"
                  type="button" 
                  className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-colors ">
                  <span className="sr-only">Open sidebar</span>
           <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
           </svg>
        </button>
        <aside id="separator-sidebar" className={`rounded-md h-screen transition-transform ${isOpen?'translate-x-0 block z-40 w-50 fixed top-20 left-0 ':'-translate-x-full hidden static'} sm:block sm:static sm:translate-x-0`} aria-label="Sidebar">
        <div className=" px-3 py-4 rounded-md  shadow-slate-900  bg-gray-50 dark:bg-gray-800">
                    <ul className={`text-start  overflow-auto ${styles.inst}  `}>
                    {recipies?.map((res)=>
                        <li key={res.idMeal} className="pb-2 md:text-xl text-blue-500 bg-yellow-50 m-1 shadow hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 p-4 rounded-t-lg hover:text-gray-600 focus:bg-gray-50"
                        onClick={()=>{dispatch(getSingleRecipy(res.id))}}>{res.strMeal}</li>
                        )}
                    </ul>
                    </div>
                  </aside>
                    </div>
        <div className={` bg-amber-100  col-span-3 `} onClick={closeDrawer}>
      {recipies.length>0? 
        <div class={`${styles.inst} py-5  overflow-auto overscroll-none    dark:bg-gray-800 dark:border-gray-700`}>

<div className=" container px-10 mx-auto flex flex-col md:flex-row relative">
  <div className='w-full md:w-1/3'>
      <img class="rounded-t-lg w-full" src={recipy.strMealThumb} alt={recipy.strMeal} />
     

      <button onClick={()=>{deleteFromSaved(recipy)}} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
         delete from Your Recipies
           <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
      </button>
      </div>
  <div class="p-5 w-full md:w-2/3">
    
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{recipy.strMeal}</h5>
    
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{recipy.strInstructions?.split('.').map((line, i) => line.length > i && <div className="w-full text-start bg-transparent">  {i + 1}- {line}</div>)}</p>
      <a onClick={()=>{goToYoutube(recipy.strYoutube)}} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
         youtube video
           <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
      </a>
  </div>
  <div>
  </div>
  </div>
  </div>: <img src={image} className="w-full h-full"/>}
        </div>
        </div>
    </article>
);
}

