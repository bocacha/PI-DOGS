const  { Router } = require('express');
const { v4:uuidv4 } = require('uuid');
const {dog} =require('../models/Dog.js');

const router = Router();


router.get('/', (req,res,next) =>{
    console.log('dog es:' + dog);
     dog.findAll().then((dog) => res.send(dog))
    .catch((error) =>next (error));
    //res.send('Soy la ruta DOGS');
});

router.get('/:id',(req,res) =>{
    const id = req.params.id;
    return Dog.findByPk(id)
        .then((dog) => res.send(dog))
        .catch((error) => next (error));
});

router.post('/', (req,res) =>{
    const dog = req.body
    return Dog.create(dog)
    .then ((dog) => res.send(dog))
    .catch((error) => next (error));
})

module.exports = router;