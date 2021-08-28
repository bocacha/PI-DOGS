const  { Router } = require('express');

const router = Router();

router.get('/', (req,res,next) =>{
    //res.send('Soy la ruta RAZES');
    try{
        throw new Error('ERROR')
    }catch(error){
        next (error);
    }
});

module.exports = router;