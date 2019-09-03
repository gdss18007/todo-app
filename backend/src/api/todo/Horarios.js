const restful = require('node-restful')
const mongoose = restful.mongoose

const Horarios = new mongoose.Schema({
    id:{
        type: String,
        required:true
    },
    horario:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});
module.exports = restful.model('horarios',Horarios);