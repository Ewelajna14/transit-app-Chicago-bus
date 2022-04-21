import {Box, Grid, TextField, Button, ButtonGroup} from "@mui/material"
import {useState, useEffect} from "react"

function Schedule(){

const [routes, setRoutes] = useState([])

   useEffect(()=>{
   fetch("/routes")
   .then((r)=>{
       if(r.ok){
           r.json().then((data) => setRoutes(data))
       }
       else {
           r.json().then((error)=>console.log(error))
       }
   })
   }, [])


  function showBusDetail(event){
  console.log(event.target)
  }

   const routes_array = routes.map((route)=>{
    return(<Button sx={{width:50}} key={route.id} id ={route.id} onClick={showBusDetail}>{route.route}</Button>)
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