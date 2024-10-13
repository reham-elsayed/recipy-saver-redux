import { useDispatch, useSelector } from "react-redux"
import styles from '../../components/contact/contact.module.css'
import { getAllproducts } from "../../../Redux/ingredient/ingredientSlice"
import singleIngredientSlice, {getSingleIngredient} from '../../../Redux/ingredient/singleIngredientSlice'
import { useEffect, useState, useRef } from "react";
import { getSingleRecipy } from "../../../Redux/singleRecipy/singleRecipy";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Contact(){
   
   // const [recipy, setRecipy]=useState({})
   const [isOpen, setIsOpen] = useState(false);

   const toggleDrawer = () => {
     setIsOpen(!isOpen);
     console.log(isOpen)
   };
   const closeDrawer = () => {
    setIsOpen(false);
    console.log(isOpen)
  };
    const {allIngredient, isError, isLoading } = useSelector((store)=>  store.ingredientSlice)
    const {oneIngredient } = useSelector((store)=>  store.singleIngredientSlice)
    const{ recipy } = useSelector((store)=> store.singleRecipySlice)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllproducts()).unwrap();
        dispatch(getSingleIngredient('beef'))
      //  displayrecipy(52874)
      dispatch(getSingleRecipy(52874))
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    // async function displayrecipy(id){
    //     let data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`) 
    //     let res = await data.json()
    //     console.log(res.meals)
    //     setRecipy(res.meals[0])
    // }
    
console.log(oneIngredient)
    console.log(allIngredient)
  console.log(recipy)
 //  console.log(recipy.strInstructions?.split(/\s*STEP\s*/))
    return(
        <>
 
        
        <div className="grid grid-cols-6 bg-slate-50 bg-opacity-50 my-20 md:px-10">
       <div className="col-span-1 -z-0">
        <button data-drawer-target="separator-sidebar" 
        onClick={toggleDrawer}
       
        data-drawer-toggle="separator-sidebar"
         aria-controls="separator-sidebar"
          type="button" 
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-red-500 rounded-lg sm:hidden bg-slate-100 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>
<aside id="separator-sidebar" className={`inline-flex -z-10   h-screen transition-transform ${isOpen?'translate-x-0 block  w-50 absolute top-0 left-0 ':'-translate-x-full hidden static'} sm:block sm:static sm:translate-x-0`} aria-label="Sidebar">
<div className="h-full px-3 py-4  bg-gray-50 dark:bg-gray-800">
            <ul className={`text-start  h-screen overflow-auto ${styles.inst} `}>
                {allIngredient.slice(0,20).map((ingr)=>
                <li className="pb-2 md:text-xl text-blue-500 bg-yellow-50 m-1 shadow hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 p-4 rounded-t-lg hover:text-gray-600 focus:bg-gray-50"
                onClick={()=>{dispatch(getSingleIngredient(ingr.strIngredient))}}>{ingr.strIngredient}</li>
                )}
            </ul>
            </div>
            </aside>
            </div>
        <div className={`col-span-5 overflow-auto h-screen ${styles.inst}  `} onClick={closeDrawer}>

        <div className="slider-container flex flex-col">
      <div className={`${styles.inst} h-[400px] transition-all delay-150 duration-300 hover:h-screen flex flex-col md:flex-row  `}>
 
        <div className="w-full md:w-1/3 m-2 rounded-md ">
        <img className="w-full rounded-md shadow shadow-stone-400  hover:shadow-stone-700 hover:shadow-lg" src={recipy.strMealThumb}/>

        </div>
        <div className={`w-full md:w-2/3 p-2 text-lg m-2 md:overflow-auto rounded-md shadow shadow-stone-400  hover:shadow-stone-700  hover:shadow-lg ${styles.inst}`}>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{recipy.strMeal}</h5>

        <div className="bg-white">{recipy.strInstructions?.split('.').map((line, i) => line.length > i && <div className="w-full text-start bg-transparent ">  {i + 1}- {line}</div>)}</div>
       
        <a onClick={()=>{goToYoutube(recipy.strYoutube)}} class=" my-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           youtube video
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a> 
        </div>
        
      </div>
      <div className="pt-10 md:order-2 -order-7">
      <h4 className=' mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Pick your next meal</h4>
 <div className="">
      <Slider 
       {...settings}
      >
      
        {oneIngredient?.map((item)=>
        <div className="h-[200px]">
        <img 
        className="slider-img px-1"
        onClick={()=>{dispatch(getSingleRecipy(item.idMeal))}} src={item.strMealThumb} />
        <p>{item.strMeal}</p>
       <div className='layer'></div>
       </div>
   
    )} 
      </Slider>
      </div>
      </div>
    </div>
        </div>
       
        </div>
        </>
    )
}