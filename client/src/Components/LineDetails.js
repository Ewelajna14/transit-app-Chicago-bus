
import {Box, Grid, Button, ButtonGroup} from "@mui/material"
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch} from "react-redux";
import {fetchStops} from "../redux/stopsSlice";


function LineDetails(){

    const lineDetail = useSelector((state)=>state.line.entities)
    
    console.log(lineDetail.directions)
  
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

    console.log(showDirections)

    

    function backToSchedule(){
    navigate("/schedule")
    }

    return(
    <div>
        <Box sx={{ width: 600}}>
        <form>
        <Button onClick={backToSchedule}>Back</Button> 
        <h1>Schedule for bus {lineDetail.route}: {lineDetail.name}</h1>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <ButtonGroup color="secondary" aria-label="medium secondary button group">
                    {showDirections}
            </ButtonGroup>
            </Grid>
        </Grid>
        
        </form>
        </Box> 
       
    </div>)
}

export default LineDetails