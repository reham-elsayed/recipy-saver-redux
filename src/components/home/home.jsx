
import { Outlet, useNavigate} from 'react-router-dom';
import { getAllcategories } from "../../../Redux/category/categorySlice";
import {  useState, useEffect, createContext, useContext} from 'react';
import { getSingleCategory } from "../../../Redux/singleCategory/singleCategorySlice";
import { getSingleRecipy } from "../../../Redux/singleRecipy/singleRecipy";
import styles from './home.module.css'
import { useDispatch, useSelector } from "react-redux";
import { SavedRecipyContext } from '../../../context/SavedRecipyContext/SavedrecipyContext';
export const RecipeContext  = createContext();
export default function Home(){

    const{ allCategories} = useSelector((store=>store.categorySlice))
    const{ oneCategory} = useSelector((store=>store.singleCategorySlice))
    const{ recipy } = useSelector((store)=> store.singleRecipySlice)
    const navigate= useNavigate;
    const dispatch = useDispatch()
    const [isClicked, setIsClicked] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
const {savedRecipy, setSavedRecipy, addData, deleteData} = useContext(SavedRecipyContext);
async function addToSaved(recipy){
  await addData(recipy)
  setSavedRecipy(recipy)
  console.log(savedRecipy)
}
async function deleteFromSaved(recipy){
  await deleteData(recipy)
  setSavedRecipy(recipy)
  console.log(savedRecipy)
}
    const toggleDrawer = () => {
      setIsOpen(!isOpen);
      console.log(isOpen)
    };
    const closeDrawer = () => {
       setIsOpen(false);
       console.log(isOpen)
     };
     const handleDisply = ()=>{
      setIsClicked(true)

     }
     const closeDisplay = ()=>{
      setIsClicked(false)

     }
    useEffect(()=>{
       
dispatch(getAllcategories())
dispatch(getSingleCategory('beef'));
    },[])
    console.log(allCategories)

    function goToYoutube(url){
      window.location.replace(url);
    }
//     async function getCategory(){
       
//        let data = await fetch("https://themealdb.com/api/json/v1/1/categories.php")
//        let res = await data.json();
//        console.log(res.categories)
//        setRecipies(res.categories);
//    }

// async function handleClick(name){


//     let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
//     let res = await data.json();
    
//     setSingleRecipy(res.meals);

//     console.log(name, "clicked")
   
//     console.log(res.meals)
// }

    return(
        <div className="grid grid-cols-4 py-16 ">
                <div className="md:col-span-1 md:shadow-lg md:shadow-slate-900">
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
        <aside id="separator-sidebar" className={`inline-flex   h-screen transition-transform ${isOpen?'translate-x-0 block z-40 w-50 fixed top-0 left-0 ':'-translate-x-full hidden static'} sm:block sm:static sm:translate-x-0`} aria-label="Sidebar">
        <div className="h-full px-3 py-4 bg-transparent bg-opacity-85 md:bg-gray-50 dark:bg-gray-800">
                    <ul className={`text-start h-screen overflow-auto ${styles.inst}  `}>
                    {allCategories.map((res)=>
                        <li key={res.idCategory} className="pb-2 md:text-xl text-blue-500 bg-yellow-50 m-1 shadow hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 p-4 rounded-t-lg hover:text-gray-600 focus:bg-gray-50"
                        onClick={()=>{dispatch(getSingleCategory(res.strCategory))}}>{res.strCategory}</li>
                        )}
                    </ul>
                    </div>
                  </aside>
                    </div>
        <div className={`h-screen bg-amber-100 bg-opacity-60 p-2 overflow-auto ${styles.inst} col-span-4 md:col-span-3 over `} onClick={closeDrawer}>

        <div className={` grid grid-col-1  md:grid-cols-3 gap-2 `}>
      {oneCategory.map((recipe) => 
        
        <div key={recipe.idMeal} 
        id={recipe.idMeal} 
        onClick={()=>{dispatch(getSingleRecipy(recipe.idMeal))}}className=" flex flex-col overflow-hidden mt-6 text-gray-700 shadow-md bg-clip-border rounded-xl">
          <div 
          onClick={handleDisply}
          className="relative parent overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img src={recipe.strMealThumb} alt="card-image" />
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
      )}
        </div>
        </div>
        <div 
        className={`col-span-4 bg-slate-50 py-5 bg-opacity-75 ${isClicked?`block fixed z-50 top-0 right-0 left-0 bottom-0`:`hidden`}`}>
          

<div className={`${styles.inst} py-5 h-screen overflow-auto overscroll-none bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>

  <div className=" container px-10 mx-auto flex flex-col md:flex-row relative">
    <div className='w-full md:w-1/3'>
        <img className="rounded-t-lg w-full" src={recipy.strMealThumb} alt={recipy.strMeal} />
        <button onClick={()=>{addToSaved(recipy)}} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           Add To Your Recipies
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>

        <button onClick={()=>{deleteFromSaved(recipy)}} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           delete from Your Recipies
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
        </div>
    )
}