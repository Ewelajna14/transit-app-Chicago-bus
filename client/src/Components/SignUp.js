import {Grid, Paper, Avatar, TextField,  Button, Typography, Link} from "@mui/material"
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {useState} from "react"
import Error from "./Error";


function SignUp({onLogin}){

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")
    const [confPass, setConffPass ] = useState("")
    const [errors, setErrors] = useState([])
    


    function handleSignUp(e){
     e.preventDefault()
     const newUser ={
         first_name: fname,
         last_name: lname,
         username: username,
         email: email,
         password: pass,
         password_confirmation: confPass
     }

     fetch("/users",{
         method: "POST",
         headers:{
             "Content-Type": "application/json",
         },
         body: JSON.stringify(newUser), 
    })
    .then((r)=>{
        if(r.ok){
            r.json().then((newUser)=>onLogin(newUser))
        }
        else {
            r.json().then((error)=>setErrors(error.errors))
        }
    })

    setFname("")
    setLname("")
    setEmail("")
    setUsername("")
    setPass("")
    setConffPass("")

    }

    return(
        <Grid>
            <Paper elevation={10} sx={{
                padding: 3,
                height: '87vh',
                minWidth: 350,
                minHeight: 600,
                width: '20%',
                margin: "auto",
                marginTop: 10
            }}>
                <form onSubmit={handleSignUp}>
                <Grid align="center">
                   <Avatar><LockOpenIcon/></Avatar>
                   <h3>Sign Up</h3>
                </Grid>
                <Grid sx={{width:'90%', height: '80%'}}>
                <TextField value ={fname} onChange={(e)=>setFname(e.target.value)} variant="standard" label="First Name" placeholder="Enter first name" fullWidth required/>
                <TextField value ={lname} onChange={(e)=>setLname(e.target.value)}variant="standard"  label="Last Name" placeholder="Enter last name" fullWidth required/>
                <TextField value ={email} onChange={(e)=>setEmail(e.target.value)}variant="standard" label="Email" placeholder="Enter email" fullWidth required/>
                <TextField value ={username} onChange={(e)=>setUsername(e.target.value)}variant="standard" label="Username" placeholder="Enter username" fullWidth required/>
                <TextField value ={pass} onChange={(e)=>setPass(e.target.value)}variant="standard" type="password"  label="Password" placeholder="Enter password" fullWidth required/>
                <TextField value ={confPass} onChange={(e)=>setConffPass(e.target.value)}variant="standard" type="password"  label="Confirm Password" placeholder="Enter password" fullWidth required sx={{marginBottom: 3}}/>
                <Typography variant="h9" sx={{marginTop: 5}}>Already have an account?</Typography><Link href="/" sx={{margin: 2}}>Login</Link>
                {errors.map((err)=>(<Error key={err} err={err} />))}
                <Button type="submit" variant="contained" fullWidth required sx={{marginTop: 1}} >Sign Up</Button>
                </Grid>
                </form>  
            </Paper>
        </Grid>
    )
}

export default SignUp