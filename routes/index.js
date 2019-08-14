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

    //editar vacante
    router.get('/vacante/editar/:url', vacantesController.editarVacante);

    //guardar edición de vacante
    router.post('/vacante/editar/:url', vacantesController.guardarEditarVacante);


    return router;
}