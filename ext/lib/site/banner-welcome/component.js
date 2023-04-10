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
        <p className="title">{config.propuestasAbiertas ? '¡La convocatoria ya está abierta!' : '¡Próximamente abrirá la convocatoria de ideas!'}</p>
        <p className="subtitle">{
        config.votacionAbierta ? 'Podés votar hasta 3 proyectos' : 
        config.propuestasAbiertas ? 'Te invitamos a compartir tus ideas que luego se convertirán en proyectos de mejora para la Universidad':
        'El formulario se abrirá próximamente, mientras tanto te invitamos a conocer el reglamento y los términos y condiciones del pp.'
        }</p>

        <div className="container">
        {config.propuestasAbiertas ? <div className="row">
          <div className="col-md-6 button-rounded" >
        
          
          <Link to="/formulario-idea" tabIndex="14" rel="noopener noreferer">Subí tu idea</Link>
      
          </div>
          <div className='col-md-6 button-rounded' >
          <Link to='/propuestas' tabIndex="13"> Conocé las ideas
          </Link>
          </div>
          {/* <div className="col-md-3">
            <Link to={'/s/foro-presencial'} className="boton-foro-presencial" href="">Votación Presencial</Link>
          </div> */}
        </div> : <div className="row">
          <div className="col-md-6 button-rounded" >
        
          
          <Link to="https://celeste.blob.core.windows.net/clients-assets/pp-unmdp/REGLAMENTO-PP-UNMP-2023.pdf" tabIndex="14" rel="noopener noreferer">Reglamento</Link>
      
          </div>
          <div className='col-md-6 button-rounded' >
          <Link to='/s/acerca-de' tabIndex="13"> Información
          </Link>
          </div>
        </div>}
      </div>
      </div>
    )
  }
}

export default userConnector(BannerWelcome)
