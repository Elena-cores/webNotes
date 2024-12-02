const express = require('express');
const router = express.Router();
const users = require('../models/users');  // Aquí importamos el módulo que gestiona los usuarios

// Middleware para comprobar si el usuario es admin
function isAdmin(req, res, next) {
    if (req.session.user && req.session.user.role === 'admin') {
        next();
    } else {
        res.redirect('/');
    }
}

// GET /admin - Renderiza el panel de administración solo si es admin
router.get('/', isAdmin, (req, res) => {
    users.getAllUsers((err, userList) => {
        if (err) {
            req.session.error = "Error al obtener usuarios";
            res.redirect('/');
        } else {
            res.render('admin', { users: userList });
        }
    });
});

// POST /admin/deleteUser - Elimina un usuario si es admin
router.post('/deleteUser', isAdmin, (req, res) => {
    const usernameToDelete = req.body.username;
    users.deleteUser(usernameToDelete, (err) => {
        if (err) {
            req.session.error = "Error al eliminar usuario";
        } else {
            req.session.message = `Usuario ${usernameToDelete} eliminado`;
        }
        res.redirect('/admin');
    });
});

module.exports = router;
