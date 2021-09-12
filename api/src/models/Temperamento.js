const { DataTypes } = require('sequelize');
const D = DataTypes;

module.exports = (sequelize) => {
  
  sequelize.define('temperamento', {

    name : {
      type : D.STRING,
      allowNull: false,
    }
  })
  
};