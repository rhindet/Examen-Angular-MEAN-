const express = require('express');
const router = express.Router();
const personaController = require('../controllers/personaController');
router.post('/',personaController.crearPersona);
router.get('/',personaController.obtenerPersona);
router.put('/:id',personaController.actualizarPersona);
router.get('/:id',personaController.obtenerPersonas);
router.delete('/:id',personaController.eliminarPersona);
module.exports = router 