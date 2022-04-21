
import {Box, Grid, TextField, Button, ButtonGroup} from "@mui/material"
import {useNavigate} from 'react-router-dom';
import Stops from "./Stops"
import { useSelector} from "react-redux";

function LineDetails(){

    const lineDetail = useSelector((state)=>state.line.entities)

    console.log(lineDetail)
    
    const navigate = useNavigate()

    const showStops = lineDetail.directions.map((direction)=>{
        return(<Stops key={direction.id} direction={direction}/>)
    })

    function backToSchedule(){
    navigate("/schedule")
    }

    return(
    <div>
        <Box sx={{ width: 600, backgroundColor: 'primary.light'}}>
        <form>
        <Button onClick={backToSchedule}>Back</Button> 
        <h1>Schedule for {lineDetail.name} line </h1>
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