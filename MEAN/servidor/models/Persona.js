const mongoose = require("mongoose");

const PersonaSchema = mongoose.Schema({
    nombre:{
        type:String,
        require:true
    },
    ApellidoPaterno:{
        type:String,
        require:true
    },
    ApellidoMaterno:{
        type:String,
        require:true
    },
    direccion:{
        type:String,
        require:true
    },
    numero:{
        type:String,
        require:true
    },
    fechaCreacion:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model('Persona',PersonaSchema)

