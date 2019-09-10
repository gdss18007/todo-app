const medico = require('../api/Medicos')
medico.methods(['get','post','put','delete'])
medico.updateOptions({new: true, runValiators:true})
module.exports = medico