

const express  = require('express');
const router   = express.Router();
const productosController = require('../controller/productosController');

// Identificacion de las rutas que se van a utilizar
router.get('/', productosController.getAllProductos);

router.get('/:id', (req, res) => {

    const productId = req.params.id;
    res.send(`Detalles del producto con ID: ${productId}`);

});


module.exports = router;