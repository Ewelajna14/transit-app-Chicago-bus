 import Map from "./Map"
 import { useSelector, useDispatch} from "react-redux";
 import { fetchBicyclesStations } from "../../redux/bicyclesStationsSlice";
 import {useEffect} from "react"

 function BicyclesMain(){

    const dispatch=useDispatch()

    const bstations = useSelector((state)=> state.persisted.bstations.entities.data.stations)

   

    useEffect(()=>{
    dispatch(fetchBicyclesStations())
    }, [dispatch])



     return(
         <div>
             <Map bstations={bstations}/>

         </div>
     )

}

export default BicyclesMain