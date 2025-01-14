import React, { Component } from 'react'
import { Link } from 'react-router'
import t from 't-component'

export default class AnonUser extends Component {
  constructor (props) {
    super(props)

    this.state = {
      signin: true,
      signup: false
    }
  }

  componentWillReceiveProps (props) {
    const formName = props.form

    this.setState({
      signin: formName === 'signup' || !formName,
      signup: formName === 'signin'
    })
  }

  render () {
    return (
      <div className='header-item'>
        {
          this.state.signup &&
           (
             <Link
               to='/signup'
               className='header-link anon-user'
               onClick={this.props.toggleOnClick}
               tabIndex="4">
               {t('header.signup')} <i className="fas fa-chevron-right"></i>
             </Link>
           )
        }
        {
          this.state.signin &&
           (
             <Link
               to={{
                 pathname: '/signin',
                 query: window.location.pathname !== '/signup'
                   ? { ref: window.location.pathname }
                   : null
               }}
               className='header-link anon-user'
               onClick={this.props.toggleOnClick}
               tabIndex="5">
               {t('header.signin')} <i className="fas fa-sign-in"></i>
             </Link>
           )
        }
      </div>
    )
  }
}
