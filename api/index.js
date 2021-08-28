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
const errorHandler = require('./src/utils/middlewares/errorHandler');
const setHeaders = require('./src/utils/middlewares/setHeaders');

const PORT = 3001;
//const {PORT} = require('./src/utils/config');
const routes = require('./src/routes/index');
// Syncing all the models at once.

 server.get('/', (req, res)=>{
   res.send('ARF! , ARF!');
 });

 server.use(setHeaders);
 server.use('/api', routes);
 server.use(errorHandler);
//https://api.thedogapi.com/v1/breeds?api_key={4fcbadf3-8a00-4d15-b2fa-fed2c2958b7b}

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    //console.log('%s listening at 3001'); // eslint-disable-line no-console
    console.log(`SERVER listening at port:${PORT}`);
  });
});
