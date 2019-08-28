const mongoose = require('mongoose');
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
mongoose.model('horarios',Horarios);