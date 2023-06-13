const express = require('express');
const LoginController = require('../controllers/LoginController');

const router = express.Router();

router.get('/login', LoginController.login);
router.get('/registro', LoginController.registro);
router.post('/registro', LoginController.alta);

module.exports = router;