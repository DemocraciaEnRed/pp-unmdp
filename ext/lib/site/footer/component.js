import React from 'react'
import { Link } from 'react-router'
import BannerProyectistas from '../banner-proyectistas/component'
import config from 'lib/config'
import PropTypes from 'prop-types'

const Footer = (props) => {

  return(
  <div>
    {
      props.BannerProyectistas && config.mostrarFormulariosProyectistas && <BannerProyectistas />
    }
    <footer className='footer-static'>
      <div className='container'>
        <div className='contacto-detalles'>
          <h3>CONTACTO</h3>
          <p>
            <span>Universidad Nacional de Mar del Plata</span>
            <span>Diagonal J. B. Alberdi 2695</span>
            <span>(7600) Mar del Plata</span>
            <span>Tel.: 54.0223.492.1705 al 1710</span>
            <span>Fax 54.223.492.1710</span>
            <br/>
            <span className='c-white'>Email para consultas: </span>
            <a tabIndex="8" href="mailto:webadmin@mdp.edu.ar">webadmin@mdp.edu.ar</a>
          </p>
        </div>
        <div className='mapa-box'>
          <div>
          
            <iframe className='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.7735132720068!2d-57.5734977849084!3d-38.00574297971802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584deb7308df243%3A0x73f08d2c6aeca400!2sUniversidad%20Nacional%20de%20Mar%20del%20Plata!5e0!3m2!1ses!2sar!4v1675882131071!5m2!1ses!2sar" frameBorder="0" allowFullScreen/>
          </div>
        </div>
        <div className='social-icon'>
          <a className='social-facebook' tabIndex="9"  href='https://www.facebook.com/unmdp/ ' target="_blank"/>
          <a className='social-instagram' tabIndex="10"  href='https://www.instagram.com/unmdp_oficial/' target="_blank" />
          <a className='social-twitter' tabIndex="11"  href='https://twitter.com/unmdp/' target="_blank" />
          <a className='social-mail' tabIndex="12"  href='mailto:webadmin@mdp.edu.ar' target="_blank"/>
        </div>
        <div className='logos'>
          <a href="https://democraciaenred.org/" rel="noopener noreferer" target="_blank">
            <div className='logo-der'>
              <img src="/ext/lib/site/footer/logo-der.png" alt="Logo democracia en red"/>
              <span>Desarrollado por<br /><b>Democracia en red</b></span>
            </div>
          </a>
          <div className='logo ml-3'>
            <a className='logo-unmdp' href='https://www.mdp.edu.ar/' aria-label="Link a pagina universidad nacional de mar del plata" rel="noopener noreferer" target="_blank" />
          </div>
{/*           <div className="logo-access">
            <img src="/ext/lib/site/footer/accesibility-logo.png" alt="Logo accesibilidad universal"/>
          </div>
          <div className='logo-flor'>
            <img src="/ext/lib/site/footer/logo-flor.png" alt="Logo dibujante Flor Balestra"/>
          </div>
          <div className='logo-universidad'>
            <img src="/ext/lib/site/footer/logo-universidad-que-queremos.png" alt="Logo la universidad que queremos"/>
          </div> */}
        </div>
        <div className='terminos'>
          <Link to='/s/terminos-y-condiciones' tabIndex="13"> Términos y condiciones
          </Link>
          <a href="/s/reglamento" tabIndex="14" rel="noopener noreferer" target="_blank"> Reglamento
          </a>
        </div>
      </div>
    </footer>
  </div>
)}

Footer.propTypes ={
  BannerProyectistas:PropTypes.bool
}

export default Footer
