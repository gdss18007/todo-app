const express = require('express');
module.exports = function(server){
    const router = express.Router();
    server.use('/api',router)

    const todoService = require('../api/todo/webService')
    const pacienteService = require('../controller/ControllerPacientes')
    todoService.register(router,'/todo')
    pacienteService.register(router,'/paciente')
}

// const MedicoController =  require('../controller/MedicosController');
// const ConsultaController = require('../controller/ConsultasController');
// const PacienteController = require('../controller/ControllerPacientes');
// const HorarioController = require('../controller/ControllerHorarios');
// routes.get("/medico",MedicoController.index);
// routes.get("/consulta",ConsultaController.index);
// routes.get("/paciente",PacienteController.index);
// routes.get("/horarios",HorarioController.index);
// module.exports = routes;