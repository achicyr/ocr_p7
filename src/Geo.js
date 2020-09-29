import React from 'react';
import PropTypes from 'prop-types';
import $ from "jquery";
import L from 'leaflet'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import {csvJSON} from "./components/vendor/tools"


   class Geo extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               lat: 40,
               lng: -105.3,
               zoom: 11,
               data: []
          }
          fetch(props.host || "http://localhost:7000/rider.csv").then(d=>d.text().then(r=>{
               this.setState({data: csvJSON(r).map((item,j)=>{
                    let i = 0, key, tmp
                    for(key in item){
                         if(++i == 5){
                              tmp = item[key].split('|')
                              item[key] = [
                                   parseFloat(tmp[0].substring(tmp[0].indexOf(': ')+2)), 
                                   parseFloat(tmp[1].substring(tmp[1].indexOf(': ')+2))
                              ]
                              tmp = item[key]
                         }
                    }
                    return (
                         <Marker position={tmp} key={j}>
                              <Popup>
                                   {item["First name"]} - {item["Last name"]} <br/>
                                   {item["City of origin"]} ({item["State of origin"]})
                              </Popup>
                         </Marker>
                    )
               })})
               console.log(csvJSON(r));
          }))
     }
   
     render() {
       const position = [this.state.lat, this.state.lng]
       return (
          <>
               <h2>Get informed in real-time how the tour turn out, wich is on pole positio, stats and more coming soon !</h2>
               <Map center={position} zoom={this.state.zoom} style={{height: 500}}>
                    <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    { this.state.data }
                         </Map>
          </>
       )
     }
}

Geo.propTypes = {};

export default Geo;



