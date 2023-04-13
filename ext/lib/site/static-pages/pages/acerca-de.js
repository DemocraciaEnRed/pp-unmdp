import React, { Component } from 'react'
import { Link } from 'react-router'
import Footer from 'ext/lib/site/footer/component'
import Jump from 'ext/lib/site/jump-button/component'
import Anchor from 'ext/lib/site/anchor'
// https://github.com/glennflanagan/react-responsive-accordion
import Accordion from 'react-responsive-accordion';
import config from 'lib/config'

const aboutUs=[  
  {
    question:'¿Quiénes pueden participar?',
    answer:'<p><span>Pueden participar docentes, no docentes, estudiantes, graduados y graduadas de las facultades, el colegio secundario y las secretarías de la Universidad Nacional de Mar del Plata.</span></p>'
  },
  {
    question:'¿Cuál es el objetivo del presupuesto participativo?',
    answer:`<p><span>El Presupuesto participativo tiene por objetivo que todos / todas los / las integrantes de la comunidad educativa realicen sus aportes para construir la puesta en marcha de distintas políticas públicas que mejoren la UNMDP.</span></p> 
            <p><span>El programa busca fomentar y fortalecer la participación de los diferentes claustros en el diseño, elección y ejecución de propuestas de mejora para la institución, provocando un sentido de pertenencia en la Universidad.</span></p>`
  },
  {
    question:'¿Cómo participo?',
    answer:`<p><span>Te invitamos a registrarte en la plataforma aquí para sumar ideas. Tenes que elegir el eje temático que mejor represente tu propuesta y luego escribir con lenguaje claro y sencillo la propuesta.</span></p> 
            <p><span>A su vez, podes expresar tu interés por las otras propuestas que suban tus compañeros/as. Con esta opción podrás poner “me gusta” a temas de tu interés y comentar sobre las propuestas en la plataforma.</span></p> 
            <p><span>Finalmente cuándo lleguemos a la etapa de votación vas a poder elegir un proyecto. Es muy importante que fomentemos el diálogo informado y respetuoso.</span></p> `
  },
  {
    question:'¿Cuáles son los ejes temáticos para proponer ideas?',
    answer:`<p><span>Vas a encontrar en el formulario una serie de etiquetas que refieren a diversas líneas estratégicas de la UNMDP. Sólo podrás elegir una, para utilizarla cómo el eje que mejor define a tu idea.</span></p>
      <ol>
        <li>Equidad de Género</li>
        <li>Diversidad </li>
        <li>Accesibilidad </li>
        <li>Sostenibilidad</li>
        <li>Innovación </li>
      </ol>`
  },
  {
    question:'¿Cómo subo una idea?',
    answer:'<p><span>Encontrarás <a href="/propuestas" target="_blank">aquí</a> el espacio para proponer tu idea: incluí un título y escribí un breve párrafo explicando de forma clara y concisa.</span></p>'
  },
  {
    question:'¿Qué pasa si no puedo registrarme?',
    answer:'<p><span>Te invitamos a que nos mandes un correo con todos tus datos (nombre completo, DNI, Facultad, claustro, mail o forma de contacto) presupuestoparticipativo@mdp.edu.ar</span></p>'
  },
  {
    question:'¿Cuántas ideas puedo subir?',
    answer:'<p><span>Podes subir todas las ideas que quieras, aunque cada una en un formulario independiente.</span></p>'
  },
  {
    question:'¿Puedo modificar mi idea una vez que fue enviada?',
    answer:'<p><span>Si, podes modificar tu idea tantas veces como quieras mientras el programa se encuentre en durante de la etapa de <b>“subir ideas”.</b></span></p>'
  },
  {
    question:'¿Cuándo inicia y cierra la instancia de subir ideas?',
    answer:'<p><span>La convocatoria estará disponible para subir ideas desde el día <b>13/4/2023 hasta el 31/5/2022</b>. Es importante que recuerden los plazos, ya que durante este tiempo vas a poder subir una idea, modificarla e intercambiar sobre las ideas de otros/as participantes.</span></p>'
  },
  {
    question:'¿Qué pasará con mi idea?',
    answer:'<p><span>Otros/as participantes pueden comentar tu idea o darle «me gusta». Te invitamos a entrar en diálogo con otros/as participantes, ya que una vez cerrada dicha etapa realizaremos una sistematización de ideas por temas. Se analizarán en la Comisión Evaluadora para ser desarrolladas como proyectos elegibles en la etapa de votación.</span></p>'
  },
  {
    question:'Si no participé de una etapa anterior ¿puedo sumarme?',
    answer:'<p><span>Podes sumarte en cualquier etapa del proceso, aunque no hayas participado de las anteriores. Es decir, podes no haber propuesto o comentado ideas, pero vas a poder votar. En cualquiera de las etapas que desees participar, ¡recordá que es necesario realizar el registro en la plataforma!</span></p>'
  },
  {
    question:'¿Qué condiciones deben respetar los proyectos?',
    answer:`<ol>
          <li>Los proyectos tienen que implementarse dentro de las dependencias de la UNMDP.</li>
          <li>Los proyectos pueden contemplar bienes, servicios y reparaciones para la comunidad universitaria en su conjunto.</li>
          <li>Los proyectos deben estar enmarcados en los ejes temáticos.</li>
          <li>Tienen que ser técnicamente realizables para ser ejecutados.</li>
          <li>Tienen que ser realizables en función del presupuesto disponible.</li>
        </ol>
    `
  },
  {
    question:'¿Qué características NO pueden tener las propuestas?',
    answer:`<ol>
          <li>Los proyectos no pueden contemplar inversión en obra pública.</li>
          <li>No deben comprometer partidas presupuestarias de años posteriores ni la contratación de servicios o personas que sean de carácter permanente.</li>
        </ol>
    `
  },
  {
    question:'¿Cuál es el monto total asignado al Presupuesto Participativo?',
    answer:'<p><span>El monto asignado es de $10.000.000</span></p>'
  },
  {
    question:'¿Cuál es el monto total asignado por proyecto?',
    answer:`<ol>
          <li>Proyectos de bajo impacto hasta $1.200.000.</li>
          <li>Proyectos de alto impacto hasta $2.500.000.</li>
        </ol>
        <p><span>Se tendrá en cuenta diferentes criterios para definir el impacto de cada proyecto:</span></p>
        <ol>
          <li>Si es el eje temático con mayor participación.</li>
          <li>Si es el claustro con mayor participación.</li>
          <li>Si es la unidad académica con mayor participación.</li>
          <li>Si tiene participación/beneficio interclaustro.</li>
          <li>Si abarca dos o más unidades académicas.</li>
        </ol>
    `
  },
  {
    question:'¿Cómo se elegirán las ideas?',
    answer:'<p><span>Se realizarán jornadas de votación para que toda la comunidad de la UNDMP pueda decidir cuáles serán las ideas transformadas en proyectos a ser ejecutados hasta alcanzar el total de la partida presupuestaria.</span></p>'
  },
]


