
import '../App.css';
import React, {useState } from "react";
import { Route, Routes, useNavigate} from "react-router-dom";
import Map from './Map'
import NavBar from './NavBar';
import Schedule from './Schedule';
import LineDetails from './LineDetails';


function App() {
  const[lineDetail, setLineDetail] = useState([])
  const navigate = useNavigate();
  
  function showLineDetail(data){
    setLineDetail(data)
    navigate("/details")
  }

  

  return (
    <div>
    <NavBar/>
    <Map class="leaflet-container"/>
    <Routes>
      <Route exact path ="/schedule" element={<Schedule showLineDetail={showLineDetail}/>}/>
      <Route exact path ="/details" element={<LineDetails details={lineDetail}/>}/>
    </Routes>
    </div>
  );
}

export default App;
