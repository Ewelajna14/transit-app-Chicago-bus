import {Box, Grid, TextField, Button,  Typography} from "@mui/material"
import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom";
import {  useDispatch } from "react-redux";
import {fetchLine} from "../redux/lineSlice"
import { fetchVehicles } from "../redux/vehiclesSlice";
import Map from "./Map";

function Schedule({location, zoomIn}){

    const[routes, setRoutes] = useState([])
    const [search, setSearch] = useState("")

const navigate = useNavigate();    


const dispatch = useDispatch();

   useEffect(()=>{
    fetch("/routes")
    .then((response) => response.json())
    .then((data) =>setRoutes(data))
   }, [])

   function showLine(event){
   const line = event.target
   dispatch(fetchLine(line.id))
   //dispatch(fetchVehicles(line.value))
   navigate("/details")
   }

   function searchRoute(event){
       setSearch(event.target.value)
   }


   const searchRoutes = routes.filter((route) => route.name.toLowerCase().includes(search.toLowerCase()))
   

   const routes_array = searchRoutes.map((route)=>{
    return(<Button variant="outlined" sx={{ margin: 0.5}} title = {route.name} key={route.id} id ={route.id} 
    onClick={showLine} value={route.route}>{route.route}</Button>)
   })
   

    return(
        <>
        <Grid container spacing={2} sx={{margin: "auto"}}>

              <Grid item xs={12}>
                     <TextField 
                        sx={{
                            //width: 300,
                            marginTop: 5
                        }}
                            id="outlined-basic" 
                            variant="outlined"
                            placeholder="Look for the route name"
                            value={search}
                            onChange={searchRoute}/> 
                </Grid>

                  <Grid item xs={5}>
                        <Box sx={{
                            //width: 600,
                            display: 'flex',                              
                            flexDirection: 'row',
                            alignItems: 'left',
                            flexWrap: 'wrap',
                            //m: 1,
                            }}>
                                {routes_array} 
                        </Box> 
                    </Grid>

                     <Grid item xs={7}>
                     <Map class="leaflet-container" location={location} zoomIn={zoomIn}/>
                     </Grid>
        </Grid>
        
        </>
    )
}


export default Schedule

