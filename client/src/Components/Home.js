import {Grid, Box, Card, CardContent, CardMedia, Typography} from "@mui/material"
import {useNavigate} from "react-router-dom";

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
            width: 900,
            height: "100vh",
            //backgroundColor: '#64748B40',
            
            margin: 'auto',
        }}
        >
            <Grid sx={{ flexGrow: 1, alignItems:"center" }} container spacing={4}>
            <Grid item xs={4}>
                <Card elevation={15} onClick={navigateToSchedule}>
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
                        sx={{marginBottom: 1}}
                        />
                        <Typography variant="h7" component="div">
                          A List of bus lines, for which you can check the timetable
                          for today.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={4}>
                <Card elevation={15} onClick={navigateToBicycles}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                              Bicycles
                        </Typography>
                        <CardMedia
                        component="img"
                        image = "/bike.svg"
                        sx={{marginBottom: 1, marginTop: 1.5}}
                        />
                        <Typography variant="h7" component="div">
                        A list of the stations where one can pick up
                        and return bicycles from the Divvy bicycle
                        sharing system.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={4}>
                <Card elevation={15} onClick={navigateToLogin}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                              Log In 
                        </Typography>
                        <CardMedia
                        component="img"
                        image = "/user.svg"
                        sx={{marginBottom: 1.5, marginTop: 1.5}}
                        />
                        <Typography variant="h7" component="div">
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