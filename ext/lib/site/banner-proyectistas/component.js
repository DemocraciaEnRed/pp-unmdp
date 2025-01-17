import React, { Component } from 'react'
import { Link } from 'react-router'
import userConnector from 'lib/site/connectors/user'
import config from 'lib/config'

class BannerProyectistas extends Component {
  constructor (props) {
    super(props)
    this.state = {
      buttonPressed: false
    }
  }

  onButtonPressed = () => {
    // send a post to /api/settings/proyectistas/join using fetch
    let obj = {apa: 'apa'}
    window.fetch(`/api/settings/proyectistas/join`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((res) => {
      if (res.status === 200) {
        this.setState({
          buttonPressed: true
        })
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }

  scrollToProyectistas = () => {
    let element = document.getElementById('proyectistas')
    element.scrollIntoView({
      block: 'center',
      behavior: 'smooth'
    })
  }

  render () {
  const { user } = this.props
  const { buttonPressed } = this.state

   return (
    <div id="proyectistas" className="banner-proyectistas">
      {
        (this.props.user.state.rejected || (this.props.user.state.fulfilled && !this.props.user.state.value.proyectista && !buttonPressed)) &&
        <div className="follow-container" onClick={this.scrollToProyectistas}>
          <a className="follow-proyectistas">
            <span className="follow-text"> 
              <img src="/ext/lib/site/banner-proyectistas/proyectistas-icon.png" alt="Icono proyectistas"/>
              Quiero ser proyectista</span>
          </a>
        </div>
      }
      <img src="/ext/lib/site/banner-proyectistas/proyectistas.png" className="image-large" alt="Icono proyectistas"/>
      <p className="title"><strong>¡Sumate como Proyectista!</strong></p>
      <p className="subtitle">Te invitamos a sumarte como proyectista de la Comisión Universitaria este {config.currentEdition}.</p>
      {
        (() => {
          if (this.props.user.state.fulfilled && (this.props.user.state.value.proyectista || buttonPressed)) {
            return (
              <div className="button-rounded">¡SOY PROYECTISTA!</div>
            )
          }
          if (this.props.user.state.fulfilled && !this.props.user.state.value.proyectista && !buttonPressed) {
            return (
              <button type="button" onClick={this.onButtonPressed} className="button-rounded">QUIERO SER PROYECTISTA</button>
            )
          }
        })()
      }
      {
        buttonPressed && <div>
          <p className="thanks"><i>¡Gracias por sumarte a ser proyectista!</i></p>
        </div>
      }
      {this.props.user.state.rejected && (
        <div>
          <p><i>Para sumarte como proyectista tenés que iniciar sesión</i></p>
          <Link to={'/signin'} className="button-rounded">Iniciar Sesión</Link>
        </div>
      )}
      <div>
        <Link to={'/s/acerca-de?q=proyectista'} className="learn-more">Conoce mas sobre las tareas de un proyectista</Link>
      </div>
    </div>

   )
  }
}

export default userConnector(BannerProyectistas)
