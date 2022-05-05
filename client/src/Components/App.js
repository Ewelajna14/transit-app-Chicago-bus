import { useState } from "react";
import { Route, Routes} from "react-router-dom";
import NavBar from './NavBar';
import Schedule from './Schedule';
import LineDetails from './LineDetails';
import Stops from "./Stops";
import StopDetail from "./StopDetail";
import Home from "./Home"
import Login from "./Login";


function App() {

  const [location, setLocation] = useState(["41.862", "-87.628"])

  const [zoomIn, setZoomIn] = useState(12)

  function changeMapCenter(center){
  const centerArray = center.split(',')
  setLocation(centerArray)
  setZoomIn(18)
  }

  return (
    <div>
    <NavBar/>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path= "/login" element={<Login/>}></Route>
      <Route exact path ="/schedule" element={<Schedule/>}/>
      <Route exact path ="/details" element={<LineDetails location={location} zoomIn={zoomIn} />}/>
      <Route exact path ="/stops" element={<Stops changeMapCenter={changeMapCenter} location={location} zoomIn={zoomIn}/>}/>
      <Route exact path ="/stopDetail" element={<StopDetail location={location} zoomIn={zoomIn} setZoomIn={setZoomIn}/>}/>
    </Routes>
   
    </div>
  );
}

export default App;
