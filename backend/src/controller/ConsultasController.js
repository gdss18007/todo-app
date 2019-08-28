const mongoose = require('mongoose');

const Consulta = mongoose.model('consulta');

module.exports = {
    async index(req,res){
        const consultas = await Consulta.find();
        return res.json(consultas);
    }
};