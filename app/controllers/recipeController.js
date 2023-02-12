const { Category, Level, Recipe } = require('../models');

const recipeController = {


// recipesList
index: async (req, res) => {
    try {
        const levels = await Level.findAll();
        const categories = await Category.findAll();
        const recipes = await Recipe.findAll();

        res.render('index', { 
            categories,
            levels,
            recipes
        });

    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
},

// category

// level

// showRecipe

// submitRecipe

// addRecipeInDb

// searchRecipe


};

module.exports = recipeController;