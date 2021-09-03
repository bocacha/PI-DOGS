const { DataTypes } = require('sequelize');
const D = DataTypes;
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  
  sequelize.define('temperamento', {

    name : {
      type : D.STRING,
      allowNull: false,
    }
  })
  
};