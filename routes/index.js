const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const vacantesController = require('../controllers/vacantesController');


module.exports = () => {
    router.get('/', homeController.mostrarTrabajos);

    //Crear vacantes
    router.get('/vacantes/nueva', vacantesController.nuevaVacante);
    router.post('/vacantes/nueva', vacantesController.guardarVacante);

    //Mostrar vacante
    router.get('/vacante/:url', vacantesController.mostrarVacante);

    return router;
}