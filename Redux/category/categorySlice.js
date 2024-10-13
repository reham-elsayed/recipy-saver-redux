import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export const getAllcategories = createAsyncThunk('/category/allCategories',async function(){
  return await fetch('https://themealdb.com/api/json/v1/1/categories.php').then(response=>response.json())
})
const categorySlice = createSlice({
    name: 'category',
    initialState:{
        allCategories:[],
        isLoading:false,
       isError:false,
    },
  extraReducers :function( builder ){
    builder.addCase(getAllcategories.fulfilled, function(state, action){
      console.log(action.payload)
      state.allCategories = action.payload.categories
      state.isLoading = false
      state.isError=false
    })
    builder.addCase(getAllcategories.pending,function(state, action){
state.isLoading=true
state.isError=false
    })
    builder.addCase(getAllcategories.rejected, function(state, action){
      state.isError=true
      state.isLoading = false
    })
  }
})
export default categorySlice.reducer