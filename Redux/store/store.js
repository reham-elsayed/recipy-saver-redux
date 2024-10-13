import { configureStore } from '@reduxjs/toolkit'
import  ingredientSlice from '../ingredient/ingredientSlice'
import singleIngredientSlice from '../ingredient/singleIngredientSlice'
import singleRecipySlice from '../singleRecipy/singleRecipy'
import categorySlice from '../category/categorySlice'
import singleCategorySlice from '../singleCategory/singleCategorySlice'
// export default configureStore({

//   reducer: {
//     ingredients: ingredientReducer,
    
//   },
 
// })
export const store =configureStore(
  {reducer:{
    ingredientSlice,
    singleIngredientSlice,
    singleRecipySlice,
    categorySlice,
    singleCategorySlice,



  }}
)