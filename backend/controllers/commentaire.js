const db = require('../database/db.js');

//création commentaire
exports.createCommentaire = (req, res, next) => {
    const message = req.body.message
    const imageurl = req.body.imageurl
  db.query("insert into commentaire set message=?, imageurl=?",[ message, imageurl],function(err,result){
   commentaire.save()
   .then(() => res.status(201).json({message: 'new post'}))
   .catch( error => res.status(400).json ({ error }))
  })
};

//obtenir les commentaires
exports.getAllCommentaire = (req, res, next) => {
  db.query(" select * from commentaire", function(err,result){
   commentaire.find()
    .then(() => res.status(200).json(article))
    .catch( error => res.status(400).json ({ error}))
  })
};

// obtenir un commentaire 
exports.getOneCommentaire = (req, res, next) => {
    const id = req.params.id
 db.query("select * from commentaire where id = ?", [id],function(err,result){
      commentaire.findOne
      .then(() => res.status(200).json(article))
      .catch( error => res.status(400).json ({ error }))
    })

};

//modifier un commentaire
exports.modifyCommentaire = (req, res, next) => {
    const message = req.body.message 
    const imageurl = req.body.imageurl
    const id = req.params.id
    db.query("update commentaire set message= ?, imageurl= ?, where id=?", [ message, imageurl, id ],function(err,result){
      commentaire.updateOne
      .then(() => res.status(200).json({ message: 'modify comment'}))
      .cacth( error => res.status(400).json ({ error }))
    })
    
  };

  //supprimer commentaire
  exports.deleteCommentaire = (req, res, next) => {
 const id = req.params.id 
  db.query("DELETE FROM commentaire where`id` = ? ", [id],function (err, result){
  commentaire.deleteOne
  .then(() => res.status(200).json ({ message: ' Delete comment'}))
  .catch( error => res.status(400).json (( error )))
  })
};