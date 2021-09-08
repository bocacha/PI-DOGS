const { DataTypes } = require('sequelize');
const D = DataTypes;
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
   sequelize.define('raza', {
    //agregado el id
    id:{
      type:D.UUID,
      defaultValue:D.UUIDV4,
      allowNull:false,
      primaryKey:true
    },
    name: {
      type: D.STRING,
      allowNull: false,
    },
    weight: {
      type: D.STRING,
      allowNull: false
    },    
    height: {
      type: D.STRING,
      allowNull: false
    },   
    life: {
      type: D.STRING,
      allowNull: false
    },
    // temperament:{
    //    type: D.STRING,
    //    allowNull: false
    //  },
    image: {
      type: D.STRING,
      allowNull: false
    },
    createdInDb:{
      type:D.BOOLEAN,
      allowNull: false,
      defaultValue:true,
    }
  });
}