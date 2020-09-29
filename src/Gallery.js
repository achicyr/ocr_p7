import React from 'react'
import $ from "jquery";
import Carousel from "./components/Carousel"
// var flickrOptions = {
//   api_key: "4d9566916d0dabeb1fa9e8548758aca6",
//   secret: "b6c81a0b8ee17dfb"
// };

class Gallery extends React.Component{
  constructor(p){
    super(p)
    this.state = {
      responses: []
    }
    $('body').attr({'class': "menu_gallery"})
  }
  componentDidMount(prevProps, prevState) {
    this.getSomePhotos()
  }
  componentWillUnmount() {
    this.state.async = false
  }
  explodeCarousel(json, btn){
    let a = btn.parent().find('.bg-warning').removeClass('bg-warning')
    btn.toggleClass('bg-warning')
    
    json = this.state.responses[json]
    let divcarousel = $('#galleryCarousel .carousel-inner').html('')
    let divindicators = $('#galleryCarousel .carousel-indicators').html('')
    let addIndicator
    json.photos.photo.map((tof,i)=>{
      let div = $("<div/>").addClass('carousel-item text-center')
      let img = $("<img/>").addClass("d-block").attr({"src": `https://farm${tof.farm}.staticflickr.com/${tof.server}/${tof.id}_${tof.secret}.jpg`, height: 600, class: "d-inline"})
      div.append(img)
      divcarousel.append(div)
      addIndicator = $('<li/>').attr({"data-target": "#galleryCarousel", "data-slide-to": i})
      if(i == 0)addIndicator.attr({class: "active"})
      divindicators.append(addIndicator)
      // return `https://farm${tof.farm}.staticflickr.com/${tof.server}/${tof.id}_${tof.secret}.jpg`
    })
    divcarousel.find("div:first").addClass('active')
  }
  getSomePhotos = (page) => {
             fetch(
               `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=4d9566916d0dabeb1fa9e8548758aca6&per_page=40&page=${this.state.responses.length+1}+&tags=bikerace,BoulderBikeTour&format=json&nojsoncallback=1`
             ).then(response=>{
                if(response.headers.get('content-type').indexOf("application/json") !== -1){
                  return response.json().then((json, btn/*is void, just put it there in order to not hove to define it later*/)=>{
                    console.log(json)
                    console.log(btn);
                    this.setState({responses: [...this.state.responses, json]})
                    $("#gallery__pagination").append((btn = $(`<button class="test btn btn-info" data-response="${this.state.responses.length - 1}"><span class="badge badge-secondary">${this.state.responses.length}</span></button>`)))
                    // console.log(this.state.responses[btn.data('response')-1]);
                    btn.click(()=>{
                      this.explodeCarousel(
                        btn.data('response'), btn
                      )
                    })
                    btn.click()
                  })
                }else{
                  return response.text().then((e)=>{
                    alert("erreur => see log")
                    console.log(e)
                  })
                }
              })
  }
  render(){
    /*
    console.log("out of async");
    // console.log(tmp);
    data = tmp.photos.photo.map((tof,i)=>
      `https://farm${tof.farm}.staticflickr.com/${tof.server}/${tof.id}_${tof.secret}.jpg`
    )
    */
    return(
      <>
        <h1>Appriciate bike memories with us !</h1>
        <Carousel />
        <p id="gallery__pagination" class="text-center">
          <button class="btn btn-primary" onClick={this.getSomePhotos}>
                  Add more photos <span class="badge badge-primary"></span>
          </button>
        </p>
      </>
    )
  }
}
export default Gallery
