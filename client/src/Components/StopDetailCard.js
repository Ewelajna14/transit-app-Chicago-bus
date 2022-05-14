
import {Grid, Card, CardContent, Typography} from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function StopDetailCard({prediction}){
    
return(
    <Card elevation={10} sx={{ width: '90%', margin: 2}}>
        <CardContent>
        <Grid container spacing={2}>
        <Grid item xs={8}>   
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        time: {prediction.tmstmp}
        </Typography>
        <Typography variant="h5" component="div">
         {prediction.stpnm} 
        </Typography>
        <Typography variant="h5" component="div">
        destionation <ArrowForwardIcon fontSize="medium"/> {prediction.des}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         time of arrival: {prediction.prdtm}
        </Typography>
        </Grid>
        <Grid item xs={4}>
        <Typography variant="h5" component="div">
         time left  
        </Typography>
        <Typography variant="h4" component="div">
        {prediction.prdctdn} min
        </Typography>
        </Grid>
        </Grid>
        </CardContent>
    </Card>
    
)
}

export default StopDetailCard


