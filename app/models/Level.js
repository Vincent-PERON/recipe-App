const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Level extends Sequelize.Model {}

Level.init(
  {
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    picture: DataTypes.STRING,
  },
  {
    sequelize,
    tableName: 'levels',
  }
);

module.exports = Level;
