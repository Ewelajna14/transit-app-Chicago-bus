import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import {Icon} from "leaflet"
import ChangeView from './ChangeView'


function Map({stops}){

      const busIcon =new Icon({
        iconUrl: "/bus-pin.svg",
        iconSize: [35,35]})

    const location = [41.862, -87.628]

   
    return(
        <MapContainer center={location} zoom={12}>
        <ChangeView center={location} zoom={12} />     
         <TileLayer
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        { stops &&
         stops.stops?.map((stop)=>{
         return(
         <Marker position={[stop.lat, stop.lon]} icon={busIcon}>
         <Popup>
          <h4>{stop.stpnm}</h4>
        </Popup>
        </Marker>
         )
         })
         }
       </MapContainer>
    )

}

export default Map