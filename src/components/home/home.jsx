
import { Outlet, useNavigate} from 'react-router-dom';
import { getAllcategories } from "../../../Redux/category/categorySlice";
import {  useState, useEffect, createContext, lazy, Suspense} from 'react';
import { getSingleCategory } from "../../../Redux/singleCategory/singleCategorySlice";
//import { getSingleRecipy } from "../../../Redux/singleRecipy/singleRecipy";
import styles from './home.module.css'
import { useDispatch, useSelector } from "react-redux";
import { SavedRecipyContext } from '../../../context/SavedRecipyContext/SavedrecipyContext';
export const RecipeContext  = createContext();
//import { LazyLoadImage } from 'react-lazy-load-image-component';
//import 'react-lazy-load-image-component/src/effects/blur.css';
//import Card from '../Card/Card';
const Card = lazy(()=> import('../Card/Card'))
export default function Home(){

    const{ allCategories} = useSelector((store=>store.categorySlice))
    const{ oneCategory} = useSelector((store=>store.singleCategorySlice))
   // const{ recipy } = useSelector((store)=> store.singleRecipySlice)
    const navigate= useNavigate;
    const dispatch = useDispatch()
    //const [isClicked, setIsClicked] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    
//const {savedRecipy, setSavedRecipy, addData, deleteData} = useContext(SavedRecipyContext);
// async function addToSaved(recipy){
//   await addData(recipy)
//   setSavedRecipy(recipy)
//   console.log(savedRecipy)
// }
// async function deleteFromSaved(recipy){
//   await deleteData(recipy)
//   setSavedRecipy(recipy)
//   console.log(savedRecipy)
// }
    const toggleDrawer = () => {
      setIsOpen(!isOpen);
      console.log(isOpen)
    };
    const closeDrawer = () => {
       setIsOpen(false);
       console.log(isOpen)
     };
    //  const handleDisply = ()=>{
    //   setIsClicked(true)

    //  }
    //  const closeDisplay = ()=>{
    //   setIsClicked(false)

    //  }
    useEffect(()=>{
       
dispatch(getAllcategories())
dispatch(getSingleCategory('beef'));
    },[])
    console.log(allCategories)

    // function goToYoutube(url){
    //   window.location.replace(url);
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
        <Suspense fallback={<div className='h-50 bg-slate-200'></div>}> 
        <Card  recipe={recipe}/>
      </Suspense>
      )}
        </div>
        </div>
       
        </div>
    )
}