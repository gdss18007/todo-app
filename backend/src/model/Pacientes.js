const mongoose = require('mongoose');
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
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
});
mongoose.model('paciente',Pacientes);