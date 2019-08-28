const mongoose = require('mongoose');
const Medicos = new mongoose.Schema({
    CRM:{
        type: String,
        required:true
    },
    especialidades:{
        type:[String],
        reuired:true
    },
    data_nasc:{
        type:String,
        required:true
    },
    nome:{
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
        type: Boolean,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});
mongoose.model('medico',Medicos);
