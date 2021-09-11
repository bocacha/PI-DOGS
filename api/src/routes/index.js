const { Router } = require('express');
const { Raza,Temperamento } = require('../db.js');
const axios = require('axios');
const {API_KEY}=process.env;
require("dotenv").config();

const errorHandler = require('../utils/middlewares/errorHandler');
const setHeaders = require('../utils/middlewares/setHeaders');

const router = Router();
router.use(setHeaders);
//router.use('/api', routes);
router.use(errorHandler);

const getApiInfo = async () =>{
    const apiUrl = await axios.get('https://api.thedogapi.com/v1/breeds');
    const apiInfo = await apiUrl.data.map(el =>{
        return {
            id:el.id,
            name: el.name,
            weight: el.weight.metric,
            height: el.height.metric,
            life: el.life_span,
            image: el.image.url,
            temperaments:el.temperament,
        };
    });
    return apiInfo;
};

const getDBInfo = async () => {
    return await Raza.findAll({
       include:{
           model: Temperamento,
           attributes: ['name'],
           through:{
               attributes:[],
           },
       } 
    })
};

const getAllRazes = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDBInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
}

router.get('/razes', async (req, res) => {
    const {name} = req.query;
    //const name = req.query.name;
    let razesTotal = await getAllRazes();
    if(name){
        let razeName = await razesTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
        razeName.length ?
        res.status(200).send(razeName) : 
        res.status(404).send('Dog raze not found!');
    }else{
        res.status(200).send(razesTotal);
     }
});

router.get("/temperament", async (req, res) => {
  const temperamentApi = (await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  )).data
  let temperaments = temperamentApi.map((ob) => ob.temperament);
  temperaments = temperaments.join().split(',');
  temperaments = temperaments.map(t => t.trim());
  temperaments = temperaments.filter(t => t);
  temperaments = [...new Set(temperaments)].sort();
  // temperaments = await temperaments.split(regExp);
  temperaments.forEach((ob) => {
    Temperamento.findOrCreate({
      where: { name: ob },
    });
  });
  const allTemperaments = await Temperamento.findAll();
  res.send(allTemperaments);
});
// router.get("/temperament", async (req, res) => {
//     const temperamentApi = await axios.get(
//       `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
//     );
//     let temperaments = temperamentApi.data.map((ob) => ob.temperament).toString();
//     const regExp= /\s*,\s*/;
//     temperaments = await temperaments.split(regExp);
//     temperaments.forEach((ob) => {
//       Temperamento.findOrCreate({
//         where: { name: ob },
//       });
//     });
//     const allTemperaments = await Temperamento.findAll();
//     res.send(allTemperaments);
// });

router.post("/razes", async (req, res) => {
  let { name,weight,height,life,image,temperament,createdInDb,} = req.body
    
  try {
    let razeCreated = await Raza.create({name,weight,height,life,image,createdInDb,});     
    // const razeTemperaments = await Temperamento.findAll({
    //   were:{
    //     id:temperamentId
    //   }
    // })
    await razeCreated.addTemperamento(temperament)
    //console.log(razeTemperaments);
    //return res.status(201).json(razeCreated);
    res.send('Raze created!')
  } catch (error) {
    console.log(error)
    res.status(400).send(error);
  }
});



router.get('/razes/:id', async (req, res) =>{
    //const id = parseInt(req.params.id);
    const id = req.params.id;
    const razesTotal = await getAllRazes()
    if(id){
        let razeId = await razesTotal.filter(el => el.id ==id)
        razeId.length?
        res.status(200).json(razeId) :
        res.status(400).send('Raze not found');
    }
});



module.exports = router;