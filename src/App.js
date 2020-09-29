import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import css from './assets/style.scss';
import Header from './Header_'
import Footer from './Footer_'
import Home from './Home'
import Contest from './Contest'
import Gallery from './Gallery'
import Rider from './Rider.js'
import Geo from './Geo.js'
import Breadcrumb from './components/Breadcrumb';
import ridersJSON from "./components/vendor/riders.json";

export default class App extends React.Component{
  render(){
    return(
      <Router>
        <Header />
        <nav>
          <Breadcrumb />
        </nav>
        {/* <hr className="my-4"/> */}
        <main>
          <Switch>
            <Route path="/contest">
              <Contest />
            </Route>
            <Route path="/gallery" riders={ridersJSON}>
              <Gallery />
            </Route>
            <Route path="/rider" riders={ridersJSON}>
              <Rider />
            </Route>
            <Route path="/geo">
              <Geo />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    )
  }
}
