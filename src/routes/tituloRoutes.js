const express = require('express');
const router = express.Router();
const controller = require('../controllers/tituloController');

router.post('/create', controller.createTitle);

router.get('/all', controller.getAllTitle);

router.get('/marvel', controller.showTitleMarvel);
router.get('/ghibli', controller.showTitleGhibli);
router.get('/pixar', controller.showTitlePixar);

router.get('/:id', controller.getById);

router.put('/:id', controller.updateTitle);

router.patch('/:id', controller.updateTitleSomething);

router.delete('/:id', controller.deleteTitle);

router.post('/:id/like', controller.like)
router.post('/:id/dislike', controller.dislike);

module.exports = router;