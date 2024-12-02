const express = require('express');
const router = express.Router();
const users = require('../users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Registro', { title: 'Registro', user: req.session.user});
});

router.post('/', function(req, res, next){

   console.log("dgsfg");


    let user = req.body.user1;
    let contra1 = req.body.contra1;
    let contra2 = req.body.contra2;

    console.log(user, contra1, contra2);


    if(contra2 == contra1){
        if(contra2.length == 8){
            users.register(user, contra1, function(){
                req.session.message = "Te has registrado!"
                res.redirect("/login");
                console.log('User admin successfully registered');
            });
        }else{
            req.session.error = "La contraseña tiene que tener 8 caracteres";
            res.redirect("/registro");
        }

    }else{
        req.session.error = "Las contraseñas no coinciden";
        res.redirect("/registro");
    }
});

module.exports = router;
