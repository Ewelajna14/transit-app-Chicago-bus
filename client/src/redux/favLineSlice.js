import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchFavLine = createAsyncThunk("favLine/fetchFavLine", async (id) => {
  // return a Promise containing the data we want
 
  const response = await fetch(`users/${id}/fovourite_lines`)
    const data = await response.json()
     return data 
});

export const createFavLine = createAsyncThunk( "favLine/createFavLine", async ({id, newData})=>{
    const response = await fetch(`users/${id}/fovourite_lines`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
    });
    const data = await response.json();
    return data
})

export const deleteFavLine = createAsyncThunk("favLine/deleteFavLine", async ({user: user, id: id})=>{
    const response = await fetch(`/users/${user}/fovourite_lines/${id}`, {
        method: "DELETE", 
    })

    return id
})


export const favLineSlice = createSlice({
  name: 'favLine',
  initialState: {
  entities: [], //array of buses
  status: "idle", // loading state
  error: "" 
  },
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchFavLine.pending](state) {
      state.status = "loading";
    },
    [fetchFavLine.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
    [fetchFavLine.rejected](state, action) {
      state.status = "rejected";
      state.error = action.payload
    },

    [createFavLine.fulfilled](state, action){
        state.entities.push(action.payload);
        state.status = "idle";
    },

    [deleteFavLine.pending](state) {
      state.status = "loading";
    },

    [deleteFavLine.fulfilled] (state, action){
      const index = state.entities.findIndex(
        (fav) => fav.id == action.payload
      );
      //console.log(index)
      state.entities.splice(index,1)
    },
    
  },
})




export default favLineSlice.reducer