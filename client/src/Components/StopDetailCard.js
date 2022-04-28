import {useDispatch} from "react-redux";
import {fetchPredictions} from "../redux/predictionsSlice";
import {useEffect} from "react"
import {Grid, Card, CardContent, Typography} from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function StopDetailCard({prediction}){


    
    //const dispatch = useDispatch()

    //useEffect(()=>{
    //dispatch(fetchPredictions({line: lineDetail.route, stop: prediction.stpid}))
   // }, [dispatch])
    
return(
    <Card  sx={{ width: 600, marginBottom: 5, marginLeft: 5}}>
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


