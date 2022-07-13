const express = require('express');
const router = express.Router();
const {
  getTiposEmpresa,
  createEmpresa,
  getEmpresaPorNombre,
  updateEmpresa,
  deleteEmpresa
} = require('../controllers/empresas-controllers');

router.get('/', getTiposEmpresa);
router.post('/', createEmpresa);
router.get('/:nombre', getEmpresaPorNombre);
router.put('/', updateEmpresa);
router.delete('/:id', deleteEmpresa);

module.exports = router;