import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchVehicles = createAsyncThunk("vehicles/fetchVehicles", (route) => {
  // return a Promise containing the data we want
  return fetch(`/vehicles/${route}`)
    .then((response) => response.json())
    .then((data) => data);
});


export const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState: {
  entities: [], //array of buses
  status: "idle", // loading state
  },
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchVehicles.pending](state) {
      state.status = "loading";
    },
    [fetchVehicles.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
  },
})




export default vehiclesSlice.reducer