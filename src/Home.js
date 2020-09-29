import React from 'react'
import $ from "jquery";
import Jumbotron from './components/Jumbotron'
import Decounter from './components/Decounter'


export default class Home extends React.Component{
  render(){
    $('body').attr({'class': "menu_home"})
    return (
      <>
        <Jumbotron data={[<Decounter key={1} />]} />
        <HomeBasicInfos />
      </>
    )
  }
}




const HomeBasicInfos = () => {
  return (
    <article>
        <p>Hurry up guy !</p>
        <p>The Boulder Bike Tour will start soon, and you have to subscribe now !</p>
        <p>Here's a little description of this competition. You'll be seduced (trust me &lt;3) and just subscribe without thinking ^^:</p>
        <p className="">
          description...
        </p>
    </article>
  );
};

