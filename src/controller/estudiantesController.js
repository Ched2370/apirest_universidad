class EstudianteController{
  constructor(){};

  insertar(req, res){
    res.send('Agregando Estudiante desde clase')
  };
  
  modifica(req, res){
    res.send('Modificando Estudiante desde clase')
  };
  
  Borra(req, res){
    res.send('Borra Estudiante desde clase')
  };
  
  consultar(req, res){
    res.send('Consultar Estudiantes desde clase')
  };

  consultarUno(req, res){
    res.send('Consultar Estudiante desde clase')
  };


};

module.exports = new EstudianteController();