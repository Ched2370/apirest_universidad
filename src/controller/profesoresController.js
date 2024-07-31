const { json } = require('express');
const db = require('../database/conexion');
class ProfesorController{
  constructor(){};

  insertar(req, res){
    const {dni, nombre, apellido, email, profesion, telefono} = req.body;
    try {
      db.query(`INSERT INTO profesores(id, dni, nombre, apellido, email, profesion, telefono) 
        VALUES (NULL, ?, ?, ?, ?, ?, ?)`, [dni, nombre, apellido, email, profesion, telefono], (err, rows) => {
        if (err) {
          res.status(400)
        } else {
          res.status(200).json({id:rows.insertId, info:'profesor agregado'});
        }
      })
    } catch (err) {
      res.status(500).send(err.message);
    }
  };
  
  modifica(req, res){
    const {id}=req.params;
    const {dni, nombre, apellido, email, profesion, telefono}=req.body;
    try {
      db.query(`UPDATE profesores 
        SET dni=?, nombre=?, apellido=?, email=?, profesion=?, telefono=? WHERE id=?`, [dni, nombre, apellido, email, profesion, telefono, id], (err, rows) => {
        if (err) {
          res.status(400)
        } else {
          if (rows.affectedRows===1) {
            res.status(200).json({resultado:'profesor actualizado'});
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
      db.query('DELETE FROM profesores WHERE id = ?', [id], (err, rows) => {
        if (err) {
          res.status(400)
        } else {
          if (rows.affectedRows===1) {
            res.status(200).json({resultado:'profesor borrado'});
          }
        }
      })
    } catch (err) {
      res.status(500).send(err.message);
    }
  };
  
  consultar(req, res){
    try {
      db.query('SELECT * FROM profesores', (err, rows) => {
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
      db.query('SELECT * FROM profesores WHERE id = ?', [id], (err, rows) => {
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

module.exports = new ProfesorController();