const restful = require('node-restful')
const mongoose = restful.mongoose

const Pacientes = new mongoose.Schema({
    CPf:{
        type: String,
        required:true
    },
    Nome:{
        type:String,
        required:true
    },
    telefone:{
        type:String,
        required:true
    },
    endereco:{
        type: String,
        required:false
    },
    bairro:{
        type: String,
        required:true
    },
    num_res:{
        type:String,
        required:true
    },
    e_mail:{
        type:String,
        required:true
    },
    sexo:{
        type: String,
        required:false
    },
    senha:{
        type: String,
        required:false
    },
    cadastroOnLine:{
        type:Boolean,
        required:false,
        default:false
    },
    createdAt:{
        type:Date,
        required:false,
        default:Date.now
    },
});
module.exports = restful.model('paciente',Pacientes)