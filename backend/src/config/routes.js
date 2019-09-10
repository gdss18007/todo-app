const express = require('express');
module.exports = function(server){
    const router = express.Router();
    server.use('/api',router)

    const pacienteService = require('../controller/ControllerPacientes')
    const medicoService = require('../controller/MedicosController')
    const consultaService = require('../controller/ConsultasController')
    pacienteService.register(router,'/paciente')
    medicoService.register(router,'/medicos')
    consultaService.register(router,'/consultas')
}