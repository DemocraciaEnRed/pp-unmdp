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
    answer:'<p><span>Pueden participar docentes, no docentes, estudiantes, graduados y graduadas de las facultades, el colegio y las secretarias de la Universidad Nacional de Mar del Plata.</span></p>'
  },
  {
    question:'¿Cuál es el objetivo del presupuesto participativo?',
    answer:`<p><span>El Presupuesto participativo tiene por objetivo que las/os integrantes de la comunidad propongan ideas que aporten en la construcción de la Universidad que queremos. </span></p> 
            <p><span>Este programa tiene como principal objetivo fomentar y fortalecer la participación de los diferentes claustros en el diseño, elección y ejecución de propuestas de mejora para la institución, provocando un sentido de pertenencia en la Universidad. </span></p>`
  },
  {
    question:'¿Cómo participo?',
    answer:`<p><span>Te invitamos a registrarte aquí para sumar ideas. Se elige el eje temático que mejor represente a la idea. Luego se escribe con leguaje claro y sencillo la propuesta.</span></p> 
            <p><span>A su vez, podes expresar tu interés con propuestas que te interesen de cada temática. Podrás poner “me gusta” a temas de tu interés y comentar sobre las propuestas en la plataforma.</span></p> 
            <p><span>Cuando lleguemos a la etapa de votación vas a poder elegir un proyecto.</span></p> 
            <p><span>Es muy importante que fomentemos el diálogo informado y respetuoso.</span></p> `
  },
  {
    question:'¿Cuáles son los ejes temáticos para proponer ideas?',
    answer:`<p><span>Vas a encontrar en el formulario una serie de etiquetas que refieren a diversas líneas estratégicas de la UNMDP. Sólo podrás elegir una, la que te parezca que mejor define a tu idea. </span></p>
      <ol>
        <li>Equidad de Género</li>
        <li>Diversidad </li>
        <li>Interculturalidad </li>
        <li>Accesibilidad </li>
        <li>Sostenibilidad</li>
        <li>Innovación </li>
        <li>Salud </li>
      </ol>`
  },
  {
    question:'¿Cómo subo una idea?',
    answer:'<p><span>Encontrarás aquí el espacio para proponer tu idea: incluí un título y escribí un breve párrafo explicando de forma clara y concisa.</span></p>'
  },
  {
    question:'¿Qué pasa si no puedo registrarme?',
    answer:'<p><span>Te invitamos a que nos mandes un correo con todos tus datos (nombre completo, DNI, Facultad, claustro, mail o forma de contacto) a @gmail.com.</span></p>'
  },
  {
    question:'¿Cuántas ideas puedo subir?',
    answer:'<p><span>Podes subir todas las ideas que quieras, aunque cada una en un formulario independiente. </span></p>'
  },
  {
    question:'¿Qué tipo de ideas esperamos que subas al Espacio Participativo?',
    answer:'<p><span>Deben implementarse dentro de las dependencias de la UNMDP y en su intención deben contemplar bienes, servicios o beneficios para la comunidad universitaria en su conjunto. No pueden comprometer contratación de servicios o personas que sean de carácter permanente ni realizar inversión en infraestructura.</span></p>'
  },
  {
    question:'¿Puedo modificar mi idea una vez que fue enviada?',
    answer:'<p><span>Si, podes modificar tu idea tantas veces como quieras mientras sea la etapa de “subir ideas”.</span></p>'
  },
  {
    question:'¿Cuándo inicia y cierra la instancia de subir ideas?',
    answer:'<p><span>Inicia el 1/4/2023 hasta el 31/5/2022. En ese tiempo vas a poder subir una idea, modificarla e intercambiar sobre las ideas de otros/as participantes. </span></p>'
  },
  {
    question:'¿Qué pasará con mi idea?',
    answer:'<p><span>Otros/as participantes pueden comentar tu idea o darle «me gusta». Te invitamos a entrar en diálogo con otros/as participantes. Cerrado dicha etapa realizaremos una sistematización de ideas por temas. Se analizarán en la Comisión Evaluadora para ser desarrolladas como proyectos elegibles en la etapa de votación. </span></p>'
  },
  {
    question:'Si no participé de una etapa anterior ¿puedo sumarme?',
    answer:'<p><span>Podes sumarte en cualquier etapa del proceso, aunque no hayas participado de las anteriores. Es decir, podes no haber propuesto o comentado ideas, pero vas a poder votar.</span></p>'
  },
  {
    question:'¿Cuál es el monto asignado al Presupuesto Participativo?',
    answer:'<p><span>El monto asignado es de $10.000.000</span></p>'
  },
  {
    question:'¿Cómo se elegirán las ideas?',
    answer:'<p><span>Se realizarán jornadas de votación para que toda la comunidad de la UNDMP pueda decidir cuáles serán ejecutados hasta alcanzar el total de la partida presupuestaria. </span></p>'
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
          <h1>Acerca de</h1>
        </section>
        <div className="post-banner-static-2022 container">
          <span>Inscribirte para a sumarte como proyectista de la Comisión Universitaria este {config.currentEdition}.</span>
        </div>
        <Anchor id='container'>
          <div className="container">
          <div className="">
              <div className="">
                <p className='h4 text-center'>Podés leer el reglamento completo haciendo click <a href="/s/reglamento/" rel="noopener noreferer" target="_blank">aquí</a></p>
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
