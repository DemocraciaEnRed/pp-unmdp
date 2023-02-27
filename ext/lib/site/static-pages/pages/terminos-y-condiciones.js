import React, {Component} from 'react'
import Footer from   'ext/lib/site/footer/component'
import Jump from 'ext/lib/site/jump-button/component'
import Anchor from 'ext/lib/site/anchor'

const TyCItems = [
  {name:'Acerca de este sitio',text:'<a href="/">Presupuesto participativo</a> es un nuevo canal de diálogo, transparencia y deliberación entre los ciudadanos de [Institución educativa] y [Responsables del PP]. Tiene como objetivos promover la participación ciudadana y fortalecer el proceso de presupuesto participativo en el Municipio.'},
  {name:'Tecnología',text:'Presupuesto Participativo es un desarrollo basado en <a href="http://democracyos.org/">DemocracyOS</a> con la coordinación de [Responsables del PP]. DemocracyOS es una plataforma online de código abierto especialmente diseñada para informar, debatir y comprometerse con propuestas públicas hacia la construcción de una democracia adaptada al siglo XXI. DemocracyOS es desarrollado por la Fundación <a href="http://democraciaenred.org">Democracia en Red</a>.'},
  {name:'Registro en la plataforma web',text:'El ingreso a Presupuesto Participativo no requiere registro online previo, el mismo será requerido si la/el usuaria/o desea publicar contenidos o interactuar con otros usuarios. <br/> Esperamos que te registres usando tu nombre. Las cuentas de "bots" u otros registros automáticos no están permitidas. Los usuarios son responsables de preservar la privacidad de su cuenta protegiendo el acceso a sus contraseñas. Por favor, ante cualquier ingreso indebido en tu cuenta, comunicate inmediatamente a través de [información de contacto responsables del PP]'},
  {name:'Validación de usuarios',text:`Presupuesto Participativo se reserva el derecho de validar la información brindada por la/el usuaria/o al momento de la inscripción. En caso de que la información brindada no pueda validarse, Presupuesto Participativo se reserva el derecho de no dar de alta a ese usuario. Por su parte, Presupuesto Participativo deslinda su responsabilidad en el caso de no ser veraz la información suministrada al respecto. <br/> Al momento de la inscripción el usuario asume el compromiso y la responsabilidad de: <br/>
        <ul><li>No proporcionar información personal falsa ni crear cuentas a nombre de terceros sin autorización.</li>
        <li>No crear más de una cuenta personal.</li>
        <li>No compartir la contraseña ni permitir a otra persona acceda a su cuenta.</li>
        <li>Los usuarios se comprometen a notificar a Presupuesto Participativo del uso no autorizado de su clave.</li> 
        <li>El Presupuesto Participativo se reserva el derecho de rechazar cualquier solicitud de inscripción o de cancelar un registro previamente aceptado.</li> 
        </ul>`},
  {name:'Usuarios, obligaciones y condiciones',text:'La/El usuaria/o deberá respetar estos Términos y Condiciones de Uso. Las infracciones por acción u omisión de estos Términos y Condiciones de Uso generarán el derecho a favor de Presupuesto Participativo de suspender al usuario que las haya realizado. <br/> La/El usuaria/o es responsable del contenido que suba, publique o muestre en Presupuesto Participativo, garantizando que el mismo no infringe derechos de terceros ni los Términos y Condiciones de Uso ni viola ninguna ley, reglamento u otra normativa. Los usuarios entienden y aceptan que el material y/o contenido que suba y/o publique podría ser utilizado por otros usuarios de la plataforma web y/o por terceras personas ajenas, y que Presupuesto Participativo no será responsable en ningún caso por tales utilizaciones. <br/>La/El usuaria/o debe usar Presupuesto Participativo en forma correcta y lícita. En caso contrario, Presupuesto Participativo podrá retirar el contenido y/o suspender la cuenta de aquellos usuarios que incurran en actitudes contrarias a estos términos y condiciones y/o de la política de privacidad, ofensivas, ilegales, violatorias de derechos de terceros, contrarias a la moral y buenas costumbres y/o amenaza para la seguridad de otros usuarios. <br/> En relación a los aportes, colaboraciones y comentarios que los usuarios realicen con respecto a las iniciativas propuestas, las mismas no son de carácter vinculante, obligatorio y/o impositivo sobre las acciones de [responsables del pp].'},
  {name:'Actividades prohibidas', text:`Las siguientes actividades se encuentran vedadas, sin perjuicio de las prohibiciones generales expuestas anteriormente: <br/>
        <ul>
          <li>Hostigar, acosar, amenazar, realizar actos de vandalismo hacia otros usuarios.</li>
          <li>Infringir los derechos a la intimidad de otros usuarios.</li>
          <li>Solicitar información personal identificable de otros usuarios con el propósito de hostigar, atacar, explotar, violar la intimidad de los mismos;</li>
          <li>Publicar de manera intencionada o con conocimiento injurias o calumnias;</li>
          <li>Publicar, con el intento de engañar, contenido que es falso o inexacto;</li>
          <li>Intentar usurpar la identidad de otra/o usuaria/o, representando de manera falsa su afiliación con cualquier individuo o entidad, o utilizar el nombre de otra/o usuaria/o con el propósito de engañar;</li>
          <li>Promover, defender o mostrar pornografía, obscenidad, vulgaridad, blasfemia, odio, fanatismo, racismo y/o violencia.</li>
          <li>Vulnerar los derechos establecidos en la Ley N° 25.326 de Protección de Datos Personales.</li>
        </ul>
        En caso de sufrir alguna de estas situaciones, comunicarse con Presupuesto Participativo a través de [Información de contacto responsables del PP]`},
  {name:'Moderación de la actividad en Presupuesto Participativo', text:`La actividad en esta plataforma web contará con moderadores responsables de hacer cumplir estos Términos y Condiciones de Uso. Los mismos serán designados por [Responsables del pp] en pos de fomentar un diálogo franco y abierto que evite afrentas a personas o instituciones, material comercial no relacionado (SPAM) u otros desvíos de la intención original de Presupuesto Participativo. <br/> Aún así, los moderadores se reservan el derecho de: <br/>
        <ul>
          <li>Rechazar o eliminar contenido que no cumpla cumpla con estos términos de uso o que, de alguna forma, sea cuestionable.</li>
          <li>Quitar el acceso a quien no cumpliera, de alguna forma, con estos términos de uso.</li>
        </ul>`},
  {name:'Políticas de privacidad', text:'La recolección y tratamiento de los datos personales tiene como finalidad conocer sobre el uso de Presupuesto Participativo y mejorar la propuesta. <br/> La Universidad Nacional de Mar del Plata no cederá a ninguna otra persona ni organismo los datos personales de los participantes, salvo orden judicial. Los datos recabados tienen por único objeto verificar que las propuestas sean presentadas por personas legalmente habilitadas para hacerlo y evitar abusos en el uso de la plataforma. Esta información será utilizada exclusivamente para obtener estadísticas generales de los usuarios.'},
  {name:'Información proporcionada por los usuarios:', text: 'Las interacciones en Presupuesto Participativo requiere que los usuarios se registren. En ese caso, se solicitará información personal, como nombre y apellido, documento, dirección legal y dirección de correo electrónico. El perfil que es visible públicamente puede incluir el nombre y la foto seleccionada. <br/> Asimismo, si un usuario se pone en contacto con Presupuesto Participativo, es posible que guardemos constancia de la comunicación para poder resolver más fácilmente cualquier incidencia que se haya producido. <br/> Las direcciones de correo electrónico o cuenta de Facebook sólo se utilizarán para enviar notificaciones sobre el uso de la plataforma, avisos sobre futuras votaciones o consultas y otra información sobre el Presupuesto Participativo. No obstante, cada usuario podrá darse de baja en cualquier momento si así lo desea.'},
  {name:'Información obtenida a partir del uso de la plataforma:', text:'Presupuesto Participativo puede recopilar información sobre la forma en que los usuarios usan la plataforma. Entre la información obtenida de esta forma, se incluye el tipo de navegador utilizado, la preferencias de lenguaje y, por ejemplo, los comentarios que ha realizado. <br/> Presupuesto Participativo podrá compartir información de manera agregada, y en carácter no personal, con el público en general (por ejemplo, mostrar tendencias sobre el uso del sitio). <br/> Presupuesto Participativo garantiza la debida protección de los datos personales almacenados en esta plataforma web así como también el acceso a la información registrada en el mismo, de conformidad a lo establecido en el artículo 43, párrafo tercero de la Constitución Nacional y la Ley N° 25.326 de Protección de los Datos Personales.'} 

]


