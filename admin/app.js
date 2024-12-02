// Importaciones necesarias
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');

// Rutas
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const adminRouter = require('./routes/admin');

const app = express();

// Configuración de la vista (EJS)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares globales
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de la sesión
app.use(session({
    secret: 'mi_secreto_seguro',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // En producción usa `secure: true` si estás sirviendo por HTTPS
}));

// Middlewares para incluir usuario en las vistas
app.use((req, res, next) => {
    res.locals.user = req.session.user; // Hace que `user` esté disponible en todas las vistas
    next();
});

// Rutas
app.use('/', indexRouter);          // Ruta principal (Home Page)
app.use('/login', loginRouter);     // Ruta de Login
app.use('/admin', adminRouter);     // Ruta de Panel de Administración

// Manejador de errores para rutas no encontradas (404)
app.use((req, res, next) => {
    res.status(404).render('404', { message: 'Página no encontrada' });
});

// Manejador de errores genéricos
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', { message: err.message, error: err });
});

// Levantar servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

module.exports = app;
