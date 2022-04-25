
import { useSelector} from "react-redux";
import Stop from "./Stop"

function Stops(){

    const stops = useSelector((state)=>state.stops.entities["bustime-response"].stops)

    const stopArray = stops.map((stop)=>{
    return(<Stop key={stop.stpid} stop={stop}/>)
    })


    return(
        <ul>
         {stopArray}
        </ul>
    )
}

export default Stops