import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchLine = createAsyncThunk("line/fetchLine", async (id) => {
  // return a Promise containing the data we want
  const response = await fetch(`/routes/${id}`);
  const data = await response.json();
  return data;
});


export const lineSlice = createSlice({
  name: 'line',
  initialState: {
  entities: [], //array of buses
  status: "idle", // loading state
  errorMessage: null
  },
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchLine.pending](state) {
      state.status = "loading";
    },
    [fetchLine.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },

    [fetchLine.rejected](state, {error}) {
      console.log({error})
      state.status = "rejected";
      state.errorMessage = error.message
    }, 

  },
})




export default lineSlice.reducer