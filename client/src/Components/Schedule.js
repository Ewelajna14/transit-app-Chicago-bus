import {Box, Grid, TextField, Button, ButtonGroup} from "@mui/material"
import {useState} from 'react'

function Schedule(){

    const[lineDetail, setLineDetail] = useState([])
 
    function showLineDetails(event){
        const line = event.target
        fetch(`/lines/${line.id}`)
        .then(r=>r.json())
        .then(data => setLineDetail(data))   
    }

    console.log(lineDetail)

    const buttons1 = [
        <Button id="1" value="Red" onClick={(showLineDetails)}>Red</Button>,
        <Button id="2" value="Blue"onClick={(showLineDetails)}>Blue</Button>,
        <Button id="3" value="Brown"onClick={(showLineDetails)}>Brown</Button>,
        <Button id="4"  value="Green"onClick={(showLineDetails)}>Green</Button>
    ]

    const buttons2 = [
        <Button id="5" value="Orange" onClick={(showLineDetails)}>Orange</Button>,
        <Button id="6" value="Purple"onClick={(showLineDetails)}>Purple</Button>,
        <Button id="7" value="Pink"onClick={(showLineDetails)}>Pink</Button>,
        <Button id="8" value="Yellow" onClick={(showLineDetails)}>Yellow</Button>
    ]




    return(
        <>
        <Box sx={{ width: 600, backgroundColor: 'primary.light'}}>
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
                 },
                }}>
                     <ButtonGroup color="secondary" aria-label="medium secondary button group">
                     {buttons1}
                     </ButtonGroup>  
                     <ButtonGroup color="secondary" aria-label="medium secondary button group">
                     {buttons2}
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