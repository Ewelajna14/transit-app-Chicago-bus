import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchPredictions = createAsyncThunk("predictions/fetchPredictions", async ({line: line, stop: stop}) => {
  // return a Promise containing the data we want
  // #routes/:route_id/stops/stops_id/predictions
  
  const response = await fetch(`routes/${line}/stops/${stop}/predictions`);
  const data = await response.json();
  return data;
});



export const predictionsSlice = createSlice({
  name: 'predictions',
  initialState: {
  entities: [], //array of buses
  status: "idle", // loading state
  error: " ",
  },
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchPredictions.pending](state) {
      state.status = "loading";
    },
    [fetchPredictions.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },

    [fetchPredictions.rejected](state, error) {
      state.status = "rejected";
      state.error = error
    }, 

    
  },
})




export default predictionsSlice.reducer