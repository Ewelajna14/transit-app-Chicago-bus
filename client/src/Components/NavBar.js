
import {AppBar, Toolbar, IconButton, Typography, Box} from "@mui/material"
import Menu from '@mui/icons-material/MenuOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink} from "react-router-dom";

function NavBar(){

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
<AppBar color="neutral">
   <Toolbar>
       <IconButton>
             <Menu sx={{ color: "white"}}/>
       </IconButton>
       <Typography variant="h6" sx={{ mr: 2}}>
       <NavLink to="/" style={{"text-decoration": "none", color: "white"}}>  
       Home
       </NavLink>  
       </Typography>
       <Typography variant="h6" sx={{ mr: 2 }}>
         <NavLink to="/schedule" style={{"text-decoration": "none", color: "white"}}>
          Schedule
        </NavLink>  
        </Typography>
       <Typography variant="h6" sx={{ mr: 2 }}>Bicycles</Typography>
   </Toolbar>
</AppBar>
</ThemeProvider> 
)
}

export default NavBar