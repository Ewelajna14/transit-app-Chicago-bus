import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import {Icon} from "leaflet"
import ChangeView from './ChangeView'


function Map({stops, location, zoomIn}){

      const busIcon =new Icon({
        iconUrl: "/bus-pin.svg",
        iconSize: [25,25]})
   
    return(
        <MapContainer center={location} zoom={zoomIn}>
        <ChangeView center={location} zoom={zoomIn} />     
         <TileLayer
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        { stops != 0 && (
         <div>
         {stops?.map((stop)=>{
         return(
         <Marker position={[stop.lat, stop.lon]} icon={busIcon}>
         <Popup>
          <h4>{stop.stpnm? stop.stpnm : stop.des}</h4>        
        </Popup>
        </Marker>
         )
         })}
         </div>
         )
         }
       </MapContainer>
    )

}

export default Map