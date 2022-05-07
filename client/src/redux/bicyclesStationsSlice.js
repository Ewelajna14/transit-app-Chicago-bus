import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchBicyclesStations = createAsyncThunk("bstations/fetchBicyclesStations", () => {
  // return a Promise containing the data we want
  return fetch("/bicycles_stations")
    .then((response) => response.json())
    .then((data) =>data)
});


export const bicyclesStationsSlice = createSlice({
  name: 'bstations',
  initialState: {
  entities: [], //array of buses
  status: "idle", // loading state
  },
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchBicyclesStations.pending](state) {
      state.status = "loading";
    },
    [fetchBicyclesStations.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
  },
})



export default bicyclesStationsSlice.reducer