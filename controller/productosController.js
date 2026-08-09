

const db = require('../db/dabase');


exports.getAllProductos = (req, res ) => {
    db.all('SELECT * FROM productos', [], (err, rows) => {
        if(err) {
            res.status(500).send('Error al obtener productos');
            return;
        }
        console.log('Resultados de la consulta');
        console.dir(rows, {depth: null});
        res.json(rows);

    }); 

}
