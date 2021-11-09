const express = require('express');
const router = express.Router();
const controller = require('../controllers/estudioController');

//rota leitura - read - get - find()
router.get('/all', controller.getAllStudio);

//rota leitura - read - get - find(id)
router.get('/:id', controller.getById);

//rota criação - create - post - save()
router.post('/create', controller.createStudio);

//rota atualização -  update - PATCH 
router.patch('/:id', controller.updateStudio);

//rota de deledar DELETE - remove()
router.delete('/:id', controller.deleteStudio);

module.exports = router;

