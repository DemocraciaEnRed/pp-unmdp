const dbReady = require('lib/models').ready

const Forum = require('lib/models').Forum
const Facultad = require('lib/models').Facultad

const nombreMigrationParaLog = 'editar forum attrs'

const estadoOptions = [
	{
		"name" : "proyecto",
		"title" : "Proyecto"
	},
	{
		"name" : "pendiente",
		"title" : "Idea"
	}
]

const facultades = [
	{ nombre: 'Arquitectura, Urbanismo y Diseño', abreviacion: 'FAUD' },
	{ nombre: 'Facultad de Ciencias Agrarias', abreviacion: 'FCA' },
	{ nombre: 'Facultad de Ciencias de la Salud y Trabajo Social', abreviacion: 'FCSYTS' },
	{ nombre: 'Facultad de Ciencias Económicas y Sociales', abreviacion: 'FCEyS' },
	{ nombre: ' Facultad de Ciencias Exactas y Naturales', abreviacion: 'FCEyN' },
	{ nombre: 'Facultad de Derecho', abreviacion: 'FD' },
	{ nombre: 'Facultad de Humanidades', abreviacion: 'FH' },
	{ nombre: 'Facultad de Ingeniería', abreviacion: 'Fi' },
	{ nombre: 'Facultad de Psicologia', abreviacion: 'F.PSICO' },
	{ nombre: 'Escuela Superior de Medicina', abreviacion: 'ESM' },
	{ nombre: 'Colegio Nacional Arturo Illia', abreviacion: 'CNAI' },
  ]

const facultadField = {
		"name" : "facultad",
		"title" : "Facultad",
		"description" : "Este campo solo se usa para ideas sistematizadas.",
		"kind" : "Enum",
		"mandatory" : true,
		"groupOrder" : 0,
		"group" : "",
		"order" : 1,
		"width" : 6,
		"icon" : "",
		"options" : [{name: 'ninguna', title: 'Ninguna'}]
}

const deepCopy = obj => {
	return JSON.parse(JSON.stringify(obj))
}

/**
 * Make any changes you need to make to the database here
 */
class SaltearPromises { }
exports.up = function up (done) {
  dbReady()

    .then(() => Facultad.find())
    .then((facultades) => {
      return new Promise((resolve, reject) => {
	      Forum.findOne({name: 'proyectos'}, (err, forumProyecto) => {
	        if (err) reject(new Error(err))
					if (!forumProyecto || !forumProyecto.topicsAttrs) reject(new Error('No forum proyectos or no topicAttrs in it found'))

					// por algún motivo no nos deja editar un item del array
					const copyAttrs = deepCopy(forumProyecto.topicsAttrs)

					let attr = copyAttrs.find(a => a.name == 'state')
					attr.options = estadoOptions
					attr.title = "Tipo de idea"
					attr.description = "Si es cargada por alumnas/os (original) o si es proyecto."
					attr.hide = false
					attr.order = 0
					attr.icon = ''

					// borramos campo anterior si ya estaba
					const facultadIndex = copyAttrs.findIndex(a => a.name == 'facultad')
					if (facultadIndex != -1)
						copyAttrs.splice(facultadIndex, 1)

					// agregamos campo facultad
					facultades.forEach(e => facultadField.options.push({name: e._id, title: e.abreviacion}))

					copyAttrs.push(facultadField)

					// borramos todo y volvemos a generar
					forumProyecto.topicsAttrs.splice(0)
					forumProyecto.topicsAttrs.push(...copyAttrs)

					forumProyecto.markModified('topicsAttrs')

					Forum.collection.save(forumProyecto, (err) => {
						if (err) reject(new Error(err))
						resolve()
					})
	      })
			})
		})

    // Todo OK
    .then(() => {
      console.log(`-- Migración ${nombreMigrationParaLog} exitosa`)
      done()
    })
    // Error
    .catch((err) => {
      if (err instanceof SaltearPromises)
        done()
      else{
	      console.log(`-- Migración ${nombreMigrationParaLog} no funcionó! Error: ${err}`)
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
