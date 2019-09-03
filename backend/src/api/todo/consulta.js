const restful = require('node-restful')
const mongoose = restful.mongoose

const Consultas = new mongoose.Schema({
    id:{
        type: String,
        required:true
    },
    medico:{
        type:String,
        required:true
    },
    paciente:{
        type:String,
        required:true
    },
    horario:{
        type: String,
        required:false
    },
    data:{
        type: Date,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});
module.exports = restful.model('consulta',Consultas);