
import { useSelector} from "react-redux";
import Stop from "./Stop";
import {useNavigate} from 'react-router-dom';
import {Button} from "@mui/material"
import Map from './Map'
import '../App.css';

function Stops({changeMapCenter, location, zoomIn}){

    const navigate = useNavigate()

    const stops = useSelector((state)=>state.persisted.stops.entities["bustime-response"])

    const lineDetail = useSelector((state)=>state.persisted.line.entities)

  

    function backToDetails(){
        navigate("/details")
        }


    return(
        <>
        <Map class="leaflet-container" stops={stops} location={location} zoomIn={zoomIn}/>
        <h1>Schedule for bus {lineDetail.route}: {lineDetail.name}</h1>
        <Button onClick={backToDetails}>Choose different direction</Button> 
        <ul>
         {
           stops && stops.stops?.map((stop)=>{
            return <Stop key={stop.stpid} stop={stop} lineDetail={lineDetail} changeMapCenter={changeMapCenter}/>
        })
        }
        </ul>
        </>
    )
}

export default Stops