router.post('/', function(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    users.authenticate(username, password, (err, user) => {
        if (err || !user) {
            req.session.error = "Usuario o contraseña incorrectos";
            res.redirect('/login');
        } else {
            // Actualizamos el `last_login` a la fecha actual
            user.last_login = new Date().toISOString();
            users.updateUser(user, (err) => {
                if (err) {
                    req.session.error = "Error al actualizar el login";
                    res.redirect('/login');
                } else {
                    req.session.user = user;
                    res.redirect('/');
                }
            });
        }
    });
});
