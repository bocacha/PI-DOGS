const { Router } = require('express');
const { Dogs,Temperamentos } = require('../db.js');
const fetch = require("node-fetch");
const {API_KEY}=process.env;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const DogsRoutes = require('./dogsRouter')
// const RazesRoutes = require('./razesRouter')

const router = Router();
//id UUID?
var id=0;

router.post('/dogs', async (req, res)=>{
    const{name,weight,height,life,temperament,image}=req.body;
    try{
        let newDog = await Dogs.create({
            //id: id++,
            name,weight,height,life,temperament,image
        })
        res.json(newDog);
    await newDog.setTemperamentos(nameT)
    }catch(error){
        res.status(500).send(error);
    }
});

router.get('/dogs', async (req, res,next)=>{
    let {name} = req.query;
    if(name){
        fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
        .then(response => response.json())
        .then( async json => {
            let dog = await Dogs.findAll({
                include:[{
                    model: Temperamentos,
                    required: true
                }]
            });
            dog.forEach(data =>{
                if(data.dataValues.name.includes(name)) {
                    let temperament = data.dataValues.temperamentos.map(temp => {
                    return temp.dataValues.nameT;
                    })
                    data.dataValues.temperamentos = temperament[0];
                    json.push(data.dataValues) 
                }
            });
            if(json.length > 0){
                let dogFinded =[];
                for(let i = 0; i < json.length;i++){
                    let raza1={
                        id: json[i].id,
                        name: json[i].name,
                        img:`https://cdn2.thedogapi.com/images/${json[i].reference_image_id}.jpg` ||
                        "https://mudfeed.com/wp-content/uploads/2021/05/Dogecoin-2-1200x640.jpg",
                        temperament: json[i].temperament || json[i].temperamentos
                    }
                    dogFinded.push(raza1);
                }
                res.json(dogFinded);
            }
        })
    }else{
        fetch(`https://api.thedogapi.com/v1/breeds/?api_key=${API_KEY}`)
        .then(data => data.json())
        .then(async json => {
            //let razasCr = await Razas.findAll({
            let razasCr = await Dogs.findAll({
                include: Temperamentos
            });
            razasCr.forEach(dato => {
                let temperament = dato.dataValues.temperamentos.map(temp => {
                    return temp.dataValues.nameT;
                })
                dato.dataValues.temperamentos = temperament[0];
                    json.push(dato.dataValues)
            });
    
            let raza2 = json.map(data => {
                return {
                    id: data.id,
                    img: data.image && data.image.url || "https://mudfeed.com/wp-content/uploads/2021/05/Dogecoin-2-1200x640.jpg",
                    name: data.name,
                    temperament: data.temperament || data.temperamentos
                }
            });
    
            raza2.sort((a,b) => (a.name>b.name)? 1 : -1)
            res.json(raza2)
        });
    }
    
});

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.use('/dogs', DogsRoutes);
// router.use('/razes', RazesRoutes);

router.get('/dogs/:idRaza', async function (req, res) {
    
    var { idRaza } = req.params;
    fetch(`https://api.thedogapi.com/v1/breeds/?api_key=${API_KEY}`)
    .then(data => data.json())
    .then(async json => {
    let raza = json.find(dato => dato.id === parseInt(idRaza));
    if (raza) {
        return res.json({
            img: raza.image && raza.image.url || "https://mudfeed.com/wp-content/uploads/2021/05/Dogecoin-2-1200x640.jpg",
                name: raza.name || 'No Encontrado',
                temperament: raza.temperament || raza.temperamentos || 'No Encontrado',
                weight: raza.weight.metric || 'No Encontrado',
                height: raza.height.metric || 'No Encontrado',
                life: raza.life_span || 'No Encontrado',
                //life_span: raza.life_span || 'No Encontrado',
                })
            } else { 
            let razaC = await Razas.findAll({
                include: [{
                        model: Temperamentos,
                        required: true
                    }]
            });
        
            // console.log(userBreeds)
            let creadaR = razaC.find(dato => dato.dataValues.id === parseInt(idRaza));
            if (creadaR) {
                return res.json({
                    img: creadaR.dataValues.img || "https://mudfeed.com/wp-content/uploads/2021/05/Dogecoin-2-1200x640.jpg",
                    name: creadaR.dataValues.name || 'No Encontrado',
                    temperament: creadaR.dataValues.temperamentos[0].nameT || 'No Encontrado',
                    weight: creadaR.dataValues.weight || 'No Encontrado',
                    height: creadaR.dataValues.height || 'No Encontrado',
                    life_span: creadaR.dataValues.life_span || 'No Encontrado',
                })
            };
            return res.status(404).json({message: "No Encontrado"})
        } 
    }).catch(err => { 
        console.error(err)
        return
    });
});

let temp = [];
fetch(`https://api.thedogapi.com/v1/breeds/?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
        json?.forEach(b => {
            let temps = b.temperament?.split(', '); 
            temps?.forEach(t => {
                if (!temp.find(tp => tp.name === t)) {
                    temp.push({ name: t });
                    //console.log(temp)
                }
            });
        })
    })
    .then(() => {
        temp.forEach(t => {
            Temperamentos.findOrCreate({
                where: {
                    nameT: t.name
                }
            })
        })
    })
    .catch(err => console.error(err));


router.get('/temperament', async function(req, res){
    
    await Temperamentos.findAll()
    .then(result => res.json(result))
})

module.exports = router;
