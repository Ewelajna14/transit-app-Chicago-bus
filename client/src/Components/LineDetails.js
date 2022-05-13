import {useState} from "react"
import {Box, Grid, Button, ButtonGroup, Typography} from "@mui/material"
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
                <Button variant="outlined"  onClick={backToSchedule}><KeyboardReturnIcon/> Back</Button> 
                        <Typography variant="h4" sx ={{marginTop: 5, marginBottom: 3}}>
                                 Schedule for bus {lineDetail.route}: {lineDetail.name} 
                        </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                            <ButtonGroup color="secondary" aria-label="medium secondary button group">
                                    {lineDetail.directions?.map((direction)=>{
                                        return( <Button key={direction.id} value={direction.direction} onClick={(event)=>showStops(event)}>{direction.direction}</Button>)
                                    })}
                            </ButtonGroup>
                    </Grid>
                </Grid>

                { stops != 0 && (
                  <Stops location={location} zoomIn={zoomIn} stops={stops} changeMapCenter={changeMapCenter}/>
                )}
        </Grid>

                <Grid item xs={7}>
                      <Map class="leaflet-container" stops={stops} location={location} zoomIn={zoomIn}/>
                </Grid>
        </Grid> 
    </div>)
}

export default LineDetails

