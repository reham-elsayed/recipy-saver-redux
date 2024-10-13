import { createAsyncThunk,  createSlice } from "@reduxjs/toolkit";

export const getSingleIngredient =createAsyncThunk('/singleIngredient/oneingredient', async function(name){
    return await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`).then(response=>response.json())
  })

  const singleIngredientSlice = createSlice(
    {
        name: 'singleIngredient',
        initialState:{
            oneIngredient:[],
            isLoading:false,
            isError:false
        
        },
        extraReducers: function(builder){
            builder.addCase(getSingleIngredient.fulfilled, function(state, action){
                console.log(action.payload)
                state.oneIngredient = action.payload.meals
                state.isLoading = false
                state.isError = false

            } )
            builder.addCase(getSingleIngredient.pending, function(state, action){
                state.isLoading=true
                state.isError=false
            })
            builder.addCase(getSingleIngredient.rejected, function(state, action){
                state.isError=true
                state.isLoading = false
              })
        }
    }
  )
  export default singleIngredientSlice.reducer