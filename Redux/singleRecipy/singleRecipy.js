import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getSingleRecipy = createAsyncThunk('/singleRecipy/recipy', async function(id){
   return await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then(response=>response.json()) 
 
})
const singleRecipySlice = createSlice({
    name:'singleRecipy',
    initialState:{
    recipy:{},
    isLoading:false,
    isError:false,
},

extraReducers: function(builder){
    builder.addCase(getSingleRecipy.fulfilled, function(state, action){
        console.log(action.payload)
      state.recipy = action.payload.meals[0]
      state.isLoading = false
      state.isError = false
    })
    builder.addCase(getSingleRecipy.pending, function(state, action){
        state.isLoading=true
        state.isError=false
    })
    builder.addCase(getSingleRecipy.rejected, function(state, action){
        state.isError=true
        state.isLoading = false
      })
}

})

export default singleRecipySlice.reducer