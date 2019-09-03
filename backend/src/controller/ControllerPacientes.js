const paciente = require('../api/todo/Pacientes')

paciente.methods(['get','post','put','delete'])
paciente.updateOptions({new: true, runValiators:true})

module.exports = paciente