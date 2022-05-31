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
import MyAccount from "./MyAccount";
import BicyclesMain from "./bicycles/BicyclesMain";
import "../App.css"



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
  navigate("/home")
  }

  if (!user) {
   return(
     <div className="main-bg">
       <div className="bg-content">
       <Routes>
        <Route exact path= "/" element={<Login onLogin={onLogin} user={user}/>}></Route>
        <Route exact path = "/signup" element={<SignUp onLogin={onLogin}/>}></Route>
       </Routes>
       </div>
     </div>
   )   
  }

  return (
    <>
    <NavBar user={user} setUser={setUser}/>
    <div className="main-bg">
    <div className="bg-content">
    <Routes>
      <Route exact path="/home" element={<Home/>}></Route>
      <Route exact path="/myAccount" element={<MyAccount user={user} setUser={setUser}/>}></Route>
      <Route exact path ="/schedule" element={<Schedule  location={location} zoomIn={zoomIn} setZoomIn={setZoomIn}/>}/>
      <Route exact path="/bicycles" element={<BicyclesMain user={user}/>}/>
      <Route exact path ="/details" element={<LineDetails location={location} zoomIn={zoomIn} changeMapCenter={changeMapCenter} setZoomIn={setZoomIn}/>}/>
      <Route exact path ="/stops" element={<Stops changeMapCenter={changeMapCenter} location={location} zoomIn={zoomIn}/>}/>
      <Route exact path ="/stopDetail" element={<StopDetail location={location} zoomIn={zoomIn} setZoomIn={setZoomIn}/>}/>
    </Routes>
    </div>
    </div>
    </>
  );
}

export default App;
