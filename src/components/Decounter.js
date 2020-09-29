import React from 'react'
import {
  Link
} from "react-router-dom";
import tools from "./vendor/tools.js"

export default class Decounter extends React.Component{
  constructor(props){
    super(props)
    this.eventDate = new Date(2021,4,1,9,0,0)
    this.state = {
      timer: tools(new Date(), this.eventDate),
      time_: new Date(),
      diff: ""
    }

  }
  componentDidMount(){
    setInterval(()=>{
      this.decounteState(tools(new Date(), this.eventDate))
    }, 1000)
  }
  decounteState(laps){
    this.setState((s,p)=>{
      return{timer: laps}
    })
  }
  render(){
    let timer = JSON.parse(this.state.timer)
    return (
      <div className="card decounter">
          <div className="card-header">
            <h4 className="card-title">The event will start in:</h4>
          </div>
          <div className="card-body">
              <p>(We're: <b>{new Date().toDateString()}</b>) </p>
              <p className="card-text">
                <b>{ timer.month }</b> <span>Month</span>,&nbsp;
                <b>{ timer.day }</b> <span>DAYS</span>,&nbsp;
                <b>{ timer.hour }</b> <span>HOURS</span>,&nbsp;
                <b>{ timer.min }</b> <span>MIN</span>, and&nbsp;
                <b>{ timer.sec }</b> <span>SEC</span>
              </p>
              <p>(The Tour starts: <b>{new Date("2021-04-01").toDateString()}, at  9 o'clock !</b>) </p>
          </div>
          <div className="card-footer text-muted">
            <p className="lead">
              <Link className="btn btn-primary btn-lg" to="/counter" role="button">Register now !</Link>
            </p>
          </div>
      </div>
    )
  }
}