export default class Page extends Component {
  constructor (props) {
    super(props)

    this.state = {
      openSection: this.props.location.query.q === 'proyectista' ? 12 : 0,
      faqs: aboutUs
    }
  }



  goTop (anchorId) {
    Anchor.goTo(anchorId)
  }

  render () {
    let { openSection,faqs } = this.state
    return (
      <div>
        <section className="banner-static-2022 about">
          <h1>Información</h1>
        </section>
        <div className="post-banner-static-2022 container">
          <span>Presupuesto Participativo {config.currentEdition}</span>
        </div>
        <Anchor id='container'>
          <div className="container">
          <div className="">
              <div className="">
                <p className='h4 text-center'>Podés leer el reglamento completo haciendo click <a href="https://celeste.blob.core.windows.net/clients-assets/pp-unmdp/REGLAMENTO-PP-UNMP-2023.pdf" rel="noopener noreferer" target="_blank">aquí</a></p>
                <br />
                <br />
                <Accordion startPosition={openSection}>
                {faqs.map((faq,idx) => (
                      <div key={idx} data-trigger={`+ ${faq.question}`}>
                        <p className="p-padding" dangerouslySetInnerHTML={{__html:faq.answer}} ></p>
                      </div>
                    ))}
                  
                </Accordion>
              </div>
            </div>
            <br />
            <br />
            <br />
          </div>
        </Anchor>
        <Jump goTop={this.goTop} />
        <Footer />
      </div>
    )
  }
}
