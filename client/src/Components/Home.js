import {Grid, Card, CardContent, CardMedia, Typography} from "@mui/material"
import {useNavigate} from "react-router-dom";
import "../App.css"

function Home(){

const navigate = useNavigate()

function navigateToSchedule(){
    navigate("/schedule")
}

function navigateToBicycles(){
    navigate("/bicycles")
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const current =new Date()

const date = `${months[current.getMonth()]} ${current.getDate()}, ${current.getFullYear()}`

    return(
        <div className="bg-photo">
        <div className="bg-photo-text">
         <Grid sx={{ 
                alignItems:"center", 
                justifyContent:"center",
               // margin: 'auto'
                }} 
                container spacing={1}>
            <Grid item xs={12} align="center">
                        <Typography variant ="h2" sx={{marginTop: 4, color: 'white', textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black', fontFamily: 'Varela Round, sans-serif' }}>
                          Chicago
                        </Typography>
 
            </Grid>
            <Grid item xs={12} align="center">
                        <Typography sx={{ fontSize: 28, color: 'white', textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black', fontFamily: 'Varela Round, sans-serif'  }} >
                         {date}
                        </Typography>

            </Grid>
            <Grid item xs={6} align="center">
                <Card elevation={15} onClick={navigateToSchedule} sx={{width:'50%', height: '50%', opacity: "80%"}}>
                    <CardContent>
                        <Typography variant="h5" sx={{marginBottom: 2, fontFamily: 'Varela Round, sans-serif'}}>
                              Bus Schedule
                        </Typography>
                        <Typography variant="h7" component="div" sx={{marginBottom: 2}}>
                          Check today's timetable for CTA Bus.
                        </Typography>
                        <CardMedia
                        component="img"
                        image = "/bus2.svg"
                        sx={{width:'70%', height: '70%'}}
                        />
                     
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={6} align="center">
                <Card elevation={15} onClick={navigateToBicycles} sx={{width:'50%', height: '50%',  opacity: "80%"}}>
                    <CardContent>
                        <Typography variant="h5" sx={{marginBottom: 2, fontFamily: 'Varela Round, sans-serif'}}>
                              Bicycles
                        </Typography>
                        <Typography variant="h7" component="div" sx={{marginBottom: 2}}>
                        Check stations for the Divvy bicycle
                        sharing system.
                        </Typography>
                        <CardMedia
                        component="img"
                        image = "/bike3.svg"
                        sx={{width:'70%', height: '70%'}}
                        />  
                    </CardContent>
                </Card>
            </Grid>

            </Grid>
            </div>
            </div>
     
    )
}

export default Home