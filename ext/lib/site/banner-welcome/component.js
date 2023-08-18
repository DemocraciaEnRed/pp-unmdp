import React, { Component } from 'react'
import { Link } from 'react-router'
import userConnector from 'lib/site/connectors/user'
import config from 'lib/config'

class BannerWelcome extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    const props = this.props
    return (
      <div id='bannerwelcome' className='banner-welcome'>
        <img src={config.propuestasAbiertas ? '/ext/lib/site/banner-welcome/vector.png' : '/ext/lib/site/banner-welcome/handlewithcare.png'} className="image-large" alt="Icono proyectistas"/>
        <p className="title">{props.texts['home-banner-title']}</p>
        <p className="subtitle">{props.texts['home-banner-text']}</p>
        <div className="container">
          <div className="row">
            <div className="col-md-6 button-rounded" >
              <Link to={props.texts['home-banner-button1-link']} tabIndex="14" rel="noopener noreferer">{props.texts['home-banner-button1-text']}</Link>
            </div>
            <div className='col-md-6 button-rounded' >
              <Link to={props.texts['home-banner-button2-link']} tabIndex="13">{props.texts['home-banner-button2-text']}</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default userConnector(BannerWelcome)
