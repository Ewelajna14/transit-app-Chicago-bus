import {useState} from "react"
import {Box, Grid, Button, ButtonGroup} from "@mui/material"
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch} from "react-redux";
import {fetchStops} from "../redux/stopsSlice";
import Map from './Map'


function LineDetails({location, zoomIn}){

    const lineDetail = useSelector((state)=>state.persisted.line.entities)

    const vehicles = useSelector((state)=>state.persisted.vehicles.entities["bustime-response"].vehicle)

    const navigate = useNavigate()
    const dispatch = useDispatch();

    
    function showStops(event){
    const choosenDirection = event.target
    dispatch(fetchStops({line: lineDetail.route, direction: choosenDirection.value} ))
    navigate("/stops")
    }

    
    let showDirections = lineDetail.directions?.map((direction)=>{
        return( <Button key={direction.id} value={direction.direction} onClick={(event)=>showStops(event)}>{direction.direction}</Button>)
    })


    function backToSchedule(){
    navigate("/schedule")
    }

    return(
    <div>
        <Box sx={{ width: 600}}>
        <form>
        <Button onClick={backToSchedule}>Back</Button> 
        <h1>Schedule for bus {lineDetail.route}: {lineDetail.name} 
        </h1>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <ButtonGroup color="secondary" aria-label="medium secondary button group">
                    {showDirections}
            </ButtonGroup>
            </Grid>
        </Grid>
        <Map class="leaflet-container"  location={location} zoomIn={zoomIn} stops={vehicles}/>
        </form>
        </Box> 
       
    </div>)
}

export default LineDetails