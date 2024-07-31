const { json } = require('express');
const db = require('../database/conexion');
class EstudianteController{
  constructor(){};

  insertar(req, res){
    const {dni, nombre, apellido, email} = req.body;
    try {
      db.query('INSERT INTO estudiantes(id, dni, nombre, apellido, email) VALUES (NULL, ?, ?, ?, ?)', [dni, nombre, apellido, email], (err, rows) => {
        if (err) {
          res.status(400)
        } else {
          res.status(200).json({id:rows.insertId, info:'estudiante agregado'});
        }
      })
    } catch (err) {
      res.status(500).send(err.message);
    }
  };
  
  modifica(req, res){
    const {id}=req.params;
    const {dni, nombre, apellido, email}=req.body;
    try {
      db.query('UPDATE estudiantes SET dni=?, nombre=?, apellido=?, email=? WHERE id=?', [dni, nombre, apellido, email, id], (err, rows) => {
        if (err) {
          res.status(400)
        } else {
          if (rows.affectedRows===1) {
            res.status(200).json({resultado:'estudiante actualizado'});
          }
        }
      })
    } catch (err) {
      res.status(500).send(err.message);
    }
  };
  
  Borra(req, res){
    const {id} = req.params;
    try {
      db.query('DELETE FROM estudiantes WHERE id = ?', [id], (err, rows) => {
        if (err) {
          res.status(400)
        } else {
          if (rows.affectedRows===1) {
            res.status(200).json({resultado:'estudiante borrado'});
          }
        }
      })
    } catch (err) {
      res.status(500).send(err.message);
    }
  };
  
  consultar(req, res){
    try {
      db.query('SELECT * FROM estudiantes', (err, rows) => {
        if (err) {
          res.status(400)
        } else {
          res.status(200).json(rows);
        }
      })
    } catch (err) {
      res.status(500).send(err.message);
    }
  };

  consultarUno(req, res){
    const {id} = req.params;
    try {
      db.query('SELECT * FROM estudiantes WHERE id = ?', [id], (err, rows) => {
        if (err) {
          res.status(400)
        } else {
          res.status(200).json(rows);
        }
      })
    } catch (err) {
      res.status(500).send(err.message);
    }
  };
};

module.exports = new EstudianteController();