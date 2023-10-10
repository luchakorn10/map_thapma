import React from 'react'
import { GeoJSON, Marker} from 'react-leaflet'
import L, { geoJSON, icon, map,extend} from 'leaflet'
import data from '../data/STRAY.json'


let poi = L.icon({
  iconUrl: process.env.PUBLIC_URL+'/images/dog.png',
  iconAnchor: [1, 1],
  popupAnchor: [1, -38],
  iconSize: [25, 25]
});

const STRAY = () => {
  L.layerGroup(L.Marker.prototype.options.icon = poi);
    return data && <GeoJSON 
    data={data}
    onEachFeature={handleEachFeature}
  
  />


}

    const handleClickFeature = (event) => {
        const layer = event.target
        const prop =event.target.feature.properties
    
        let popupContent = ''
        for ( const [key, val] of Object.entries(prop)){
            popupContent += key + ': ' + val + '<br />'
        }
        console.log(prop)
    
    
    
        layer.bindPopup(popupContent)
    }
    
    const handleEachFeature = (feature, layer)=>{
      layer.bindTooltip(feature.properties.PET,)
      layer.on({
        'click': handleClickFeature
      })
    }


export default STRAY