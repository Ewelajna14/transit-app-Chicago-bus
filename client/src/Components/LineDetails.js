
import {Box, Grid, TextField, Button, ButtonGroup} from "@mui/material"
import {useNavigate} from 'react-router-dom';
import Stops from "./Stops"

function LineDetails({details}){

    console.log(details.directions)

    const navigate = useNavigate()

    const showStops = details.stops.map((stop)=>{
        return(<Stops key={stop.id} stop={stop}/>)
    })

    function backToSchedule(){
    navigate("/schedule")
    }

    return(
    <div>
        <Box sx={{ width: 600, backgroundColor: 'primary.light'}}>
        <form>
        <Button onClick={backToSchedule}>Back</Button> 
        <h1>Schedule for {details.name} line </h1>
        <Grid container spacing={2}>
            <Grid item xs={12}>
               {showStops} 
            </Grid>
        </Grid>
        </form>
        </Box> 

    </div>)
}

export default LineDetails