import {Grid, Paper, Avatar, TextField, Checkbox, FormControlLabel, Button, Typography} from "@mui/material"
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from "react"

function Login({onLogin, user}){

    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")

    const navigate = useNavigate()

    function navigateToSignUp(){
        navigate("/signup")
    }

    function handleSubmit(e){
    e.preventDefault()
    const user = {
        username: username,
        password: pass
    }
   fetch("/login", {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
       },
       body: JSON.stringify(user),
   })
   .then((r)=>{
       if (r.ok){
           r.json().then((user)=> onLogin(user))
       }
       else {
           r.json().then((error)=>console.log(error))
       }
   })

    }

    return(
        <Grid>
            <Paper elevation={10} sx={{
                padding: 3,
                height: '70vh',
                width: '20%',
                minWidth: 300,
                margin: "auto",
                marginTop: 10
            }}>
                <form onSubmit={handleSubmit}>
                <Grid align="center">
                   <Avatar><LockOpenIcon/></Avatar>
                   <h3>Log In</h3>
                </Grid>
                <TextField value={username} onChange={(e)=>setUsername(e.target.value)} variant="standard" label="Username" placeholder="Enter username" fullWidth required/>
                <TextField value={pass} onChange={(e)=>setPass(e.target.value)} variant="standard" type="password" label="Password" placeholder="Enter password" fullWidth required/>
                <FormControlLabel 
                sx={{marginTop: 2, marginBottom: 2}}
                label="Remember me"
                control={
                    <Checkbox color="primary"/>
                }
                />
                <Button type="submit" variant="contained" fullWidth required sx={{marginBottom: 8}}>Log In</Button>
                <Typography variant="h7" component="div" align="center">
                    Don't have an account?
                    <Button type="submit" variant="contained" fullWidth required onClick={navigateToSignUp}>Sign Up</Button>
                </Typography>
                </form>
            </Paper>
        </Grid>
       
    )
}

export default Login