
import { useSelector} from "react-redux";
import Stop from "./Stop";
import {Table, TableContainer, TableRow, TableBody} from "@mui/material"
import '../App.css';

function Stops({changeMapCenter,stops}){

    const lineDetail = useSelector((state)=>state.persisted.line.entities)


    return(
        <>
        <TableContainer sx={{ maxHeight: 400, width: '80%',
        "&::-webkit-scrollbar": {
            width: 15
        },
        "&::-webkit-scrollbar-track": {
            backgroundColor: '#959BBF',
            borderRadius: 2
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: '#64748B',
            borderRadius: 2
        }
         }}>
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