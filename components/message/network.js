const express = require('express');
const response = require('../../network/response');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Se llamo al get');
    response.success(req, res, 'Lista de mensajes');
});

router.post('/', (req, res) => {
    if (req.query.error == 'OK') {
        response.error(req, res, 'Error inesperado', 500, 'Es solo una simulación de los errores');
    } else {
        response.success(req, res, 'Creado correctamente', 201);
    }
});

module.exports = router;