const connection = require('../models/connection');

const getTiposEmpresa = async (req, res) => {
  connection.query("SELECT * FROM tipoEmpresa", (error, result, fields) => {
    if(error) throw error;
    res.send(result);
  })
}

module.exports = {
  getTiposEmpresa
}