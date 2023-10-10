//rafce
import React, { useState } from 'react'
import { LayerGroup, LayersControl, MapContainer, Marker, TileLayer, useMap, GeoJSON } from 'react-leaflet'
import L from 'leaflet'
import LeafletDrawControl from './widgets/LeafletDrawColtrol'

import BaseMap from './layer/BaseMap'
import Moo from './layer/Moo'
import Hazardous from './layer/99-Hazous'
import Bin from './layer/Bin'
import Recycling from './layer/Recycling'
import Learning from './layer/Learning'
import HEALTH_HAZARD from './layer/HEALTH_HAZARD'
import Food from './layer/Food'
import Market from './layer/Market'
import Fuel from './layer/Fuel'
import Park from './layer/Park'
import Bedriden_Patients from './layer/Bedridne'
import Elderly from './layer/Elderly'
import DIABETS from './layer/DIABETES'
import DENGUE from './layer/DENGUE'
import HYPERLIPIDEMIA from './layer/HYPERLIPIDEMIA'
import STROKE from './layer/STROKE'
import BLOOD_PRESSURE from './layer/BLOOD_PRESSURE'
import REFUGEE from './layer/REFUGEE'
import PET from './layer/PET'
import STRAY from './layer/STRAY'
import ABCBIN from './data/binn'
import ABCDEF from './layer/carbonstorage'




function getQueryVariable(variable) {
var query = window.location.search.substring(1);
var vars = query.split("&");
for (var i=0;i<vars.length;i++) {
var pair = vars[i].split("=");
if (pair[0] == variable) {

return pair[1];
}
}
//alert('Query Variable ' + variable + ' not found');
}

var layer1s = "";
var layer2s = "";
if(getQueryVariable("layer1") =='true'){
    layer1s = "true";
}

if(getQueryVariable("layer2") =='true'){
    layer2s = "true";
}





const handleDrawCreate = (geojson)=>{
    console.log(geojson)
}

const MapContent = () => {
    //javascript
    return (
        <div>

            <MapContainer
                style={{ width: '100%', height: '100vh' }}
                center={[12.7169, 101.2299]}
                zoom={13} 
                
                
            >
                <LayersControl position='topright'>
                    <TileLayer
                        url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                    />
                    <BaseMap />

                    {/* MOO */}
                    <LayersControl.Overlay name="ขอบเขตหมู่บ้าน" checked>
                        <LayerGroup>
                            <Moo />
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="จุดรวบรวมขยะอันตราย" checked={layer1s}>
                        <LayerGroup>
                            <Hazardous />
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="ถังขยะ"  checked={layer1s}>
                        <LayerGroup>
                            <Bin />
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="ถังขยะติดเชื้อ" >
                        <LayerGroup>
                            <ABCBIN />
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="จุดรวบรวมขยะรีไซเคิล" >
                        <LayerGroup>
                            <Recycling />
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="ศูนย์จัดการเรียนรู้ขยะ" >
                        <LayerGroup>
                            <Learning />
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="สถานที่ประกอบกิจการที่อันตรายต่อสุขภาพ" >
                        <LayerGroup>
                            <HEALTH_HAZARD />
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="สถานที่ประกอบกิจการจำหน่ายหรือสะสมอาหาร" >
                        <LayerGroup>
                            <Food />
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="ตลาดสด ตลาดนัด" >
                        <LayerGroup>
                            <Market />
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="กิจการตาม พรบ.ควบคุมน้ำมันเชื้อเพลิง" >
                        <LayerGroup>
                            <Fuel />
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="ปริมาณการกักเก็บคาร์บอนภายในพื้นที่ป่าชุมชน" >
                        <LayerGroup>
                            <ABCDEF />
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="สวนสาธารณะ" >
                        <LayerGroup>
                            <Park />
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="ผู้ป่วยติดเตียง" >
                        <LayerGroup>
                            <Bedriden_Patients />
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="ผู้สูงอายุ" >
                        <LayerGroup>
                            <Elderly />
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="ผู้ป่วยเบาหวาน" >
                        <LayerGroup>
                            <DIABETS />
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="ผู้ป่วยไข้เลือดออก" >
                        <LayerGroup>
                            <DENGUE />
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="ผู้ป่วยไขมัน" >
                        <LayerGroup>
                            <HYPERLIPIDEMIA />
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="ผู้ป่วยหลอดเลือดสมอง" >
                        <LayerGroup>
                            <STROKE />
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="ผู้ป่วยความดัน" >
                        <LayerGroup>
                            <BLOOD_PRESSURE />
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="ศูนย์อพยพภัยพิบัติ สาธารณภัย" >
                        <LayerGroup>
                            <REFUGEE />
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="ข้อมูลสัตว์เลี้ยงและการฉีดวัคซีน" >
                        <LayerGroup>
                            <PET />
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="สัตว์จรจัด" >
                        <LayerGroup>
                            <STRAY />
                        </LayerGroup>
                    </LayersControl.Overlay>


                </LayersControl>
                
            {/* Widgets */}
            <LeafletDrawControl 
            onDrawCreated={handleDrawCreate}
            />
                  
            </MapContainer>
            )

            

        </div>
    )
}

export default MapContent