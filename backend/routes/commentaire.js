const express = require('express');
const router = express.Router();


const user = require('../middleware/user');
multer = require('../middleware/multer-config');
const commentairectrl = require('../controllers/commentaire');

// route créa commentaire
router.post('/', user, multer, commentairectrl.createCommentaire);

//route emsemble commentaire
router.get('/', commentairectrl.getAllCommentaire);

//route un commentaire
router.get('/:id', commentairectrl.getOneCommentaire);

//route modification commentaire
router.put('/:id', user, multer,commentairectrl.modifyCommentaire);

//route aime ou non commentaire 
//router.post('/:id/like', user, commentairectrl.likeNotCommentaire);

//suppression commentaire
router.delete('/:id', user, commentairectrl.deleteCommentaire);

module.exports = router