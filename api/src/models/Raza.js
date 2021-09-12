const { DataTypes } = require('sequelize');
const D = DataTypes;

module.exports = (sequelize) => {
   sequelize.define('raza', {
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