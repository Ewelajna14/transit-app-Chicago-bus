
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
      <Button variant="text" sx={{textAlign: "left", color: '#64748B', '&:hover': {backgroundColor: '#959BBF', transition: '0.7s', color: 'white'} }}id ={stop.stpid} value={[stop.lat, stop.lon]} onClick={showStop}>{stop.stpnm}</Button>
    </li>)

}

export default Stop