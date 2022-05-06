import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchLine = createAsyncThunk("line/fetchLine", (id) => {
  // return a Promise containing the data we want
  return fetch(`/routes/${id}`)
    .then((response) => response.json())
    .then((data) => data);
});


export const lineSlice = createSlice({
  name: 'line',
  initialState: {
  entities: [], //array of buses
  status: "idle", // loading state
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
  },
})




export default lineSlice.reducer