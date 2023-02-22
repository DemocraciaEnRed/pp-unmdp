const dbReady = require('lib/models').ready

const Text = require('lib/models').Text

const textsData = [
	{ "name": "home-subtitle", "text": "¡Accedé a las ideas!" },
	{ "name": "home-subtitle-text", "text": "Con PPUNDMP vas a poder presentar las ideas que la Universidad necesita para que entre todos podamos mejorarla." },
	{ "name": "home-video1-mp4", "text": "https://cldup.com/pQZlAEpzw0.mp4" },
	{ "name": "home-video1-webm", "text": "https://cldup.com/b5-PScfd-V.webm" },
	{ "name": "home-video2-mp4", "text": "https://cldup.com/w4RSGFJStA.mp4" },
	{ "name": "home-video2-webm", "text": "https://cldup.com/0Cy2GaQ-cR.webm" },
	{ "name": "home-icono1-imagen", "text": "https://i.ibb.co/NybQKTH/Group-1051.png" },
	{ "name": "home-icono1-titulo", "text": "¿Qué es?" },
	{ "name": "home-icono1-texto", "text": "Participa MGP es un proyecto por el cual vas a poder presentar las propuestas e ideas que tu barrio necesita. Luego, a través del voto, los vecinos del barrio van a poder decidir en qué utilizar parte del presupuesto del Municipio" },
	{ "name": "home-icono2-imagen", "text": "https://i.ibb.co/QpzFsyT/como-participo.png" },
	{ "name": "home-icono2-titulo", "text": "¿Cómo participo?" },
	{ "name": "home-icono2-texto", "text": "¡Sumá tus ideas por área temática! Podés elegir inversiones sobre mejoras del espacio público, seguridad, tránsito, deporte, educación, salud y cultura entre otros temas. Los proyectos que sean factubles (legal, técnica y presupuestariamente) serán sometidos a votación y los ganadores se realizarán en el año siguiente." },
	{ "name": "home-icono3-imagen", "text": "https://i.ibb.co/98HVNXq/como-seguimos.png" },
	{ "name": "home-icono3-titulo", "text": "¿Cómo seguimos?" },
	{ "name": "home-icono3-texto", "text": "A partir del 22 de noviembre, podés subir tu idea y participar colaborativamente en las del resto de los vecinos. Cada zona contará con reuniones zonales y un Grupo de Consejeros. Ellos son quienes te van a acompañar en el asesoramiento en la etapa de ideación." }
]

/**
 * Make any changes you need to make to the database here
 */
class SaltearPromises { }
exports.up = function up (done) {
  dbReady()
    // Primero chequear si ya no hay cosas cargadas
    .then(() => {
      return new Promise((resolve, reject) => {
        Text.collection.count({}, (err, count) => {
          if (err) reject(new Error(err))
          if (count) {
            console.log('Ya hay textos de portada cargados (%s), salteando migración', count)
            reject(new SaltearPromises())
          }
          resolve()
        })
      })
    })
    // Agregamos textos
    .then(() => Text.collection.insertMany(textsData))
    // Devolvemos al Migrator (de lib/migrations)
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
