import React from 'react'
import { Link } from 'react-router'
import config from 'lib/config'

export default function ThumbsVoto(props) {
  let
    styleIcono1 = { backgroundImage: `url(${props.texts['home-icono1-imagen']})` },
    styleIcono2 = { backgroundImage: `url(${props.texts['home-icono2-imagen']})` },
    styleIcono3 = { backgroundImage: `url(${props.texts['home-icono3-imagen']})` };

  let subtitle = props.texts['home-subtitle']

  const urlRegex = /(https?:\/\/)([a-zA-Z]+(?:\.[a-zA-Z]+){2,})/
  let subtitleUrl = null
  try {
    if (subtitle && urlRegex.test(subtitle)){
      let groups = urlRegex.exec(subtitle)
      subtitleUrl = groups[0]
      let subtitleUrlName = groups[2]
      // escapeamos por si trae cosas raras
      subtitle = subtitle.replace(/</g, '&lt;').replace(/>/g, '&gt;')
      subtitle = subtitle.replace(subtitleUrl, `<a href="${subtitleUrl}">${subtitleUrlName}</a>`)
    }
  } catch (e) {}

  const handleSlider = (event) =>{
    const slider = document.getElementById('slider')
    let side = event.target.className.split('-').at(-1);
    let pos = Number(slider.style.translate.replace('%',''))
    if (side==='right'){
      if (pos != -66)pos -= 33
      else pos = 0
    }
    if (side==='left'){
      if (pos != 0)pos += 33
      else pos = -66
    }
    const indicator = document.getElementsByClassName('indicator')
    indicator.forEach(element => {
      element.classList.remove('active')
      if(pos===0)indicator[0].classList.add('active')
      if(pos===-33)indicator[1].classList.add('active')
      if(pos===-66)indicator[2].classList.add('active')
    });
    slider.style.translate = pos + '%'
  }

  window.addEventListener('resize', ()=>{if(window.innerWidth > 767) document.getElementById('slider').style.translate=0+'%' });

  return (
    <section className="thumbs info-landing">
      <div className="container-fluid">
        <div className="row cont">
          <div className="subtitulo">
            { subtitleUrl ?
              <h2 dangerouslySetInnerHTML={{__html: subtitle}} />
              :
              <h1>
                <a tabIndex="20" href={config.propuestasAbiertas ? '/formulario-idea' : '/propuestas'}>{ subtitle }</a>
              </h1>
            }
            {/*<h3>Hasta el 31 de mayo inclusive tenés tiempo para presentar tus propuestas</h3> */}
            <div className="container">
              <h3>{ props.texts['home-subtitle-text'] }</h3>
            </div>
            {
              /* config.propuestasAbiertas && config.propuestasVisibles &&
              <div className="row btn-container-home">
                <div className="col-md-3">
                  <Link
                    to='/formulario-idea'
                    className="boton-mandar-idea">
                    Subí tu idea
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link
                    to='/propuestas'
                    className="boton-mandar-idea">
                    Ver Proyectos
                  </Link>
                </div>
              </div> */
            }
          </div>
        </div>
        <div>

        <div className="row cont" id="slider"  >
          
          <div className="col-md-4">
            <div
              className="que-son img-responsive"
              style={styleIcono1}>
            </div>
            <h2
              className="text-center">
              { props.texts['home-icono1-titulo']}
            </h2>
            <p className="que-son-cont">
              { props.texts['home-icono1-texto']}
            </p>
          </div>

          <div className="col-md-4">
            <div
              className="que-propongo img-responsive"
              style={styleIcono2}>
            </div>
            <h2 className="text-center">{props.texts['home-icono2-titulo']}</h2>
            <p className="que-propongo-cont">
              {props.texts['home-icono2-texto']}
            </p>

          </div>

          <div className="col-md-4">
            <div
              className="como-sigo img-responsive"
              style={styleIcono3}>
            </div>
            <h2 className="text-center">
              { props.texts['home-icono3-titulo']}
            </h2>
            <p className="donde-voto-cont">
              {props.texts['home-icono3-texto']}
            </p>
          </div>
        </div>
            <span onClick={handleSlider} className='arrows glyphicon glyphicon-chevron-right'/>
            <span onClick={handleSlider} className='arrows glyphicon glyphicon-chevron-left'/>
            <span className='indicators'>
              <span className='indicator active'></span> 
              <span className='indicator'></span>
              <span className='indicator'></span>

            </span>
        </div>
        {/*
        <div className='row'>
          <div className='cont-boton-azul'>
            <Link to='https://presupuestoparticipativo.unr.edu.ar/como-participo/' className="boton-azul">
              ¿Como participo?
            </Link>
          </div>
        </div>
        */}      
        
      </div>
    </section>
  )
}
