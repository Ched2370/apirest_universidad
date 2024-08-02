require('dotenv').config(); // para versiones de node anteriores a la 20
const mysql = require('mysql2');
const db = mysql.createConnection({
  host: process.env.DB_URL,
  user:  process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
});

db.connect((err) => {
  if(err){
    throw err;
  }else {
    console.log('conexion exitosa.');
  }
});

module.exports = db;