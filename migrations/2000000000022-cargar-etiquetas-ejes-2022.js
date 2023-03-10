const dbReady = require('lib/models').ready
const models = require('lib/models')

const nombreMigrationParaLog = 'cargar etiquetas y ejes 2022'
const Tag = models.Tag
const Eje = models.Eje

const ejes = [
  { nombre: 'Equidad de Género', color: '#B751C8', hash: 'equidad-de-genero' },
  { nombre: 'Diversidad', color: '#F9B678', hash: 'diversidad' },
  { nombre: 'Interculturalidad', color: '#A7A94D', hash: 'interculturalidad' },
  { nombre: 'Accesibilidad', color: '#FF5353', hash: 'accesibilidad' },
  { nombre: 'Sostenibilidad', color: '#33CC99', hash: 'sostenibilidad' },
  { nombre: 'Innovación', color: '#9E9CFB', hash: 'innovacion' },
  { nombre: 'Salud', color: '#83D2FF', hash: 'salud' }
]


const tags = ejes.map(eje => {
  return {
    name: eje.nombre,
    hash: eje.hash,
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
