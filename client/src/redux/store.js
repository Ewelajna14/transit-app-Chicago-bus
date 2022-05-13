import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import busesReducer from "./busesSlice"
import lineReducer from "./lineSlice"
import predictionsReducer from "./predictionsSlice";
import stopsReducer from "./stopsSlice"
import vehiclesReducer from "./vehiclesSlice"
import bicyclesStationsReducer from "./bicyclesStationsSlice";
import favLineReducer from "./favLineSlice";


const reducers = combineReducers({
        line: lineReducer,
        vehicles: vehiclesReducer,
        buses: busesReducer,
        stops: stopsReducer
  });

  const persistConfig = {
    key: 'root',
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, reducers);

  const store = configureStore({
    reducer: {
       persisted: persistedReducer,
       predictions: predictionsReducer,
       favLine: favLineReducer,
       bstations: bicyclesStationsReducer,
       
      },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
  });

export default store