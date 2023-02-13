const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Recipe extends Sequelize.Model {};

Recipe.init(
    {
        title: DataTypes.STRING,
        ingredients: DataTypes.TEXT,
        instructions: DataTypes.TEXT,
        picture: Sequelize.STRING,
        category_id: DataTypes.INTEGER,
        level_id: DataTypes.INTEGER,

},
{
  sequelize,
  tableName: "recipes"
});


module.exports = Recipe;