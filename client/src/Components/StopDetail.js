import { useSelector, useDispatch} from "react-redux";
import {Button, Typography, Grid} from "@mui/material"
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
        navigate("/details")
        setZoomIn(11)
    }

    function fetchData(){
        const stopId = predictions.prd[0].stpid
        dispatch(fetchPredictions({line: lineDetail.route, stop: stopId}))
    }

    
    return(
        <div>
            <Grid container spacing={2} sx={{margin: "auto"}}>

            <Grid item xs={5}>
                <Typography variant="h4" sx ={{marginTop: 5, marginBottom: 3}}>
                Schedule for bus {lineDetail.route}: {lineDetail.name}
                </Typography>
                <h2></h2>
                <Button variant="outlined" sx={{color: '#64748B', margin: 1, border: '1px solid #959BBF', '&:hover': { backgroundColor: '#959BBF',transition: '0.7s',color: 'white'} }} onClick={backToStops}><KeyboardReturnIcon/> Back </Button> 
                <Button variant="outlined" sx={{color: '#64748B', margin: 1, border: '1px solid #959BBF', '&:hover': { backgroundColor: '#959BBF',transition: '0.7s',color: 'white'} }} onClick ={fetchData}>Refresh</Button>
                {
                    predictions && predictions.prd?.map((prediction)=>{
                        return(
                            <StopDetailCard key={prediction.tatripid} prediction={prediction}/>
                        )
                    })
                }
            </Grid>
            <Grid item xs={7}>
            <Map class="leaflet-container" stops={stops} location={location} zoomIn={zoomIn}/>
            </Grid>

             </Grid>
        
        </div>
    )
}

export default StopDetail