const PrivacyPoliticsItems = [
  {name:'Nuestro compromiso con la privacidad.',
  number:1,
  items:[{number:1.1, text:'Esta Política de Privacidad (la “Política de Privacidad”) prevé cómo “Fundación Hormigas Argentinas, Más Ciudadanos para Reflexionar, Cooperar, Accionar y Crear” (Democracia en Red) (en adelante, “Democracia en Red” o “Nosotros”) procesa datos personales por cuenta y orden de [__] (el “Cliente”) bajo requerimiento de éste, carácter encargado de datos personales, para las finalidades acordadas con el Cliente; así como el uso que Democracia en Red puede dar a esos datos personales recolectados y brindados por el Cliente, y las medidas de seguridad tomadas para proteger la información.'},
         {number:1.2, text:'Procesaremos los Datos Personales (tal como dicho término se define más adelante) en carácter de encargados de los datos personales, en la forma expuesta aquí, y en un todo de acuerdo con lo requerido por la legislación en materia de datos personales aplicable de la República Argentina: Ley de Protección de Datos Personales N° 25.326, su Decreto Reglamentario 1558/2001 y disposiciones complementarias de la Agencia de Acceso a la Información Pública (AAIP), autoridad de control de la LPDP (la “LPDP”).'}]
  },
  {name:'Aplicación de esta Política de Privacidad.',
  number:2,
  items:[{number:2.1, text:'Esta Política de Privacidad se aplica a los Datos Personales de Titulares brindados por el Cliente a Democracia en Red, que se obtengan al visitar y/o registrarse y utilizar las Plataforma/s [__] desarrollada/s por Democracia en Red a tal fin, o por cualquier otro medio, y a la administración de dicha información personal.'},
         {number:2.2, text:'Al procesar los Datos Personales como encargados, los Datos Personales que conservamos acerca de los Titulares, lo haremos respetando los principios de finalidad, confidencialidad y seguridad, así como los recaudos de fondo y forma establecidos por la LPDP, para compartir tales Datos Personales.'}]
  },
  {name:'Los Datos Personales',
  number:3,
  items:[{number:3.1, text:'A modo meramente enunciativo y sin limitación, los tipos de Datos Personales que Democracia en Red procesará por cuenta y orden del Cliente incluirán Datos Personales recolectados por Clientes con consentimiento previo de sus Titulares provenientes de la plataforma [__] y/o plataformas desarrolladas por Democracia en Red a tal fin (las “Plataformas”); para las finalidades indicada por cada Cliente, incluyendo sin limitación las de [elaborar presupuestos participativos, votar proyectos de ley realizar consultas digitales, hacer un seguimiento de metas; realizar encuestas y sondeos, para el cumplimiento de una obligación legal; responder consultas, entre otros].'}]
  },
  {name:'Recopilación y finalidad de uso de los Datos Personales.',
  number:4,
  items:[{number:4.1, text:'En todos los casos que los Titulares brinden Datos Personales al Cliente, y de acuerdo con la LPDP, declaran que la información brindada es cierta y completa. Asimismo, en los casos que los Titulares brinden sus Datos Personales, aceptan y prestan su consentimiento libre, expreso e informado para que dichos Datos Personales sean procesados por Democracia en Red con las finalidades para las que fueron recolectados por el Cliente, que se establecen en la presente Política de Privacidad.'},
         {number:4.2, text:'A través de la Plataforma podrán recolectarse datos que pueden revelar el origen racial y étnico, opiniones políticas, convicciones religiosas, filosóficas o morales, afiliación sindical para tratar diferentes temáticas, por estar el Cliente legalmente autorizado para hacerlo y/o únicamente con el consentimiento previo, libre, expreso e informado de su Titular, de conformidad con la Legislación en materia de Datos Personales.', style:'strong'}]
  },
  {name:'Compartiendo sus Datos Personales.',
  number:5,
  items:[{number:5.1, text:'General. A fin de poner en práctica las finalidades descriptas precedentemente, los Datos Personales de los Titulares los divulgaremos únicamente con los fines antes dispuestos, así como de acuerdo con principios de seguridad y confidencialidad. Los datos personales podrán ser procesados, almacenados y transferidos a terceros en la forma aquí indicada. Los Titulares deberán notificar al Cliente en caso de que hubiese cambios en la información que nos han suministrado, así como también si determinan que los datos personales que procesamos son inexactos.'},
         {number:5.2, text:'Subprocesadores. Al igual que muchas entidades, en forma ocasional podremos contar con terceros para el procesamiento de determinadas funciones o información. En estos casos, nos obligamos a dichos terceros a proteger los Datos Personales con medidas de seguridad apropiadas, y prohibirles el uso de los Datos Personales para fines propios y a devolver o destruir los Datos Personales luego de concluida la prestación a Democracia en Red.'},
         {number:5.3, text:'Transferencia internacional de Datos Personales. Si surgiera la necesidad de realizar transferencias internacionales de datos, tomaremos medidas que aseguren que haya un fundamento legal para dicha transferencia y que se proporcione la protección adecuada a los Datos Personales conforme lo exige la LPDP, por ejemplo, utilizando contratos de Transferencia Internacional de Datos Personales de conformidad de las Cláusulas Modelo de la Disposición AAIP 60/2016, cuando la transferencia sea realice a países “sin legislación adecuada” conforme lo prescripto por la LPDP, o solicitando el consentimiento expreso del Titular de los Datos Personales, indicándole en el mismo el país al cual serán transferidos.'},
         {number:5.4, text:'Requisitos legales. Democracia en Red se reserva el derecho de divulgar cualquier Dato Personal que tenga sobre un Titular si un tribunal la obliga a hacerlo o ante la solicitud de una entidad gubernamental, o si Democracia en Red considera que es necesario o conveniente para cumplir con la ley o para proteger o defender sus derechos o propiedad. '}]

  },
  {name:'Protegiendo los Datos Personales.',
  number:6,
  items:[{number:6.1, text:'Para prevenir accesos no autorizados, mantener la precisión de los datos y asegurar el uso correcto de los Datos Personales, Democracia en Red ha puesto en uso ciertos medios físicos, electrónicos, administrativos y procedimientos de seguridad para resguardar y asegurar los Datos Personales recopilados. Democracia en Red resguarda los Datos Personales de acuerdo principios de seguridad y confidencialidad.'},
         {number:6.2, text:'Sin embargo, los Titulares reconocen que los medios técnicos existentes que brindan seguridad no son inexpugnables, y que aun cuando se adopten todos los recaudos razonables de seguridad es posible sufrir manipulaciones, destrucción y/o pérdida de información.'},
         {number:6.2, text:'Por otra parte, las Plataformas, podrán, contener links a ciertos sitios web de terceros. Si el Titular sigue un enlace a cualquiera de esos sitios web, deberán tener en cuenta que estos sitios tienen sus propias Políticas de Privacidad y Términos y Condiciones y Democracia en Red no es responsable por tales Políticas de Privacidad ni Términos de Uso.'}]

  },
  {name:'Manteniendo precisos los Datos Personales.',
  number:7,
  items:[{number:7.1, text:'Si el Titular quisiera ejercer alguno de los derechos que le asisten de acuerdo con la LPDP, de acceso, rectificación y/o supresión, podrá requerirlo de acuerdo con el procedimiento correspondiente previsto en la LPDP. <br/><br/> Si los datos son incorrectos, o deben ser actualizados y/o suprimidos, Democracia en Red corregirá, actualizará y/o suprimirá esa información a requerimiento del Titular, de conformidad con la LPDP. Para ello, el Titular debe enviar un correo electrónico a:  ______________________. Ello, detallando su nombre y apellido, número de DNI, su solicitud y razones del ejercicio de su derecho. Una vez cumplidos con los extremos anteriormente detallados y de conformidad con los requisitos de la LPDP, se atenderá el pedido en los plazos y de conformidad con lo que disponga LPDP. Alternativamente, podrá contactarse al: e-mail ______________________. Tel. ______________________.'},
         {number:7.2, text:'Asimismo, si el Titular se suscribe a alguno de las comunicaciones que ofrece Democracia en Red, tal como publicidades o newsletters, podrá dar de baja su suscripción en cualquier momento, siguiendo las instrucciones incluidas en cada comunicación. Democracia en Red hará todos los esfuerzos razonables para hacer que las solicitudes de los Titulares sean cumplidas. No obstante, quizá requiera información adicional antes de poder procesar cada solicitud.'}]
  },
  {name:'Implementación de la Política de Privacidad. Capacitación del colaboradores de Democracia en Red.',
  number:8,
  items:[{number:8.1, text:'Democracia en Red realizará sus mejores esfuerzos para difundir la presente Política de Privacidad -así como otras reglas y/o procedimientos que pueda establecer para proteger Datos Personales- entre sus colaboradores, procurando que reconozcan la importancia de la protección de los Datos Personales, capacitándolos y estableciendo reglas para el manejo de dicha información a fin de que se use y proteja adecuadamente y asegure que dicho sistema de manejo se ponga en ejecución.'},
         {number:8.2, text:'En caso de incidentes en la seguridad y/o mantenimiento de las bases de datos que mantenga, Democracia en Red procurará identificar las causas para adoptar medidas correctivas apropiadas de y de conformidad con los que exija la LPDP.'}]
  },
  {name:'Confidencialidad',
  number:9,
  items:[{number:9.1, text:'Democracia en Red no venderá o compartirá los Datos Personales excepto en las formas establecidas en estas políticas y conforme lo permita la LPDP. Haremos todo lo que esté a nuestro alcance para proteger la privacidad de la información. Puede suceder que en virtud de órdenes judiciales o de regulaciones legales, nos veamos compelidos a revelar información a las autoridades gubernamentales, en cuyo caso no responderemos por la información que sea revelada.'},]

},
  {name:'Auditoría sobre el cumplimiento de las Políticas de Privacidad.',
  number:10,
  items:[{number:10.1, text:'Democracia en Red realizará controles internos periódicos acerca del cumplimiento de la presente Política de Privacidad.'},
         {number:10.2, text:'Procesaremos los Datos Personales (tal como dicho término se define más adelante) en carácter de encargados de los datos personales, en la forma expuesta aquí, y en un todo de acuerdo con lo requerido por la legislación en materia de datos personales aplicable de la República Argentina: Ley de Protección de Datos Personales N° 25.326, su Decreto Reglamentario 1558/2001 y disposiciones complementarias de la Agencia de Acceso a la Información Pública (AAIP), autoridad de control de la LPDP (la “LPDP”).'}]
  },
  {name:'. Almacenamiento de los Datos Personales.',
  number:11,
  items:[{number:11.1, text:'Democracia en Red conservará los datos personales de los Titulares en servidores seguros. ______________________.'},
         {number:11.2, text:'Podremos utilizar establecimientos fuera del país de recolección para transferir los datos que recolectamos respecto de los Titulares. Tales establecimientos son utilizados para almacenar o procesar su información. Podemos contar con terceros para determinadas tareas de procesamiento, tales como el ‘hosting’ o alojamiento. Por lo tanto, los datos personales de los Titulares podrían ser transferidos a países con distintas leyes de protección de datos personales o ausencia de leyes. En tales casos y en la medida en que tales terceros tengan acceso a sus datos personales a efectos de realizar sus tareas de procesamiento, se tomarán todas las medidas técnicas y/o contractuales para asegurar que sus datos personales son procesados exclusivamente de acuerdo a las finalidades indicadas precedentemente y que los niveles adecuados de protección de acuerdo a la ley aplicable al caso han sido implementados a fin de salvaguardar sus datos personales. Al remitir sus datos, los Titulares aceptan esta transferencia y almacenamiento de datos y Ud. autorizan expresamente a Democracia en Red, de acuerdo con esta Política de Privacidad y la LPDP para: (i) procesar sus datos personales para las finalidades detalladas precedentemente y/o (ii) ceder y transferir sus datos personales recolectados como se indica precedentemente, sólo a terceros autorizados – en el país de recolección o en el exterior – para los propósitos indicados.'},
         {number:11.3, text:'Democracia en Red preservará los datos personales de los Titulares de acuerdo con los procedimientos de seguridad y confidencialidad indicados en la ley aplicable y regulaciones que correspondan. Sin embargo, los Titulares deben comprender que las transferencias de datos vía online no son completamente seguras. No podemos garantizar la protección total y seguridad de sus datos, sólo podemos garantizar que tomaremos todas las acciones razonables para proteger la información que nos envíen electrónicamente. La transmisión de cualquier información por su parte es a su propio riesgo.'}]

  },
  {name:' Contacto con Democracia en Red.',
  number:12,
  items:[{number:12.1, text:'En caso de preguntas sobre esta Política de Privacidad, contactarse a: ______________________. '}]
  },
  {name:'Cambios a la Política de Privacidad.',
  number:13,
  items:[{number:13.1, text:'Democracia en Red se reserva el derecho a modificar esta Política de Privacidad periódicamente. Notificaremos dichos cambios a los Titulares, visitantes y/o usuarios de las Plataformas por nuestros canales habituales, como el correo electrónico. Sin perjuicio de ello, los Los Titulares se comprometen a revisar regularmente estas Políticas de Privacidad a fin de informarse de cualquier cambio que se pueda haber producido.'}]
  },
  {name:'Ley Aplicable y Jurisdicción.',
  number:14,
  items:[{number:14.1, text:'Esta Política de Privacidad, y todo reclamo que se relacione con ella, se regirán por las leyes de la República Argentina. El Titular irrevocablemente acuerda someterse a la jurisdicción exclusiva de los tribunales con asiento en la Ciudad Autónoma de Buenos Aires, en relación con cualquier acción para la ejecución de esta la Política de Privacidad y los Términos y Condiciones de Democracia en Red.'}]
  },

]

