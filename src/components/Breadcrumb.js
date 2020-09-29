import React from 'react'

export default class Breadcrumb extends React.Component {
  render () {
    let path = document.location.pathname.replace('/','')
    return(
      <>
        <ol className="safe container breadcrumb">
          <li><a href="#" class='{path == "" ? active; : ""}'>Home</a></li>&nbsp;>&nbsp;
          { path != "" ? 
            <li>{path.charAt(0).toUpperCase() + path.slice(1)}</li>
            :
            <></>
          }
        </ol>
        {/*
        <nav className="breadcrumb">
            <a className="breadcrumb-item" href="#">Home</a>
            <a className="breadcrumb-item" href="#">Library</a>
            <span className="breadcrumb-item active">Data</span>
        </nav>
        */}
      </>
    )
  }
}
