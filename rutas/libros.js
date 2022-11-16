const { Router } = require('express');
const router = Router();
const LIBROS = require('./../lista-libros');
const tablaLibro = require('./../basedatos/libro-bd');

//get
router.get('/', async (peti, resp) => {
    try {
        const autorizacion = peti.headers.autorizacion;
        console.log(autorizacion);
        const listaLibro = await tablaLibro.select();
        resp.json(listaLibro);
    } catch (err) {
        resp.status(500).send(err.message);
    }

});

//post
router.post('/', async (peti, resp) => {
    try {
        const libroRecibido = peti.body;
        console.log(libroRecibido);
        await tablaLibro.insert(libroRecibido);
        resp.sendStatus(200);
    } catch (err) {
        resp.status(500).send(err.message);
    }
});

//put
router.put('/', async (peti, resp) => {
    try {
        let libroRecibido = peti.body;
        console.log(libroRecibido);
        await tablaLibro.update(libroRecibido);
        resp.sendStatus(200);
    } catch (err) {
        resp.status(500).send(err.message);
    }

});

//delete
router.delete('/:id', async (peti, resp) => {
    try {
        let idRecibido = peti.params.id;
        console.log(idRecibido);
        await tablaLibro.eliminar(idRecibido);
        resp.sendStatus(200);
    } catch (err) {
        resp.status(500).send(err.message);
    }
});

module.exports = router;