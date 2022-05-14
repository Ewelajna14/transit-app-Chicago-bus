import { MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet'
import {useEffect, useState} from "react"
import { Button } from '@mui/material'
import {Icon} from "leaflet"
import ChangeView from './ChangeView'
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import "./bicycle.css"

function Map({bstations}){

      const bicycleIcon =new Icon({
        iconUrl: "/bic_station.svg",
        iconSize: [25,25]})

        const location=[41.868587, -87.634030]

        const [zoomIn, setZoomIn] = useState(12)

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

        function handleZoom(){
          setZoomIn(18)
        }

        function handleZoomOut(){
         setZoomIn(12)
        }
   
   
    return(
        <MapContainer  center={location} zoom={zoomIn}>
        <ChangeView center={location} zoom={zoomIn} />   
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
             <h3>{station.name}</h3>
             <h4>Total Docks {station.capacity}</h4>
             <Button sx={{fontSize: 12, color: '#64748B', marginRight: 1, '&:hover': { backgroundColor: '#959BBF',
              transition: '0.7s',color: 'white'}}} onClick={handleZoom}>Zoom In</Button>
             <Button sx={{fontSize: 12, color: '#64748B', marginRight: 1, '&:hover': { backgroundColor: '#959BBF',
              transition: '0.7s',color: 'white'}}} onClick={handleZoomOut}>Zoom Out</Button>
           </Popup>
           </Marker>
            )
            })
            }
       </MapContainer>
    )

}

export default Map