import React from 'react'
import { GeoJSON } from 'react-leaflet'
import data from '../data/Moo.json'

const Moo = () => {


  const geoStyle = (feature) => {

    const PV_TN = feature.properties.PV_TN
    console.log(PV_TN)
    if (PV_TN == 'ระยอง') {
      return {
        weight: 4,
          color: 'red',
            fillColor: 'green',
              fillOpacity: 0
      }
    }

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
  layer.bindTooltip(feature.properties.MOO_NAME,)
  layer.on({
    'click': handleClickFeature
  })
}

  return data && <GeoJSON
    data={data}
    style={geoStyle}
    onEachFeature={handleEachFeature}
  />
}

export default Moo