import {Box, Grid, TextField, Button, ButtonGroup} from "@mui/material"
import {useEffect} from "react"
import {useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {fetchBuses} from "../redux/busesSlice"
import {fetchLine} from "../redux/lineSlice"

function Schedule(){

const navigate = useNavigate();    

const routes = useSelector((state)=> state.persisted.buses.entities)

const dispatch = useDispatch();

   useEffect(()=>{
   dispatch(fetchBuses())
   }, [dispatch])

   function showLine(event){
   const line = event.target
   dispatch(fetchLine(line.id))
   navigate("/details")
   }

   const routes_array = routes.map((route)=>{
    return(<Button sx={{width:50}} key={route.id} id ={route.id} onClick={showLine}>{route.route}</Button>)
   })


    return(
        <>
        <Box sx={{ width: 600,}}>
        <form>  
        <h1>Schedule</h1>

        <Grid container spacing={2}>
            <Grid item xs={12}>
                 <TextField 
                    id="outlined-basic" 
                    label="Outlined" 
                    variant="outlined"
                    value="Look for the stop"/>  
            </Grid>
            <Grid item xs={12}>
            <Box sx={{
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'left',
                 '& > *': {
                 m: 1,
                 flexWrap: 'wrap',
                 justifyContent: 'flex-start',
                 },
                }}>
                     <ButtonGroup color="secondary" aria-label="medium secondary button group">
                     {routes_array}
                     </ButtonGroup>     
          </Box>
          </Grid>
        </Grid>
        </form>
        </Box> 
        </>
    )
}


export default Schedule