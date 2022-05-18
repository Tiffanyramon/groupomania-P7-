const express = require('express');
const router = express.Router();
//route création article
const user = require('../middleware/user');
const multer = require('../middleware/multer-config');
const articlectrl = require('../controllers/article.js');

//route créa article
router.post('/', articlectrl.createArticle);

//route ensemble article
router.get('/' ,articlectrl.getAllArticle);

//route un article
router.get('/:id', articlectrl.getOneArticle);

//route modification article
router.put('/:id', articlectrl.modifyArticle);

//route suppression article
router.delete('/:id', articlectrl.deleteArticle);

//route aime ou non article
//router.post('/:id/like', user, articlectrl.likeNotArticle);*/

module.exports = router; 