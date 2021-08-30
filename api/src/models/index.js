// require('dotenv').config();
// const { Sequelize } = require('sequelize');
// const fs = require('fs');
// const path = require('path');
// const {
//   DB_USER, DB_PASSWORD, DB_HOST,
// } = process.env;

// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogs`, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// });
// const basename = path.basename(__filename);

// const modelDefiners = [];

// // Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
// fs.readdirSync(path.join(__dirname, '/models'))



//hasta aca prueba
const { DataTypes } = require('sequelize');
const D = DataTypes;
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
   sequelize.define('dogs', {
    
    name: {
      type: D.STRING,
      allowNull: false,
    },
    weight: {
      type: D.INTEGER,
      allowNull: false
    },    
    height: {
      type: D.INTEGER,
      allowNull: false
    },   
    life: {
      type: D.INTEGER,
      allowNull: false
    },
    // temperament:{
    //   type: D.STRING,
    //   allowNull: false
    // },
    image: {
      type: D.STRING,
      allowNull: false
    }

  });
  sequelize.define('temperamentos', {

    nameT : {
      type : DataTypes.STRING
    }
  })
};
