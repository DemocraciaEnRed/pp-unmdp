const dbReady = require('lib/models').ready

const Text = require('lib/models').Text

const textsData = [
	{ "name": "home-banner-title", "text": "¡Pronto podrás conocer las ideas a votar!" },
	{ "name": "home-banner-text", "text": "El equipo de gestión y coordinación a cargo del programa está evaluando cada una de las ideas." },
  { "name": "home-banner-button1-text", "text": "Conocé las propuestas" },
  { "name": "home-banner-button1-link", "text": "/propuestas" },
  { "name": "home-banner-button2-text", "text": "Reglamento" },
  { "name": "home-banner-button2-link", "text": "https://celeste.blob.core.windows.net/clients-assets/pp-unmdp/REGLAMENTO-PP-UNMP-2023.pdf" },
]

/**
 * Make any changes you need to make to the database here
 */
class SaltearPromises { }
exports.up = function up (done) {
  dbReady()
    // Agregamos textos
    .then(() => Text.collection.insertMany(textsData))
    .then(() => {
      console.log(`-- Agregados textos de portada`)
      done()
    })
    .catch((err) => {
      if (err instanceof SaltearPromises)
        done()
      else{
        console.log('-- Actualizacion de textos de portada no funcionó! Error: ', err)
        done(err)
      }
    })
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
exports.down = function down(done) {
  done();
};
