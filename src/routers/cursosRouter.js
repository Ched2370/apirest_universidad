const { Router } = require('express');
const route = Router();
const cursoController = require('../controller/cursosController');

route.get('/', cursoController.consultar);
route.post('/', cursoController.insertar);

route.route('/:id')
  .put(cursoController.modifica)
  .delete(cursoController.Borra)
  .get(cursoController.consultarUno);

module.exports = route;