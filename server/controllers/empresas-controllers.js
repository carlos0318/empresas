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

const updateEmpresa = async (req, res) => {
  const { nombre, fechaConstitucion, comentarios, id_tipoEmpresa, id } = req.body;

  let sql = comentarios 
    ? `UPDATE empresa SET nombre = '${nombre}', fechaConstitucion = '${fechaConstitucion}', comentarios = '${comentarios}', id_tipoEmpresa = ${id_tipoEmpresa} WHERE id = ${id}`
    :`UPDATE empresa SET nombre = '${nombre}', fechaConstitucion = '${fechaConstitucion}', comentarios = ${comentarios}, id_tipoEmpresa = ${id_tipoEmpresa} WHERE id = ${id}`;

  connection.query(sql, (error, result) => {
    if(error) throw error;
    res.send('Se actualizo la empresa');
  })
}

const deleteEmpresa = async (req, res) => {
  const { id } = req.params;

  await connection.query(`DELETE FROM empresa WHERE id = ${id}`, (error, result) => {
    if(error) throw error;
    res.send('Se elimino la empresa');
  })
}

module.exports = {
  getTiposEmpresa,
  createEmpresa,
  getEmpresaPorNombre,
  updateEmpresa,
  deleteEmpresa
}