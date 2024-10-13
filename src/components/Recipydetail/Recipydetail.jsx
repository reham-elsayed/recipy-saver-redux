import { useState } from "react"




export default function Recipydetail({data}){
    const [tagsname, setTagsname] = useState([])
    const [tags, setTags]= useState([])

  
return(
    <div className="grid grid-cols-4">
 <div className="col-span-2 md:col-span-1 text-center rounded-lg place-items-center">
    <img className="w-full" src={data[0].strMealThumb} alt="meal"/>
 <div className="block mb-4 font-sans text-lg font-semibold leading-tight tracking-normal  text-inherit">
      {data[0].strMeal}
    </div>
  </div>
   <div className="col-span-3">
  <div className=" p-5">
    <h3
     className="block mb-4 font-sans text-l text-xl font-semibold leading-tight tracking-normal  text-inherit">
     Instructions
    </h3>
    <div id="instructions" className="block mb-4   leading-tight tracking-normal  text-inherit">
      {data.map((item)=> <p>{item.strInstructions.split('.')}</p>)}
    </div>
    
    <h3
     className="block mb-4 font-sans text-l text-xl font-semibold leading-tight tracking-normal  text-inherit">
     Area: {data[0].strArea}
    </h3>
    <h3
     className="block mb-4 font-sans text-l text-xl font-semibold leading-tight tracking-normal  text-inherit">
     Area: {data[0].strCategory}
    </h3>
   <h3
     className="block mb-4 font-sans text-l text-xl font-semibold leading-tight tracking-normal  text-inherit">
     Recipy:

    </h3>
    <div id="bat"
     className="flex flex-wrap gap-2  mb-2 font-sans ">
    </div>
    <div>
    <button id="link"className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Source
</button>

<button id="youtube"className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4">
    Youtube
</button>
    </div>
            </div>
            </div>
            </div>
)
}