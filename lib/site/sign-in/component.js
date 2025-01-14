import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import t from 't-component'
import bus from 'bus'
import config from 'lib/config'
import FormAsync from 'lib/site/form-async'
import userConnector from 'lib/site/connectors/user'
import BtnFacebook from './btn-facebook'

export class SignIn extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false,
      errors: null,
      showResend: null
    }
  }

  componentWillMount () {
    bus.emit('user-form:load', 'signin')
  }

  componentWillUnmount () {
    bus.emit('user-form:load', '')
  }

  handleSubmit = () => {
    this.setState({ loading: true })
  }

  handleSuccess = (attrs) => {
    this.setState({ loading: false, errors: null })

    this.props.user.update(attrs)

    if (this.props.location.query.ref) {
      var url = window.decodeURI(this.props.location.query.ref)
      browserHistory.push(url === '/signup' ? '/' : url)
    } else {
      browserHistory.push('/')
    }
    // por algún motivo si no refresh-amos no recarga la data del usuarix
    window.location.reload()
  }

  handleFail = (err, code) => {
    if (code && code === 'EMAIL_NOT_VALIDATED') {
      this.setState({ loading: false, errors: err, showResend: true })
    } else {
      this.setState({ loading: false, errors: err })
    }
  }

  handleSignUp = () => {
    browserHistory.push(`/signup${window.location.search}`)
  }

  checkEmail (e) {
    if (~e.target.value.indexOf('@') && !~e.target.value.indexOf(' ')) {
      e.target.setCustomValidity('')
    } else {
      e.target.setCustomValidity(t('validators.invalid.email'))
    }
  }

  render () {
    const form = (
      <FormAsync
        action='/api/signin'
        onSubmit={this.handleSubmit}
        onSuccess={this.handleSuccess}
        onFail={this.handleFail}>
        {this.state.errors && this.state.errors.length > 0 && (
          <ul className='form-errors'>
            {
            this.state.errors && this.state.errors
              .map((error, key) => (<li key={key} dangerouslySetInnerHTML={{ __html: error }}></li>))
            }
          </ul>
        )}
        {this.state.showResend && (
          <div className='form-group resend-validation-email'>
            <Link to='/signup/resend-validation-email'>
              {t('signup.resend-validation-email')}
            </Link>
          </div>
        )}
        <div className='form-group'>
          <label htmlFor=''>Correo electrónico con el que te registraste</label>
          <input
            type='email'
            className='form-control'
            name='email'
            placeholder={t('forgot.mail.example')}
            tabIndex={1}
            maxLength='200'
            onBlur={this.checkEmail}
            required />
        </div>
        <div className='form-group'>
          <div className='forgot'>
            <Link
              to='/forgot'
              tabIndex={4}>
              {t('forgot.question')}
            </Link>
          </div>
          <label htmlFor=''>{t('password')}</label>
          <input
            type='password'
            className='form-control'
            name='password'
            placeholder={t('password')}
            tabIndex={2}
            maxLength='200'
            required />
        </div>
        {!this.state.loading && (
          <button
            className='btn btn-block btn-primary'
            type='submit'>
            Ingresar <i className="fas fa-sign-in"></i>
          </button>
        )}
        {this.state.loading && (
          <button
            className='loader-btn btn btn-block btn-default'
            type='button'
            tabIndex='-1'>
            <div className='loader' />
            Ingresar <i className="fas fa-sign-in"></i>
          </button>
        )}
      </FormAsync>
    )

    return (
      <div id='sign-in'>
        <div className='title-page'>
          <div className='circle'>
            <i className='icon-login' />
          </div>
        </div>
        {!config.facebookSignin
          &&
          <h1 className='ingresar-title'>Iniciar sesión</h1>
          ||
          <FacebookForm />
        }

        { form }

        <hr />
        <div className="signup">
          <span>¿Aún no estas registrado/a?</span>
          <button type="submit" className="btn btn-block btn-go-signup" onClick={this.handleSignUp}>
          <i className="icon-plus-sign-alt"></i>&nbsp;&nbsp;¡Hacé click y crea una cuenta!
          </button>
        </div>
      </div>
    )
  }
}

export default userConnector(SignIn)

function FacebookForm () {
  return (
    <div className='facebook-auth-form'>
      <BtnFacebook />
      <hr />
      <p className='muted'>{t('signin.or-login-with-email')}</p>
    </div>
  )
}
