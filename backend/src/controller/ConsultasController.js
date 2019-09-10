const horario = require('../api/consulta')
horario.methods(['get','post','put','delete'])
horario.updateOptions({new: true, runValiators:true})
module.exports = horario