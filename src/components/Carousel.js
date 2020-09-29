import React from 'react'
// import Flickr from "./vendor/flickr"

export default class Carousel extends React.Component{
  // constructor(p){
  //   super(p)
  // }
  render(){
    // console.log(Flickr);
    console.log("ohhh");
    // console.log(this.p.data);
    return (
      <div id="galleryCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {/* <li data-target="#galleryCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#galleryCarousel" data-slide-to="1"></li>
          <li data-target="#galleryCarousel" data-slide-to="2"></li> */}
        </ol>
        <div className="carousel-inner">
        </div>
        <a className="carousel-control-prev" href="#galleryCarousel" role="button" data-slide="prev">
          <span className="carousel-control-icons" aria-hidden="true">&lt;</span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#galleryCarousel" role="button" data-slide="next">
          <span className="carousel-control-icons" aria-hidden="true">&gt;</span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }
}
