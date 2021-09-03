//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
//const routes = require('./src/routes/index');
// const errorHandler = require('./src/utils/middlewares/errorHandler');
// const setHeaders = require('./src/utils/middlewares/setHeaders');

//const { conn } = require('./src/models/Index');
const PORT = 3001;
//const {PORT} = require('./src/utils/config');

// server.use(setHeaders);
// server.use('/api', routes);
// server.use(errorHandler);

// Syncing all the models at once.

// server.get('/', (req, res)=>{
//   res.send('ARF! , ARF!');
// });


//https://api.thedogapi.com/v1/breeds?api_key={4fcbadf3-8a00-4d15-b2fa-fed2c2958b7b}

conn.sync({ force: false }).then(() => { // borra la bd y la crea de nuevo
  console.log('Base de datos conectada!');
  server.listen(PORT, () => {
    console.log(`SERVER listening at port:${PORT}`);
  });
});
