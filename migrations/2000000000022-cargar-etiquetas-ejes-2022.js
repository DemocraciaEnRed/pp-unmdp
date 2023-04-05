const dbReady = require('lib/models').ready
const models = require('lib/models')

const nombreMigrationParaLog = 'cargar etiquetas y ejes 2022'
const Tag = models.Tag
const Eje = models.Eje

// 1. "transgender" - Equidad de Género
// 2. "user-line" - Diversidad
// 3. "wheelchair-move" Accesibilidad
// 4. "seeedliing" - Sostenibilidad
// 5. "podcast" - Innovación

const ejes = [
  { nombre: 'Equidad de Género', fontAwesomeIcon: 'fas fa-transgender', color: '#B751C8', hash: 'equidad-de-genero' },
  { nombre: 'Diversidad', fontAwesomeIcon: 'fas fa-users-line', color: '#F9B678', hash: 'diversidad' },
  { nombre: 'Accesibilidad', fontAwesomeIcon: 'fas fa-wheelchair-move', color: '#FF5353', hash: 'accesibilidad' },
  { nombre: 'Sostenibilidad', fontAwesomeIcon: 'fas fa-seedilng', color: '#33CC99', hash: 'sostenibilidad' },
  { nombre: 'Innovación', fontAwesomeIcon: 'fas fa-podcast', color: '#9E9CFB', hash: 'innovacion' },
]

const tags = ejes.map(eje => {
  return {
    name: eje.nombre,
    hash: eje.hash,
    fontAwesomeIcon: eje.fontAwesomeIcon,
    image: 'people',
    color: eje.color
  }
})

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
    .then(() => Tag.insertMany(tags))
    .then(() => Eje.insertMany(ejes))

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
