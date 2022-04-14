import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import 'leaflet/dist/leaflet.css'
import App from './Components/App';
import {CssBaseline} from "@mui/material"
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <CssBaseline/>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
