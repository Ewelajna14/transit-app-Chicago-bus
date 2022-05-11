import { MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet'
import {useEffect} from "react"
import {Icon} from "leaflet"
import ChangeView from './ChangeView'
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";


function Map({bstations}){

      const bicycleIcon =new Icon({
        iconUrl: "/bic_station.svg",
        iconSize: [35,35]})

        const location=[41.868587, -87.634030]

        function LeafletgeoSearch() {
          const map = useMap();
          useEffect(() => {
            const provider = new OpenStreetMapProvider();
        
            const searchControl = new GeoSearchControl({
              provider,
              
            });
        
            map.addControl(searchControl);
        
            return () => map.removeControl(searchControl);
          }, []);
        
          return null;
        }

        function showDetails(e){
          const markerId = e.target.options.data
          console.log(e.target.options.data)
        }
   
   
    return(
        <MapContainer center={location} zoom={11}>
        <ChangeView center={location} zoom={11} />   
         <TileLayer
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
         <LeafletgeoSearch />
         
         {  bstations &&
            bstations?.map((station)=>{
            return(
            <Marker position={[station.lat, station.lon]} icon={bicycleIcon} data={station.legacy_id} eventHandlers={{
              click: (e) => {
                showDetails(e)
              },
            }}>
            <Popup>
             <h4>{station.name}</h4>
             <h5>Total Docks {station.capacity}</h5>
           </Popup>
           </Marker>
            )
            })
            }
       </MapContainer>
    )

}

export default Map