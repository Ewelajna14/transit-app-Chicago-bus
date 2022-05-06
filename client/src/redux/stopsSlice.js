import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchStops = createAsyncThunk("stops/fetchStops", async ({line: line, direction: direction}) => {
  // return a Promise containing the data we want
  //`routes/${line}/directions/${direction}/stops`
  // `http://ctabustracker.com/bustime/api/v2/getstops?key=UWQ3VNu3NMTdgFrKZsQFX4jyD&rt=${line}&dir=${direction}&format=json`
  const response = await fetch(`routes/${line}/directions/${direction}/stops`);
  const data = await response.json();
  return data;
});



export const stopsSlice = createSlice({
  name: 'stops',
  initialState: {
  entities: [], //array of buses
  status: "idle", // loading state
  },
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchStops.pending](state) {
      state.status = "loading";
    },
    [fetchStops.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
  },
})



export default stopsSlice.reducer