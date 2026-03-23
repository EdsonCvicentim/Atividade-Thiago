const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/user.controller');

router.get('/', usuarioController.listar);

router.post('/', usuarioController.criar);

router.get('/:id', usuarioController.buscarPorId);

router.delete('/:id', usuarioController.remover);

module.exports = router;