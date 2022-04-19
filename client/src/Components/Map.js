import { MapContainer, TileLayer} from 'react-leaflet'
import ChangeView from './ChangeView'

function Map(){

    const location = [41.862, -87.628]

    return(
        <MapContainer center={location} zoom={12}>
        <ChangeView center={location} zoom={12} />     
         <TileLayer
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       </MapContainer>
    )
}

export default Map