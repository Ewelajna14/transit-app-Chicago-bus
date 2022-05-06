import { useSelector, useDispatch} from "react-redux";
import {Button} from "@mui/material"
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import {useNavigate} from 'react-router-dom';
import Map from './Map'
import StopDetailCard from "./StopDetailCard";
import {fetchPredictions} from "../redux/predictionsSlice";

function StopDetail({location, zoomIn, setZoomIn}){

    const lineDetail = useSelector((state)=>state.persisted.line.entities)

    const stops = useSelector((state)=>state.persisted.stops.entities["bustime-response"].stops)

    const predictions = useSelector((state)=>state.predictions.entities["bustime-response"])

    const navigate = useNavigate()

    const dispatch = useDispatch()

    function backToStops(){
        navigate("/stops")
        setZoomIn(11)
    }

    function fetchData(){
        const stopId = predictions.prd[0].stpid
        dispatch(fetchPredictions({line: lineDetail.route, stop: stopId}))
    }

    
    return(
        <div>
            <Map class="leaflet-container" stops={stops} location={location} zoomIn={zoomIn}/>
            <h1>Schedule for bus {lineDetail.route}: {lineDetail.name}</h1>
            <h2></h2>
            <Button variant="outlined" sx ={{marginBottom: 5, marginLeft: 5}} onClick={backToStops}><KeyboardReturnIcon/> Back </Button> 
            <Button variant="outlined" sx ={{marginBottom: 5, marginLeft: 5}} onClick ={fetchData}>Refresh</Button>
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