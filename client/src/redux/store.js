import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import busesReducer from "./busesSlice"
import lineReducer from "./lineSlice"
import predictionsReducer from "./predictionsSlice";
import stopsReducer from "./stopsSlice"


const reducers = combineReducers({
        buses: busesReducer,
        line: lineReducer,
        stops: stopsReducer,
        
  });

  const persistConfig = {
    key: 'root',
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, reducers);

  const store = configureStore({
    reducer: {
       persisted: persistedReducer,
       predictions: predictionsReducer
      },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
  });

export default store