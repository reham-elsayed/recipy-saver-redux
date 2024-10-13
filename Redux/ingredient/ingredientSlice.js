import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export const getAllproducts = createAsyncThunk('/ingredient/allIngredient',async function(){
  return await fetch('https://themealdb.com/api/json/v1/1/list.php?i=list').then(response=>response.json())
})
const ingredientSlice = createSlice({
    name: 'ingredient',
    initialState:{
        allIngredient:[],
        isLoading:false,
       isError:false,
    },
  extraReducers :function( builder ){
    builder.addCase(getAllproducts.fulfilled, function(state, action){
      console.log(action.payload.meals)
      state.allIngredient = action.payload.meals
      state.isLoading = false
      state.isError=false
    })
    builder.addCase(getAllproducts.pending,function(state, action){
state.isLoading=true
state.isError=false
    })
    builder.addCase(getAllproducts.rejected, function(state, action){
      state.isError=true
      state.isLoading = false
    })
  }
})
export const {chngeData} = ingredientSlice.actions
export default ingredientSlice.reducer