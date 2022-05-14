import {useState} from "react"
import { Grid, Button, Typography} from "@mui/material"
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch} from "react-redux";
import {fetchStops} from "../redux/stopsSlice";
import Stops from "./Stops";
import Map from "./Map"


function LineDetails({location, zoomIn, changeMapCenter}){

    const lineDetail = useSelector((state)=>state.persisted.line.entities)
    const [stops, setStops] = useState([])

    const navigate = useNavigate()
    const dispatch = useDispatch();

    
    function showStops(event){
    dispatch(fetchStops({line: lineDetail.route, direction: event.target.value} ))
    const line = lineDetail.route
    const direction = event.target.value
    fetch(`routes/${line}/directions/${direction}/stops`)
    .then((r)=>r.json())
    .then((r) => setStops(r["bustime-response"].stops))
    }

    function backToSchedule(){
    navigate("/schedule")
    }


    return(
    <div>
        <Grid container spacing={2} sx={{margin: "auto"}}>
                <Grid item xs={5}>
                        <Typography variant="h4" sx ={{marginTop: 5, marginBottom: 3, fontFamily: 'Varela Round, sans-serif'}}>
                                 Schedule for bus {lineDetail.route}: {lineDetail.name} 
                        </Typography>

                        <Grid container spacing={2}>
                                <Grid item xs={3}>

                                <Button variant="outlined" sx={{color: '#64748B', border: '1px solid #959BBF', '&:hover': { backgroundColor: '#959BBF',
                                        transition: '0.7s',color: 'white'} }}  onClick={backToSchedule}><KeyboardReturnIcon/> Back</Button> 
                                        
                                </Grid>    
                                <Grid item xs={9}>
                                        {lineDetail.directions?.map((direction)=>{
                                        return( <Button variant="outlined" sx={{color: '#64748B', marginRight: 1, border: '1px solid #959BBF', '&:hover': { backgroundColor: '#959BBF',
                                        transition: '0.7s',color: 'white'} }} key={direction.id} value={direction.direction} onClick={(event)=>showStops(event)}>{direction.direction}</Button>)
                                        })}
                                </Grid>
                        </Grid >
                        <div style={{marginTop: '5px'}}>

                        { stops != 0 && (
                        <Stops location={location} zoomIn={zoomIn} stops={stops} changeMapCenter={changeMapCenter}/>
                        )}

                        </div>


                </Grid>

                        <Grid item xs={7}>
                        <Map class="leaflet-container" stops={stops} location={location} zoomIn={zoomIn}/>
                        </Grid>
        </Grid> 
    </div>)
}

export default LineDetails

