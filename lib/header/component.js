import React, { Component } from 'react'
import { Link } from 'react-router'
import bus from 'bus'
import isAbsoluteUrl from 'is-absolute-url'
import config from 'lib/config'
import urlBuilder from 'lib/url-builder'
import userConnector from 'lib/site/connectors/user'
import UserBadge from './user-badge/component'
import AnonUser from './anon-user/component'

class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {
      userForm: null,
      showToggleSidebar: null,
      showSidebar: null
    }
  }

  componentWillMount () {
    bus.on('user-form:load', this.onLoadUserForm)
    bus.on('sidebar:enable', this.showToggleSidebarChange)
    bus.on('sidebar:show', this.showSidebarChange)
  }

  componentWillUnmount () {
    bus.off('user-form:load', this.onLoadUserForm)
    bus.off('sidebar:enable', this.showToggleSidebarChange)
    bus.off('sidebar:show', this.showSidebarChange)
  }

  onLoadUserForm = (formName) => {
    this.setState({
      userForm: formName
    })
  }

  showToggleSidebarChange = (bool) => {
    this.setState({
      showToggleSidebar: bool
    })
  }

  showSidebarChange = (bool) => {
    this.setState({
      showSidebar: bool
    })
  }

  handleToggleSidebar = (evt) => {
    evt.preventDefault()
    bus.emit('sidebar:show', !this.state.showSidebar)
  }

  render () {
    const styles = {
      color: config.headerFontColor,
      backgroundColor: config.headerBackgroundColor
    }

    const classes = ['header']

    if (config.headerContrast) classes.push('with-contrast')
    
    const alt = "Logo presupuesto participativo Universidad Nacional de Mar del Plata" 
    const logoDesktop = <img className='logo-desktop' src={config.logo} height='40' alt={alt}/>
    const logoMobile = <img className='logo-mobile' src={config.logoMobile} height='40' alt={alt}/>

    return (
      <header className={classes.join(' ')} style={styles}>
        {
          this.state.showToggleSidebar &&
          (
            <button
              id='toggleButton'
              onClick={this.handleToggleSidebar}>
              <span className='icon-menu' />
            </button>
          )
        }

        {isAbsoluteUrl(config.homeLink) && (
          <a className='logo' href={config.homeLink} rel='noopener nofollow'>
            {logoDesktop}
            {logoMobile}
          </a>
        )}

        {!isAbsoluteUrl(config.homeLink) && (
          <Link className='logo' to={config.homeLink}>
            {logoDesktop}
            {logoMobile}
          </Link>
        )}

        <div className='header-items'>

          {this.props.user.state.fulfilled && (
            <UserBadge />
          )}

          {this.props.user.state.rejected && (
            <AnonUser form={this.state.userForm} />
          )}
        </div>
      </header>
    )
  }
}

export default userConnector(Header)
