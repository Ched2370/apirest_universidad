const { json } = require('express');
const db = require('../database/conexion');
class CursoController{
  constructor(){};

  insertar(req, res){
    const {nombre, description} = req.body;
    try {
      db.query(`INSERT INTO cursos(id, nombre, description) 
        VALUES (NULL, ?, ?)`, [nombre, description], (err, rows) => {
        if (err) {
          res.status(400)
        } else {
          res.status(200).json({id:rows.insertId, info:'curso agregado'});
        }
      })
    } catch (err) {
      res.status(500).send(err.message);
    }
  };
  
  modifica(req, res){
    const {id}=req.params;
    const {nombre, description, profesor_id}=req.body;
    try {
      db.query('UPDATE cursos SET nombre=?, description=?, profesor_id=? WHERE id=?', [nombre, description, profesor_id, id], (err, rows) => {
        if (err) {
          res.status(400)
        } else {
          if (rows.affectedRows===1) {
            res.status(200).json({resultado:'curso actualizado'});
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
      db.query('DELETE FROM cursos WHERE id = ?', [id], (err, rows) => {
        if (err) {
          res.status(400)
        } else {
          if (rows.affectedRows===1) {
            res.status(200).json({resultado:'curso borrado'});
          }
        }
      })
    } catch (err) {
      res.status(500).send(err.message);
    }
  };
  
  consultar(req, res){
    try {
      db.query('SELECT * FROM cursos', (err, rows) => {
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
      db.query('SELECT * FROM cursos WHERE id = ?', [id], (err, rows) => {
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

module.exports = new CursoController();