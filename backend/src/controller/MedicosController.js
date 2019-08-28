const mongoose = require('mongoose');

const Medico = mongoose.model('medico');

module.exports = {
    async index(req,res){
        const medicos = await Medico.find();
        return res.json(medicos);
    }
};