import {Box, Grid, TextField, InputAdornment} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom";
import {  useDispatch } from "react-redux";
import {fetchLine} from "../redux/lineSlice"
import Map from "./Map";
import "../App.css"

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
   navigate("/details")
   }

   function searchRoute(event){
       setSearch(event.target.value)
   }

   function handleClearSearch(){
    setRoutes(routes)
    setSearch("")
}


   const searchRoutes = routes.filter((route) => route.name.toLowerCase().includes(search.toLowerCase()))
   

   const routes_array = searchRoutes.map((route)=>{
    return(<button  title = {route.name} key={route.id} id ={route.id} 
    onClick={showLine} value={route.route}>{route.route}</button>)
   })
   

    return(
        <div>
        <Grid container spacing={2} sx={{margin: "auto"}}>

              <Grid item xs={5}>
                     <TextField 
                            sx={{
                                width: '80%',
                                mb: 3
                            }}
                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="end">
                                   {search != 0? <CloseIcon  onClick={handleClearSearch}/>: <SearchIcon/> }
                                </InputAdornment>
                                )
                                }}
                            id="outlined-basic" 
                            variant="outlined"
                            placeholder="Look for the route name"
                            value={search}
                            onChange={searchRoute}/> 

                            <Box sx={{
                            display: 'flex',                              
                            flexDirection: 'row',
                            alignItems: 'left',
                            flexWrap: 'wrap',
                            }}>
                                {routes_array} 
                            </Box> 
                </Grid >

                     <Grid item xs={7}>
                     <Map location={location} zoomIn={zoomIn}/>
                     </Grid>
        </Grid>
        
        </div>
    )
}


export default Schedule

