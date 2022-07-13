const connection = require('../models/connection');

const getTiposEmpresa = async (req, res) => {
  connection.query("SELECT * FROM tipoEmpresa", (error, result, fields) => {
    if(error) throw error;
    res.send(result);
  })
}

const createEmpresa = async (req, res) => {
  const { nombre, fechaConstitucion, comentarios, id_tipoEmpresa } = req.body;

  let sql = comentarios 
    ? `INSERT INTO empresa(nombre, fechaConstitucion, comentarios, id_tipoEmpresa) VALUES ('${nombre}', '${fechaConstitucion}', '${comentarios}', '${id_tipoEmpresa}')`
    : `INSERT INTO empresa(nombre, fechaConstitucion, id_tipoEmpresa) VALUES ('${nombre}', '${fechaConstitucion}', '${id_tipoEmpresa}')`;

  await connection.query(sql, (error, result) => {
    if(error) throw error;
    res.send('Se creo empresa');
  })
}

const getEmpresaPorNombre = async (req, res) => {
  const { nombre } = req.params;

  await connection.query(`SELECT * FROM empresa WHERE nombre regexp '^${nombre}'`, (error, result, fields) => {
    if(error) throw error;
    res.send(result);
  });
}

module.exports = {
  getTiposEmpresa,
  createEmpresa,
  getEmpresaPorNombre
}