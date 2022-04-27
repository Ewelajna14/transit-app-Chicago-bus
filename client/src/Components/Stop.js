
import {Button} from "@mui/material"
import {useDispatch} from "react-redux";
import {fetchPredictions} from "../redux/predictionsSlice";
import {useNavigate} from 'react-router-dom';

function Stop({stop, lineDetail, changeMapCenter}){

    const dispatch = useDispatch()

    const navigate = useNavigate()

    

    function showStop(event){
     const stop = event.target
     const line = lineDetail.route
     changeMapCenter(stop.value)
     dispatch(fetchPredictions({line: line, stop: stop.id}))
     navigate("/stopDetail")
    }

    return (
    <li>
      <h3>{stop.stpnm}</h3>
      <Button id ={stop.stpid} value={[stop.lat, stop.lon]} onClick={showStop}>Show Stop</Button>
    </li>)

}

export default Stop