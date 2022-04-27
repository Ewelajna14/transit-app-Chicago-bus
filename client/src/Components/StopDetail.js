import { useSelector, useDispatch} from "react-redux";
import {Button} from "@mui/material"
import {useNavigate} from 'react-router-dom';
import Map from './Map'
import StopDetailCard from "./StopDetailCard";
import {fetchPredictions} from "../redux/predictionsSlice";

function StopDetail({location, zoomIn}){

    const lineDetail = useSelector((state)=>state.persisted.line.entities)

    const stops = useSelector((state)=>state.persisted.stops.entities["bustime-response"])

    const predictions = useSelector((state)=>state.predictions.entities["bustime-response"])

    const navigate = useNavigate()

    const dispatch = useDispatch()

    function backToStops(){
        navigate("/stops")
    }

    function fetchData(){
        const stopId = predictions.prd[0].stpid
        dispatch(fetchPredictions({line: lineDetail.route, stop: stopId}))
    }

    
    return(
        <div>
            <Map class="leaflet-container" stops={stops} location={location} zoomIn={zoomIn}/>
            <h1>Schedule for bus {lineDetail.route}: {lineDetail.name}</h1>
            <Button onClick={backToStops}>Choose different stop</Button> 
            <Button onClick ={fetchData}>Refresh</Button>
            {
                predictions && predictions.prd?.map((prediction)=>{
                    return(
                        <StopDetailCard key={prediction.tatripid} prediction={prediction}/>
                    )
                })
            }
        </div>
    )
}

export default StopDetail