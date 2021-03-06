
import {AppBar, Toolbar, IconButton, Typography, Button} from "@mui/material"
import Menu from '@mui/icons-material/MenuOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useNavigate} from "react-router-dom";


function NavBar({user, setUser}){

  const navigate = useNavigate()

  function handleLogOut(){
    fetch("/logout", {
      method: "DELETE"
    })
    .then(r=>{
      if (r.ok){
       setUser(null)
      }
    } 
    )
    navigate("/")
  }

    const theme = createTheme({
        palette: {
          primary: {
            main: '#0971f1',
            darker: '#053e85',
          },
          neutral: {
            main: '#64748B',
            contrastText: '#fff',
          },
        },
      });   

return(
<ThemeProvider theme={theme}>   
<AppBar color="neutral"  position="static">
   <Toolbar>
       <IconButton>
             <Menu sx={{ color: "white"}}/>
       </IconButton>
       <Typography variant="h6" sx={{ mr: 2, fontFamily: 'Varela Round, sans-serif'}}>
       <NavLink to="/home" style={{"text-decoration": "none", color: "white"}}>  
       Home
       </NavLink>  
       </Typography>
       <Typography variant="h6" sx={{ mr: 2, fontFamily: 'Varela Round, sans-serif'}}>
         <NavLink to="/schedule" style={{"text-decoration": "none", color: "white"}}>
          Schedule
        </NavLink>  
        </Typography>
       <Typography variant="h6" sx={{ mr: 2, fontFamily: 'Varela Round, sans-serif'}}>
       <NavLink to="/bicycles" style={{"text-decoration": "none", color: "white"}}>
         Bicycles
         </NavLink>  
         </Typography>
       <Typography variant="h6" sx={{ mr: 2, flexGrow: 1, fontFamily: 'Varela Round, sans-serif' }}>
       <NavLink to="/myAccount" style={{"text-decoration": "none", color: "white"}}>
         MyAccount
         </NavLink>  
       </Typography>
       {
         user? <Typography variant="h6" sx={{ mr: 2, fontFamily: 'Varela Round, sans-serif'}}>Hello {user.first_name} <Button variant="text" sx={{color:"white"}} onClick={handleLogOut}> Log out</Button></Typography> : null
       }
       
   </Toolbar>
</AppBar>
</ThemeProvider> 
)
}

export default NavBar