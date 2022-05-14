 import Map from "./Map"
 import {useEffect, useState} from "react"
 import "./bicycle.css"

 function BicyclesMain(){

    const [bstations, setBstations] = useState([])


    useEffect(()=>{
        fetch("/bicycles_stations")
        .then((response) => response.json())
        .then((data) => setBstations(data.data.stations))

    }, [])


     return(
         <div className="leaf-map">
             <Map bstations={bstations}/>
         </div>
     )

}

export default BicyclesMain