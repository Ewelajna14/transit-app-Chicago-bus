import {Grid, Box, Card, CardContent, CardMedia, Typography} from "@mui/material"
import {useNavigate} from "react-router-dom";
import "../App.css"

function Home(){

const navigate = useNavigate()

function navigateToSchedule(){
    navigate("/schedule")
}

function navigateToLogin(){
    navigate("/login")
}

function navigateToBicycles(){
    navigate("/bicycles")
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const current =new Date()

const date = `${months[current.getMonth()]} ${current.getDate()}, ${current.getFullYear()}`


    return(
        <Box
        sx={{
            display: "flex", 
            alignItems:"center",
            justifyContent:"center",
            width: '70%',
            height: "100vh",
            margin: 'auto',
        }}
        >
            <Grid sx={{ flexGrow: 1, alignItems:"center", width:'100%', height: '60%' }} container spacing={3}>
            <Grid item xs={4}>
                <Card elevation={15} onClick={navigateToSchedule} sx={{width:'100%', height: '100%'}}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                              Bus Schedule
                        </Typography>
                        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                         {date}
                        </Typography>
                        <CardMedia
                        component="img"
                        image = "/bus_schedule.svg"
                        sx={{width: '80%', height: '60%'}}
                        />
                        <Typography variant="h7" component="div" sx={{height:'20%'}}>
                          A List of bus lines, for which you can check the timetable
                          for today.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={4} sx={{padding: 'none'}}>
                <Card elevation={15} onClick={navigateToBicycles} sx={{width:'100%', height: '100%', paddingTop: 2, paddingBottom: 2.5 }}>
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{height:'20%'}}>
                              Bicycles
                        </Typography>
                        <CardMedia
                        component="img"
                        image = "/bike.svg"
                        sx={{ width: '80%', height: '60%'}}
                        />
                        <Typography variant="h7" component="div" sx={{height:'20%'}}>
                        A list of the stations where one can pick up
                        and return bicycles from the Divvy bicycle
                        sharing system.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={4} sx={{padding: 'none'}}>
                <Card elevation={15} onClick={navigateToLogin} sx={{width:'100%', height: '100%', paddingTop: 1, paddingBottom: 2.5}}>
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{height:'20%'}}>
                              Log In 
                        </Typography>
                        <CardMedia
                        component="img"
                        image = "/user.svg"
                        sx={{width: '80%', height: '50%', marginBottom: 1.5}}
                        />
                        <Typography variant="h7" component="div" sx={{height:'30%'}}>
                         Log in or sign in to access your account
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>    

            </Grid>
        </Box>    
    )
}

export default Home