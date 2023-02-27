import React, { Component } from 'react'
import {Link} from 'react-router'
import config from 'lib/config'
import Anchor from 'ext/lib/site/anchor'
import BannerForoVecinal from 'ext/lib/site/banner-foro-vecinal/component'
import BannerWelcome from 'ext/lib/site/banner-welcome/component'
import ThumbsVoto from 'ext/lib/site/thumbs-voto/component'
// import Barrios from 'ext/lib/site/barrios/component'
import Jump from 'ext/lib/site/jump-button/component'
import Footer from 'ext/lib/site/footer/component'
// import forumStore from 'lib/stores/forum-store/forum-store'
// import topicStore from 'lib/stores/topic-store/topic-store'
import textStore from 'lib/stores/text-store'
import TypeformButton from './typeform'

export default class HomeMultiforumOverride extends Component {
  constructor (props) {
    super(props)

    this.state = {
      texts: {}
    }
  }

  componentWillMount () {
    textStore.findAllDict().then((textsDict) => {
      this.setState({
        texts: textsDict
      })
    }).catch((err) => {
      this.state = {
        texts: {}
      }
    })
  }

  componentDidMount () {
    this.goTop()
  }

  goTop () {
    Anchor.goTo('container')
  }

  render () {
    return (
      <div className='ext-home-multiforum'>
        <Anchor id='container'>
          <BannerForoVecinal title={<div> PRESUPUESTO PARTICIPATIVO  <br/><span className='subtitle'> Universidad de Mar del Plata </span> </div>} texts={this.state.texts} />
          <ThumbsVoto texts={this.state.texts} />
          {/* <div className="banner-ideas">
            <img src="/ext/lib/site/home-multiforum/icon-idea.svg" alt="Ideas"/>
            <p>Conocé <strong>los proyectos </strong>que podés votar para que sean realidad en el 2022. <strong>¡Elegí hasta tres proyectos y votá!</strong>. Podés conocerlas aquí.</p>
            <Link to={'/propuestas'} className="boton-foro" href="">Ir a UNMDP DECIDE</Link>
          </div> */}
          {/* <Barrios /> */}
          <BannerWelcome />
          <Jump goTop={this.goTop} />
          <Footer/>
        </Anchor>
      </div>
    )
  }
}
