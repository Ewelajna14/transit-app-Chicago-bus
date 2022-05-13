
import { useSelector} from "react-redux";
import Stop from "./Stop";
import {useNavigate} from 'react-router-dom';
import {Button, Table, TableContainer, TableRow, TableBody, Typography, Box} from "@mui/material"
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Map from './Map'
import '../App.css';

function Stops({changeMapCenter, location, zoomIn, stops}){

    const lineDetail = useSelector((state)=>state.persisted.line.entities)


    return(
        <>
       
        
        <TableContainer sx={{ maxHeight: 400, width: 350 }}>
        <Table sx={{ width: 300}} aria-label="simple table">
        <TableBody>
        <TableRow>
        <ul>
         { stops != 0 && (
          <div>
        {
            stops?.map((stop)=>{
            return <Stop key={stop.stpid} stop={stop} lineDetail={lineDetail} changeMapCenter={changeMapCenter}/>
        })
        }
         </div>
        )}

        </ul>
        </TableRow>
        </TableBody>
        </Table>
        </TableContainer>
        
        </>
    )
}

export default Stops

//