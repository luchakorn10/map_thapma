import React from 'react'
import { GeoJSON } from 'react-leaflet'
import data from '../data/carbon.json'

const ABCDEF = () => {


  const geoStyle = (feature) => {

    const NAME = feature.properties.NAME
    console.log(NAME)
    if (NAME == 'เขาโบสถ์') {
      return {
        weight: 2,
          color: 'red',
            fillColor: 'green',
              fillOpacity: 0.4
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
  layer.bindTooltip(feature.properties.NAME,)
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

export default ABCDEF