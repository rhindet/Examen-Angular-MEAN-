const Persona = require("../models/Persona");





exports.crearPersona= async (req,res)=>{
    try {
        let persona;
        persona = new Persona(req.body);
       await persona.save()
       res.send(persona);
        
    } catch (error) {
        console.log(error);
       // res.status(500).send('hubo error')
    }
}

exports.obtenerPersona= async (req,res)=>{
    try {
        
        const persona = await Persona.find();
        res.json(persona)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo error')
    }
}

exports.actualizarPersona=async(req,res)=>{
    try {
        const {nombre,ApellidoPaterno,ApellidoMaterno,direccion,numero} = req.body;
        let persona = await Persona.findById(req.params.id);
        if (!persona) {
            res.status(404).json({msg:'No existe la apersona'});

        }
        persona.nombre = nombre;
        persona.ApellidoPaterno = ApellidoPaterno;
        persona.ApellidoMaterno = ApellidoMaterno;
        persona.direccion = direccion;
        persona.numero = numero;

        persona= await Persona.findByIdAndUpdate({_id:req.params.id},persona,{new:true})
        res.json(persona);
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo error')
    }
}

 exports.obtenerPersonas=async(req,res)=>{
    try {
       
        let persona = await Persona.findById(req.params.id);
        console.log(persona)
         if (!persona) {
             res.status(404).json({msg:'No existe la bpersona'+persona});

         }
        
         res.json(persona);
     } catch (error) {
         console.log(error);
       res.status(500).send('hubo error')
     }
 }
exports.eliminarPersona=async(req,res)=>{
    try {
       
        let persona = await Persona.findById(req.params.id);
        if (!persona) {
            res.status(404).json({msg:'No existe la cpersona'});

        }
        await Persona.findByIdAndRemove({_id:req.params.id})
        res.json({msg:'Persona eliminado con exito'});
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo error')
    }
}