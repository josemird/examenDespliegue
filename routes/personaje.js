var express = require('express');
var router = express.Router();
const Personaje = require('../models/personaje');

router.get('/', async (req, res) => {
  try {
    const personajes = await Personaje.find({}, 'id name gender image url cerated');
    console.log(personajes);
    res.render('personajes', {personajes});
  } catch (error) {
    res.status(500).send('Error al obtener la lista de personajes.');
  }
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const personajes = await Personaje.find({id:id}, 'id name gender image url cerated');
    console.log(personajes);
    res.render('personajes', {personajes});
  } catch (error) {
    res.status(500).send('Error al obtener la lista de personajes.');
  }
});

module.exports = router;