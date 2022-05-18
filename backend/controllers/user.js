
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const result = dotenv.config();

//enregistrer un utilisateur 
exports.signUp = (req, res, next) => {
    //hash mdp
    bcrypt.hash(req.body.password, 10)
    .then(hash =>{
        const user = new User({
        email: req.body.email,
        password: hash,
        });
        user.save()
        .then(() => res.status(201).json( { message: 'utilisateur crée'}))
        .catch(error => res.status(400).json({ error}));
     })
     .catch(error => {
         console.log(error)
         res.status(500).json ({ error })
     });
};

//s'identifier 
exports.login =(req, res, next) => {
    
    User.findOne({email:req.body.email}) 
    .then(user => {
        if (!user) {
            return res.status(401).json({ error: 'Utilisateur non trouvé'}); // mauvais email
        }
        bcrypt.compare(req.body.password, user.password) // comparateur de mdp 
        .then(valid => {
            if(!valid){
                return res.status(401).json({ error: 'Mot de passe incorret'}); // mauvais mdp 
            }
            // Si bon token identique et session ouverte pendant 24H 
            res.status(200).json({
                userId: user._id, 
                token: jwt.sign(
                    { userId: user._id},
                    process.env.JWT_SECRET, 
                    { expiresIn: '24h'}
                )
            });
        })
        .catch(error => res.status(500).json({ error }));
     })
     .catch(error => res.status(500).json({ error }));

};
