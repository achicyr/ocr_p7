import React from 'react'

class Footer extends React.Component {
  render () {
    return (
      <footer className="d-flex justify-content-between container-fluid p-2 text-center">
        <p> @Copyright 2020  </p>
        <p>Presentation website for <a href="https://getbootstrap.com/">Boulder Bike Tour</a> in <a href="https://twitter.com/mdo">Colorado</a>.</p>
        <p>          <a href="#">Back to top</a>        </p>
    </footer>
    )
  }
}

export default Footer;
