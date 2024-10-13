import { createAsyncThunk,  createSlice } from "@reduxjs/toolkit";

export const getSingleCategory =createAsyncThunk('/singleCategory/onecategory', async function(name){
    return await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`).then(response=>response.json())
  })

  const singleCategorySlice = createSlice(
    {
        name: 'singleCategory',
        initialState:{
            oneCategory:[],
            isLoading:false,
            isError:false
        
        },
        extraReducers: function(builder){
            builder.addCase(getSingleCategory.fulfilled, function(state, action){
                console.log(action.payload)
                state.oneCategory = action.payload.meals
                state.isLoading = false
                state.isError = false

            } )
            builder.addCase(getSingleCategory.pending, function(state, action){
                state.isLoading=true
                state.isError=false
            })
            builder.addCase(getSingleCategory.rejected, function(state, action){
                state.isError=true
                state.isLoading = false
              })
        }
    }
  )
  export default singleCategorySlice.reducer