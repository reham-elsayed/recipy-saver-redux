import React from 'react'
import styles from './card.module.css'
import { getSingleRecipy } from "../../../Redux/singleRecipy/singleRecipy";
import {useState, useContext} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { SavedRecipyContext } from '../../../context/SavedRecipyContext/SavedrecipyContext';

import 'react-lazy-load-image-component/src/effects/blur.css';
function Card({recipe}) {
    const dispatch = useDispatch()
    const{ recipy } = useSelector((store)=> store.singleRecipySlice)
    const [isClicked, setIsClicked] = useState(false);
    const {savedRecipy, setSavedRecipy, addData, deleteData} = useContext(SavedRecipyContext);

    const handleDisply = ()=>{
        setIsClicked(true)
       }
       const closeDisplay = ()=>{
        setIsClicked(false)
       }
       function goToYoutube(url){
        window.location.replace(url);
      }
      async function deleteFromSaved(recipy){
        await deleteData(recipy)
        setSavedRecipy(recipy)
        console.log(savedRecipy)
      }
      async function addToSaved(recipy){
        await addData(recipy)
        setSavedRecipy(recipy)
        console.log(savedRecipy)
      }
  return (
  <>
   <div key={recipe.idMeal} 
        id={recipe.idMeal} 
        onClick={()=>{dispatch(getSingleRecipy(recipe.idMeal))}}className=" flex flex-col overflow-hidden mt-6 text-gray-700 shadow-md bg-clip-border rounded-xl">
          <div 
          onClick={handleDisply}
          className="relative parent overflow-hidden block bg-red-50 text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
           <LazyLoadImage
            src={recipe.strMealThumb} 
              width="400"
              height="300" 
              quality={150} // Adjust based on your needs
        format="webp"
        priority={true}
              effect="blur" 
            alt="card-image" />
            <div className="p-6 layer">
            <h5 className="mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {recipe.strMeal}
            </h5>
            <p className="font-sans text-base antialiased font-light leading-relaxed text-inherit">
              {/* {recipe.strCategoryDescription.split(" ").slice(0, 20).join(" ")} */}
            </p>
          </div>
          </div>
        </div>

        <div 
        className={`col-span-4 bg-slate-50 py-5 bg-opacity-75 ${isClicked?`block fixed z-50 top-0 right-0 left-0 bottom-0`:`hidden`}`}>
          

<div className={`${styles.inst} py-5 h-screen overflow-auto overscroll-none bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>

  <div className=" container px-10 mx-auto flex flex-col md:flex-row relative">
    <div className='w-full md:w-1/3 bg-slate-50'>
        <img className="rounded-t-lg bg-slate-50 "
        width="100%"
        height="300" 
        loading="lazy" 
         src={recipy.strMealThumb} alt={recipy.strMeal} />
        <button onClick={()=>{addToSaved(recipy)}} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           Add Recipy
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>

        <button onClick={()=>{deleteFromSaved(recipy)}} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           remove Recipy
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
        </div>
    <div className="p-5 w-full md:w-2/3">
      
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{recipy.strMeal}</h5>
      
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{recipy.strInstructions?.split('.').map((line, i) => line.length > i && <div className="w-full text-start bg-transparent">  {i + 1}- {line}</div>)}</p>
        <a onClick={()=>{goToYoutube(recipy.strYoutube)}} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           youtube video
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
    <div>
    <i onClick={closeDisplay} className='fa fa-close absolute top-10 right-5  -order-2 md:order-6'></i>
    </div>
</div>
</div>

        </div>
  </>
  )
}

export default Card