import React, {Component} from 'react'
import { Link } from 'react-router'
import Footer from   'ext/lib/site/footer/component'
import Jump from 'ext/lib/site/jump-button/component'
import Anchor from 'ext/lib/site/anchor'
import userConnector from 'lib/site/connectors/user'

class Page extends Component {
  constructor (props) {
    super(props)

    this.state = {
      agenda: [],
      futureEvents: [],
      pastEvents: [],
      buttonPressed: [],
      isLoading: true
    }
  }

  componentDidMount () {
    this.goTop()
    this.getAgenda()
  }

  getAgenda = () => {
    window.fetch(`/api/agenda/all`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((res) => {
      if (res.status === 200) {
        return res
      }
    })
    .then((res) => res.json())
    .then((res) => {
      // filter past events from future events with today datetime
      let today = new Date()
      let futureEvents = res.filter((item) => {
        let date = new Date(item.datetime)
        return date > today
      })
      let pastEvents = res.filter((item) => {
        let date = new Date(item.datetime)
        return date < today
      })
      this.setState({
        agenda: res,
        futureEvents: futureEvents,
        pastEvents: pastEvents,
        isLoading: false
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  onButtonPressed = (agendaId) => {
    // send a post to /api/settings/proyectistas/join using fetch
    let obj = {
      id: agendaId
    }
    window.fetch(`/api/agenda/assist`, {
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
        // alert('¡Te has anotado al evento! ¡Muchas gracias!')
        // add agendaId to buttonPressed array
        let buttonPressed = this.state.buttonPressed
        buttonPressed.push(agendaId)
        this.setState({
          buttonPressed: buttonPressed
        })
      } else {
        alert('Ups! Por favor, intentelo otra vez.')
      }
    })
    .catch((err) => {
      alert('Ups! Por favor, intentelo otra vez.')
      console.log(err)
    })
  }

  goTop () {
    Anchor.goTo('container')
  }

  render () {
    let { agenda, futureEvents, pastEvents, buttonPressed } = this.state
    return (
      <div id="foro-presencial">
        <section className="the-banner">
          Foro presencial
        </section>
        <div className="the-subbanner-container">
          <div className="the-subbanner">
            Si queres podes sumar tu idea también en los foros presenciales
          </div>
        </div>
        <div className="the-content">
          <div className="container">
            {/* <div className="row">
              <div className="col-md-12">
                <div className="alert alert-success">
                  <strong>¡Muchas gracias!</strong> Te has anotado al evento con éxito.
                </div>
              </div>
            </div> */}
            <div className="row" style={{ justifyContent: 'center' }}>
              { futureEvents.length > 0 && futureEvents.map((item, index) => (
                <div className="col-md-4" key={index}>
                  <div className="agenda-container">
                    <div className="agenda-top-head">
                      <div className="tiki-left"/>
                      <div className="tiki-right"/>
                    </div>
                    <div className="agenda-content">
                      <h5>{item.nombre}</h5>
                      <p>{item.dia} de {item.mes} de {item.ano}<br/>{item.hora}</p>
                      <p>{item.lugar}</p>
                      {this.props.user.state.rejected && (
                        <div>
                          <Link to={'/signin'} className="agenda-button-assist">ASISTIR</Link>
                        </div>
                      )}
                      {
                        (() => {
                          if (this.props.user.state.fulfilled && item.asistentes.includes(this.props.user.state.value.id)) {
                            return (
                              <div className="agenda-button-confirm">
                                ASISTIRÉ <i className="glyphicon glyphicon-ok-sign"></i>
                              </div>
                            )
                          }
                          if (this.props.user.state.fulfilled && !item.asistentes.includes(this.props.user.state.value.id) && !buttonPressed.includes(item._id)) {
                            return (
                              <div onClick={() => this.onButtonPressed(item._id)} className="agenda-button-assist">
                                ASISTIR
                              </div>
                            )
                          }
                          if (buttonPressed.includes(item._id)){
                            return (
                              <p className="text-success"><strong>¡Muchas gracias!</strong><br/><small>Te has anotado al evento con éxito.</small></p>
                            )
                          }
                        })()
                      }
                    </div>
                    <div className="add-to-calendar"><small className="pull-right"><a className="add-to-calendar-link">+ Agregar a Google Calendar</a></small></div>

                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-center">Eventos pasados</h3>
            <div className="row" style={{ justifyContent: 'center' }}>
              {
                pastEvents.length > 0 && pastEvents.map((item, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="past-event panel panel-default">
                      <div className="panel-body text-center">
                        <p className="past-title"><b>{item.nombre}</b></p>
                        <p className="past-date">{item.dia} de {item.mes} de {item.ano} - {item.hora}</p>
                        <p className="past-place"><small>{item.lugar}
                        {
                          this.props.user.state.fulfilled && item.asistentes.includes(this.props.user.state.value.id) && (
                            <span>&nbsp;-&nbsp;Asistiré&nbsp;<span className="glyphicon glyphicon-ok-sign"></span></span>
                          )
                        }
                        </small></p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <Jump goTop={this.goTop} />
        <Footer />
      </div>
    )
  }
}

export default userConnector(Page)
