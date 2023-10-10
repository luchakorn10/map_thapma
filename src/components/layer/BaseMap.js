//rafce
import React from 'react'
import { LayersControl, TileLayer } from 'react-leaflet'

const BaseMap = () => {
    //javascript
    return (
        <>
        <LayersControl.BaseLayer name='Esri.WorldImagery ' checked>
            <TileLayer url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}' />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Esri.WorldStreetMap">
                <TileLayer url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'/>
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Esri.WorldTopoMap">
                <TileLayer url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'/>
        </LayersControl.BaseLayer>

    </>

    )
}

export default BaseMap