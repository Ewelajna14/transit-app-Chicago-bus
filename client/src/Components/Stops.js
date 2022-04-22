
import { useSelector} from "react-redux";

function Stops(){

    
    

    const stops = useSelector((state)=>state.stops.entities)

    console.log(stops)


    return(
        <div>

        </div>
    )
}

export default Stops