import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchBuses = createAsyncThunk("buses/fetchBuses", () => {
  // return a Promise containing the data we want
  return fetch("/routes")
    .then((response) => response.json())
    .then((data) => data);
});


export const busesSlice = createSlice({
  name: 'buses',
  initialState: {
  entities: [], //array of buses
  status: "idle", // loading state
  },
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchBuses.pending](state) {
      state.status = "loading";
    },
    [fetchBuses.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = busesSlice.actions

export default busesSlice.reducer