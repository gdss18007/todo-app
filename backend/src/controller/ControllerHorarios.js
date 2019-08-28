const mongoose = require('mongoose');

const Horario = mongoose.model('horarios');

module.exports = {
    async index(req,res){
        const horario = await Horario.find();
        return res.json(horario);
    }
};