import {useDispatch} from "react-redux";
import {fetchPredictions} from "../redux/predictionsSlice";
import {useEffect} from "react"


function StopDetailCard({prediction}){


    console.log(prediction)
    //const dispatch = useDispatch()

    //useEffect(()=>{
    //dispatch(fetchPredictions({line: lineDetail.route, stop: prediction.stpid}))
   // }, [dispatch])
    
return(
    <div>
        <h3>time: {prediction.tmstmp}</h3>
        <h3>stop name: {prediction.stpnm} </h3>
        <h3>destionation: {prediction.des}</h3>
        <h3>time of arrival: {prediction.prdtm}</h3>
        <h3>time to arrive : {prediction.prdctdn}</h3>
    </div>
    
)
}

export default StopDetailCard


