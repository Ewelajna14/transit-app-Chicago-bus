
import { Route, Routes} from "react-router-dom";
import NavBar from './NavBar';
import Schedule from './Schedule';
import LineDetails from './LineDetails';
import Stops from "./Stops";
import StopDetail from "./StopDetail";


function App() {

  return (
    <div>
    <NavBar/>
    
    <Routes>
      <Route exact path ="/schedule" element={<Schedule/>}/>
      <Route exact path ="/details" element={<LineDetails/>}/>
      <Route exact path ="/stops" element={<Stops/>}/>
      <Route exact path ="/stopDetail" element={<StopDetail/>}/>
    </Routes>
    </div>
  );
}

export default App;
