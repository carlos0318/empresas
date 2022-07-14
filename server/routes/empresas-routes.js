const express = require('express');
const router = express.Router();
const {
  getTiposEmpresa,
  createEmpresa,
  getEmpresaPorNombre,
  updateEmpresa,
  deleteEmpresa,
  getEmpresas,
  getEmpresa
} = require('../controllers/empresas-controllers');

router.get('/', getEmpresas);
router.get('/tipos', getTiposEmpresa);
router.get('/empresa/:id', getEmpresa);
router.get('/:nombre', getEmpresaPorNombre);
router.post('/', createEmpresa);
router.put('/:id', updateEmpresa);
router.delete('/:id', deleteEmpresa);

module.exports = router;