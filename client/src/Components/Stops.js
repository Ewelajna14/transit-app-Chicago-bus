
import { useSelector} from "react-redux";
import Stop from "./Stop";
import {useNavigate} from 'react-router-dom';
import {Button, Table, TableContainer, TableRow, TableBody, Typography, Box} from "@mui/material"
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Map from './Map'
import '../App.css';

function Stops({changeMapCenter, location, zoomIn}){

    const navigate = useNavigate()

    const stops = useSelector((state)=>state.persisted.stops.entities["bustime-response"].stops)

    const lineDetail = useSelector((state)=>state.persisted.line.entities)

  

    function backToDetails(){
        navigate("/details")
        }


    return(
        <>
        <Map class="leaflet-container" stops={stops} location={location} zoomIn={zoomIn}/>
        <Box sx={{margin: 5}}>
        <Typography variant="h4" sx ={{marginTop: 5, marginBottom: 3}}>
         Schedule for bus {lineDetail.route}: {lineDetail.name}
         </Typography>
        <Button variant="outlined" sx ={{marginBottom: 5, marginLeft: 5}} onClick={backToDetails}><KeyboardReturnIcon/> Back </Button> 
        <TableContainer sx={{ maxHeight: 400, width: 350 }}>
        <Table sx={{ width: 300}} aria-label="simple table">
        <TableBody>
        <TableRow>
        <ul>
         {
           stops && stops?.map((stop)=>{
            return <Stop key={stop.stpid} stop={stop} lineDetail={lineDetail} changeMapCenter={changeMapCenter}/>
        })
        }
        </ul>
        </TableRow>
        </TableBody>
        </Table>
        </TableContainer>
        </Box>
        </>
    )
}

export default Stops