const { Router } = require('express');
const route = Router();
const profesorController = require('../controller/profesoresController');

route.get('/', profesorController.consultar);
route.post('/', profesorController.insertar);

route.route('/:id')
  .put(profesorController.modifica)
  .delete(profesorController.Borra)
  .get(profesorController.consultarUno);

module.exports = route;