const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Category extends Sequelize.Model {}

Category.init(
  {
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    picture: DataTypes.STRING,
  },
  {
    sequelize,
    tableName: 'categories',
  }
);

module.exports = Category;
