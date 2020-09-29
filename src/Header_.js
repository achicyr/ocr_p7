import React from 'react'
import {
  Link
} from "react-router-dom";

export default class Header extends React.Component{
  render(){
    return(
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="">Boulder Bike Tour</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse float-right" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="rider">Riders</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="gallery">Photos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="geo">Map</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contest">Contests</Link>
              </li>
            </ul>
          </div>
          <a href="/register_now" title="Be the winner of this year, register now !"><img className="float-right" height="50" src="./imgs/animes/anime_0.gif" alt="Register now !"/></a>
        </nav>
      </header>
    )
  }
}
