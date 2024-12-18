// // //chat abierto: server.js
// // const express = require("express");
// // const sqlite3 = require("sqlite3").verbose();
// // const app = express();

// // app.use(express.json());

// // // Conectar a la base de datos SQLite
// // const db = new sqlite3.Database("chat.db");

// // // Ruta para enviar un mensaje (guardar en la base de datos)
// // app.post("/enviar", (req, res) => {
// //     const { remitente, mensaje } = req.body;

// //     if (!remitente || !mensaje) {
// //         return res.status(400).send("Faltan remitente o mensaje.");
// //     }

// //     db.run(
// //         "INSERT INTO mensajes (remitente, mensaje) VALUES (?, ?)",
// //         [remitente, mensaje],
// //         function (err) {
// //             if (err) return res.status(500).send("Error al guardar el mensaje.");
// //             res.send("Mensaje enviado correctamente.");
// //         }
// //     );
// // });

// // // Ruta para obtener todos los mensajes
// // app.get("/mensajes", (req, res) => {
// //     db.all("SELECT * FROM mensajes ORDER BY fecha", [], (err, rows) => {
// //         if (err) return res.status(500).send("Error al obtener mensajes.");
// //         res.json(rows);
// //     });
// // });

// // // Servidor escuchando en el puerto 3000
// // app.listen(3000, () => console.log("Servidor en http://localhost:3000"));

// // //front end client: 
// // // function enviarMensaje() {
// //     const remitente = document.getElementById("remitente").value;
// //     const mensaje = document.getElementById("mensaje").value;

// //     fetch("/enviar", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ remitente, mensaje }),
// //     }).then(() => {
// //         cargarMensajes();
// //         document.getElementById("mensaje").value = "";
// //     });
// // }
// // function cargarMensajes() {
// //     fetch("/mensajes")
// //         .then((res) => res.json())
// //         .then((mensajes) => {
// //             const contenedor = document.getElementById("mensajes");
// //             contenedor.innerHTML = "";
// //             mensajes.forEach((m) => {
// //                 contenedor.innerHTML += `<p><strong>${m.remitente}:</strong> ${m.mensaje} <em>(${m.fecha})</em></p>`;
// //             });
// //         });
// // }
// // html:
// // <!DOCTYPE html>
// // <html lang="es">
// // <head>
// //     <meta charset="UTF-8">
// //     <title>Chat Abierto</title>
// // </head>
// // <body onload="cargarMensajes()">
// //     <h1>Chat Abierto</h1>
// //     <div id="mensajes" style="border: 1px solid #ccc; height: 300px; overflow-y: scroll;"></div>
// //     <input type="text" id="remitente" placeholder="Tu nombre">
// //     <input type="text" id="mensaje" placeholder="Escribe un mensaje">
// //     <button onclick="enviarMensaje()">Enviar</button>

// //     <script>
// //         function enviarMensaje() {
// //             const remitente = document.getElementById("remitente").value;
// //             const mensaje = document.getElementById("mensaje").value;

// //             fetch("/enviar", {
// //                 method: "POST",
// //                 headers: { "Content-Type": "application/json" },
// //                 body: JSON.stringify({ remitente, mensaje }),
// //             }).then(() => {
// //                 cargarMensajes();
// //                 document.getElementById("mensaje").value = "";
// //             });
// //         }

// //         function cargarMensajes() {
// //             fetch("/mensajes")
// //                 .then((res) => res.json())
// //                 .then((mensajes) => {
// //                     const contenedor = document.getElementById("mensajes");
// //                     contenedor.innerHTML = "";
// //                     mensajes.forEach((m) => {
// //                         contenedor.innerHTML += `<p><strong>${m.remitente}:</strong> ${m.mensaje} <em>(${m.fecha})</em></p>`;
// //                     });
// //                 });
// //         }
// //     </script>
// // </body>
// // </html>

// // // chat privado

// // const usuariosPermitidos = ["usuario1", "usuario2"];

// // function autenticar(req, res, next) {
// //     const usuario = req.body.usuario;
// //     if (usuariosPermitidos.includes(usuario)) {
// //         next(); // Permite el acceso
// //     } else {
// //         res.status(403).send("Acceso denegado");
// //     }
// // }
// // ServiceWorkerRegistration.js: 
// // const express = require("express");
// // const sqlite3 = require("sqlite3").verbose();
// // const app = express();

// // app.use(express.json());

// // const db = new sqlite3.Database("chat.db");

// // // Guardar mensaje en la base de datos
// // app.post("/enviar", (req, res) => {
// //     const { remitente, destinatario, mensaje } = req.body;

// //     db.run(
// //         "INSERT INTO mensajes (remitente, destinatario, mensaje) VALUES (?, ?, ?)",
// //         [remitente, destinatario, mensaje],
// //         function (err) {
// //             if (err) return res.status(500).send("Error al guardar el mensaje");
// //             res.send("Mensaje guardado correctamente");
// //         }
// //     );
// // });

// // // Obtener mensajes entre dos personas
// // app.get("/mensajes", (req, res) => {
// //     const { remitente, destinatario } = req.query;

// //     db.all(
// //         "SELECT * FROM mensajes WHERE (remitente = ? AND destinatario = ?) OR (remitente = ? AND destinatario = ?) ORDER BY fecha",
// //         [remitente, destinatario, destinatario, remitente],
// //         (err, rows) => {
// //             if (err) return res.status(500).send("Error al obtener mensajes");
// //             res.json(rows);
// //         }
// //     );
// // });

// // app.listen(3000, () => console.log("Servidor en el puerto 3000"));

// // frontend: 
// // fetch("/enviar", {
// //     method: "POST",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify({
// //         remitente: "usuario1",
// //         destinatario: "usuario2",
// //         mensaje: "Hola, ¿cómo estás?"
// //     }),
// // });

// // fetch("/mensajes?remitente=usuario1&destinatario=usuario2")
// //     .then((res) => res.json())
// //     .then((data) => console.log("Mensajes:", data));



