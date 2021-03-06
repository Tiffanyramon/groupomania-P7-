
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const result = dotenv.config();
const db = require('../database/db.js');

//enregistrer un utilisateur 
exports.signUp = (req, res, next) => {
    const email = req.body.email
    const password = req.body.password 
    bcrypt.hash(req.body.password, 10)
    .then(hash =>{ 
        db.query("insert into user set  nom =?, prenom =?, email =?, password= ?",[email,hash],function (err, result){
            if (err) {
                console.log(err)
                return res.status (400).json ({error:'creation de compte impossible'})
                }
               return res.status(201).json( { message: 'utilisateur crée'})

        })
    })
    .catch(error =>{
        console.log(error)
        return res.status(500).json ({error:'problème hash'})
    })
   
   };


//s'identifier 
exports.login =(req, res, next) => {
    
    const email = req.body.email
    db.query("select * from user where email=?", [email], function (err, result){
        if (err||!result.length) {
            
            return res.status(401).json({ error: 'Utilisateur non trouvé'}) 
        }
         
        
        bcrypt.compare(req.body.password, result[0].password) // comparateur de mdp 
        .then(valid => {
            if(!valid){
                return res.status(401).json({ error: 'Mot de passe incorret'}); // mauvais mdp 
            }
            // Si bon token identique et session ouverte
            res.status(200).json({
                userId: result[0].id, 
                token: jwt.sign(
                    { userId: result[0].id},
                    process.env.JWT_SECRET, 
                )
            });
        })
       
     })
   
    };

    //obtenir les users
exports.getAllUser = (req, res, next) => {
    db.query(" select * from user", function(err,result){
      if(err){
        console.log(err)
        return res.status(400).json({ error:"impossible d'avoir les utilisateurs"})
      }
      return res.status(200).json({ articles: result})
    })
  };
  
  // obtenir un user 
  exports.getOneUser = (req, res, next) => {
      const id = req.params.id
   db.query("select * from user where id = ?", [id],function(err,result){
    if(err){
      console.log(err)
      return res.status(400).json({ error:"impossible d'avoir l'utilisateur'"})
    }
    return res.status(200).json({ article: result[0]})
      })
  };
  
  //modifier un user
  exports.modifyUser = (req, res, next) => {
      const message = req.body.message 
      const imageurl = req.body.imageurl
      const id = req.params.id
      db.query("update article set nom= ?, prenom= ? ,password= ? where id=?", [ nom, prenom, id ],function(err,result){
          if(err){
            console.log(err)
            return res.status(400).json({ error:"impossible de mettre à jour le profil"})
          }
          return res.status(200).json({message: "profil mis à jour"})
         
        })
    };
  
    //supprimer user
    exports.deleteUser = (req, res, next) => {
   const id = req.params.id 
    db.query("DELETE FROM user where`id` = ? ", [id],function (err, result){
      if(err){
        console.log(err)
        return res.status(400).json({ error:"impossible de supprimer l'utilisateur'"})
      }
      return res.status(201).json({message: "utilisateur supprime"})
    })
  };

