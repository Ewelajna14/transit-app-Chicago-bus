
import '../App.css';
import { Route, Routes} from "react-router-dom";
import Map from './Map'
import NavBar from './NavBar';
import Schedule from './Schedule';

function App() {
  return (
    <div>
    <NavBar/>
    <Map class="leaflet-container"/>
    <Routes>
      <Route exact path ="/schedule" element={<Schedule/>}/>
    </Routes>
    </div>
  );
}

export default App;
