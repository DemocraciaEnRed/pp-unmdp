const dbReady = require('lib/models').ready
const models = require('lib/models')

const nombreMigrationParaLog = 'cargar etiquetas y ejes'
const Tag = models.Tag
const Eje = models.Eje

const etiquetas = [
  { nombre: "Ambiente y Sustentabilidad" },
  { nombre: "Género / DDHH / Accesibilidad" },
  { nombre: "Infraestructura" },
  { nombre: "Académica / Aprendizajes " },
  { nombre: "Vinculación con el medio" },
  { nombre: "Arte / Deporte / Salud " },
  { nombre: "Convivencia y Participación" },
]

const tags = etiquetas.map(etiqueta => {
  return {
    name: etiqueta.nombre,
    hash: etiqueta.nombre.toLowerCase().replace(/ /g, '-'),
    image: 'people',
    color: '#091A33'
  }
})

const ejes = [
  { nombre: 'Equidad de Género', fontAwesomeIcon: 'fas fa-transgender', color: '#B751C8', hash: 'equidad-de-genero' },
  { nombre: 'Diversidad', fontAwesomeIcon: 'fas fa-users-line', color: '#F9B678', hash: 'diversidad' },
  { nombre: 'Accesibilidad', fontAwesomeIcon: 'fas fa-wheelchair-move', color: '#FF5353', hash: 'accesibilidad' },
  { nombre: 'Sostenibilidad', fontAwesomeIcon: 'fas fa-seedilng', color: '#33CC99', hash: 'sostenibilidad' },
  { nombre: 'Innovación', fontAwesomeIcon: 'fas fa-podcast', color: '#9E9CFB', hash: 'innovacion' },
]


/**
 * Make any changes you need to make to the database here
 */
exports.up = function up (done) {
  // done() devuelve al Migrator de lib/migrations
  dbReady()

    // borramos data vieja
    .then(() => Tag.collection.deleteMany({}))
    .then(() => Eje.collection.deleteMany({}))

    // Agregamos data
    .then(() => Tag.insertMany(tags) )
    .then(() => Eje.insertMany(ejes) )

    // Todo OK
    .then(() => {
      console.log(`-- Migración ${nombreMigrationParaLog} exitosa`)
      done()
    })
    // Error
    .catch((err) => {
      console.log(`-- Migración ${nombreMigrationParaLog} no funcionó! Error: ${err}`)
      done(err)
    })
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
exports.down = function down(done) {
  done();
};
