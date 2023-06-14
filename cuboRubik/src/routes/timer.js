const express = require('express');
const timerController = require('../controllers/timerController');

const router = express.Router();

router.get('/timer', timerController.timer)
router.get('/estadisticas', timerController.estadisticas);
router.get('/perfil',timerController.perfil);
router.get('/conf',timerController.ajustes);

module.exports = router;