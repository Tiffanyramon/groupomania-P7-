const express = require('express');
const router = express.Router();
const userctrl = require('../controllers/user');
const password = require ('../middleware/password');

//route créa compte 
router.post('/signup', password,userctrl.signUp);

//route identification
router.post('/login', userctrl.login);

//route modification user
//router.put('/:id', userctrl.editUser);

//route ensemble user
//router.get('/', usercrtl.getAllUser);

//route affichage connexion user
//router.get('/:id', userctrl.getOnUser);

//route suppression user
///router.delete('/:id', userctrl.deleteUser);

module.exports = router; 