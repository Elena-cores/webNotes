const usersDB = [
    { username: 'admin', role: 'admin', password: 'password', last_login: '' },
    { username: 'ana', role: 'user', password: 'password', last_login: '' },
    // otros usuarios...
];

function getAllUsers(callback) {
    // Simulamos obtención de usuarios desde la base de datos
    callback(null, usersDB);
}

function deleteUser(username, callback) {
    const index = usersDB.findIndex(user => user.username === username);
    if (index !== -1) {
        usersDB.splice(index, 1);
        callback(null);
    } else {
        callback(new Error('Usuario no encontrado'));
    }
}

function updateUser(user, callback) {
    const index = usersDB.findIndex(u => u.username === user.username);
    if (index !== -1) {
        usersDB[index] = user;
        callback(null);
    } else {
        callback(new Error('Usuario no encontrado'));
    }
}

module.exports = {
    getAllUsers,
    deleteUser,
    updateUser,
    authenticate, // Asumimos que ya existe esta función para la autenticación de usuarios
    register
};
