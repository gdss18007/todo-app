const mongoose = require('mongoose');

const Paciente = mongoose.model('paciente');

module.exports = {
    async index(req,res){
        const pacientes = await Paciente.find();
        return res.json(pacientes);
    }
};