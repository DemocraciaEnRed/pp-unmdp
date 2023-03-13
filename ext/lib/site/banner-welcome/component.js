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
    return (
      <div id='bannerwelcome' className='banner-welcome'>
        <img src={config.propuestasAbiertas ? '/ext/lib/site/banner-welcome/vector.png' : '/ext/lib/site/banner-welcome/handlewithcare.png'} className="image-large" alt="Icono proyectistas"/>
        <p className="title">{config.propuestasAbiertas ? '¡La subida de ideas está abierta!': '¡Próximamente se abrirá el formulario de subida de ideas!'}</p>
        <p className="subtitle">{
        config.votacionAbierta ? 'Podés votar hasta 3 proyectos' : 
        config.propuestasAbiertas ? 'Te invitamos a compartir tus ideas para mejorar la Universidad y a conocer las ideas de tus Compañeros/as':
        'El formulario se abrirá próximamente, mientras tanto te invitamos a conocer el reglamento y los términos y condiciones del pp.'
        }</p>

        <div className="container">
        {config.propuestasAbiertas ? <div className="row">
          <div className="col-md-6 button-rounded" >
        
          
          <Link to="/formulario-idea" tabIndex="14" rel="noopener noreferer">Subí tu idea</Link>
      
          </div>
          <div className='col-md-6 button-rounded' >
          <Link to='/propuestas' tabIndex="13"> Ver ideas
          </Link>
          </div>
          {/* <div className="col-md-3">
            <Link to={'/s/eventos'} className="boton-foro-presencial" href="">Votación Presencial</Link>
          </div> */}
        </div> : <div className="row">
          <div className="col-md-6 button-rounded" >
        
          
          <Link to="/s/reglamento" tabIndex="14" rel="noopener noreferer">Reglamento</Link>
      
          </div>
          <div className='col-md-6 button-rounded' >
          <Link to='/s/terminos-y-condiciones' tabIndex="13"> Terminos y Condiciones
          </Link>
          </div>
        </div>}
      </div>
      </div>
    )
  }
}

export default userConnector(BannerWelcome)
