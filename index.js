

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const productoRouter = require('./routes/productos');

const app     = express(); // Es la funcion que crea una aplicacion Express
const port    = 3001;
// Referencia a la conexion de la base de datos
const db      = new sqlite3.Database('./database.sqlite');




app.use('/api/productos', productoRouter);

// Definicion de ruta base '/'
app.get('/', (req, res) => {
    db.serialize( () => {
        // Se seleccionan todos los productos de tabla productos.
        db.all('SELECT * FROM productos', [], (err, rows) => {
            if(err) {
                rest.status(500).send(err.message);
            } else {
                // Si no existe algun error, que devuelva las filas.
                res.json(rows);
            }
        });
    });

});

// Escucha en el puerto 
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});






