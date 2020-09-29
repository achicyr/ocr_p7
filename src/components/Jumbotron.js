import { map } from 'jquery'
import React from 'react'

export default class Jumbotron extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <section className="jumbotron text-center border border-dark w-75">
        <h1 className="display-4">Welcome to the Boulder Bike Tour !</h1>
        <p className="lead">Follow us on social networks:</p>
        <div className="list-group flex-row justify-content-center">
            <a href="facebook.com/" target="_blank" className="list-group-item list-group-item-action flex-column align-items-start"><span className="iconify" data-icon="openmoji:facebook" data-inline="false"></span> Facebook</a>
            <a href="instagram.com/" target="_blank" className="list-group-item list-group-item-action flex-column align-items-start"><span className="iconify" data-icon="mdi:instagram" data-inline="false"></span> Instagram</a>
            <a href="twitter.com/" target="_blank" className="list-group-item list-group-item-action flex-column align-items-start"><span className="iconify" data-icon="openmoji:twitter" data-inline="false"></span> Twitter</a>
        </div>
        <hr className="my-4"/>
        {
          this.props.data.map((component) => {
            return component
          })
        }
      </section>
    )
  }
}