export default class Page extends Component {
  componentDidMount () {
    this.goTop()
  }

  goTop () {
    Anchor.goTo('container')
  }

  render () {
    return (
      <div>
        {/* <section className="banner-static">
          <div className="banner"></div>
          <div className='contenedor largo'>
            <div className='fondo-titulo'>
              <h1>Términos y Condiciones</h1>
            </div>
          </div>
        </section> */
        }
        <section className="banner-static-2022">
          <h1>Términos y Condiciones</h1>
        </section>
        <Anchor id='container'>
          <div className='container'>
            <div className='tyc'>
              {TyCItems && TyCItems.map(item=><div>
                <h2><span>{item.name}</span></h2>
                <p className={item.style} dangerouslySetInnerHTML={{__html: item.text}}/>
              </div> )}
            </div>


            <div>
            <h1>Política de Privacidad</h1>
            {PrivacyPoliticsItems && PrivacyPoliticsItems.map(point=><div key={point.number}>
              <h2><span>{point.number}. {point.name}</span></h2>
            {point.items.map(item => 
            <div className='item-tyc'>
            <strong>{item.number}.</strong>
            <p className={item.style} dangerouslySetInnerHTML={{__html: item.text}}/>
            </div>)}
            </div>
            )}
            
            
            
            

            <p><span>Esta Política de Privacidad fue actualizada por última vez el [__] de [__] de 2021.</span></p>
            </div>

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
