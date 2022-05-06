import { useState, useEffect} from "react";
import { Route, Routes, useNavigate} from "react-router-dom";
import NavBar from './NavBar';
import Schedule from './Schedule';
import LineDetails from './LineDetails';
import Stops from "./Stops";
import StopDetail from "./StopDetail";
import Home from "./Home"
import Login from "./Login";
import SignUp from "./SignUp";


function App() {

  const navigate = useNavigate()

  const [location, setLocation] = useState(["41.862", "-87.628"])

  const [zoomIn, setZoomIn] = useState(11)

  const [user, setUser] = useState(null)

  useEffect(()=>{
  fetch("/me").then((r)=>{
    if (r.ok){
      r.json().then((user)=> setUser(user))
    }
  })
  }, [])

  function changeMapCenter(center){
  const centerArray = center.split(',')
  setLocation(centerArray)
  setZoomIn(18)
  }

  function  onLogin(newUser){
  setUser(newUser)
  navigate("/")
  }

  return (
    <div>
    <NavBar user={user}/>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path= "/login" element={<Login onLogin={onLogin} user={user}/>}></Route>
      <Route exact path = "/signup" element={<SignUp onLogin={onLogin}/>}></Route>
      <Route exact path ="/schedule" element={<Schedule/>}/>
      <Route exact path ="/details" element={<LineDetails location={location} zoomIn={zoomIn} />}/>
      <Route exact path ="/stops" element={<Stops changeMapCenter={changeMapCenter} location={location} zoomIn={zoomIn}/>}/>
      <Route exact path ="/stopDetail" element={<StopDetail location={location} zoomIn={zoomIn} setZoomIn={setZoomIn}/>}/>
    </Routes>
   
    </div>
  );
}

export default App;
