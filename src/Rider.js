import React from 'react';
import PropTypes from 'prop-types';
import $ from "jquery";
import {csvJSON} from "./components/vendor/tools"

class Rider extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               data: []
          };
          fetch(props.host || "http://localhost:7000/rider.csv").then(d=>d.text().then(r=>{
               this.setState({data: csvJSON(r).map((d,i)=>(
                    <div className="card" key={i++}><span>{i}</span>
                         <img className="card-img-top" src="logo512.png" alt="" style={{width: "100px"}}/>
                         <div className="card-body">
                              <h4 className="card-title"><span>Biker:</span> {d["First name"]} {d["Last name"]}</h4>
                              <p className="card-text">From: {d["City of origin"]}</p>
                              <p className="card-text">
                                   Actual position: {d[Object.keys(d)[Object.keys(d).length-1]]}
                              </p>
                         </div>
                    </div>
               ))})
          }))
          $('body').attr({'class': "menu_rider"})
     }
     render() {
          console.log(this.state);
          return (
               <>
                    {this.state.data}    
               </>
          );
     }
}

Rider.propTypes = {};

export default Rider;
