const { Router } = require('express');
const route = Router();
const estudianteController = require('../controller/estudiantesController');

route.get('/', estudianteController.consultar);
route.post('/', estudianteController.insertar);

route.route('/:id')
  .put(estudianteController.modifica)
  .delete(estudianteController.Borra)
  .get(estudianteController.consultarUno);

module.exports = route;