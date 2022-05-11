 import Map from "./Map"
 import { useSelector, useDispatch} from "react-redux";
 import { fetchBicyclesStations } from "../../redux/bicyclesStationsSlice";
 import {useEffect, useState} from "react"

 function BicyclesMain(){

    const [bstations, setBstations] = useState([])

    //const dispatch=useDispatch()

    //const bstations = useSelector((state)=> state.bstations.entities.data.stations)

   

    //useEffect(()=>{
   // dispatch(fetchBicyclesStations())
    //}, [dispatch])

    useEffect(()=>{
        fetch("/bicycles_stations")
        .then((response) => response.json())
        .then((data) => setBstations(data.data.stations))

    }, [])

    



     return(
         <div>
             <Map bstations={bstations}/>
         </div>
     )

}

export default BicyclesMain