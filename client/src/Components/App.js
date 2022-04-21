
import '../App.css';
import { Route, Routes} from "react-router-dom";
import Map from './Map'
import NavBar from './NavBar';
import Schedule from './Schedule';
import LineDetails from './LineDetails';


function App() {

  return (
    <div>
    <NavBar/>
    <Map class="leaflet-container"/>
    <Routes>
      <Route exact path ="/schedule" element={<Schedule/>}/>
      <Route exact path ="/details" element={<LineDetails/>}/>
    </Routes>
    </div>
  );
}

export default App;
