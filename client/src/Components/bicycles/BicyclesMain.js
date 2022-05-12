 import Map from "./Map"
 import {useEffect, useState} from "react"

 function BicyclesMain(){

    const [bstations, setBstations] = useState([])


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