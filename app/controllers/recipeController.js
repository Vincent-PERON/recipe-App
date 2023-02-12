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
category: async (req, res) => {
    try {
        // on récupère l'id de la route paramétrée
        const id = req.params.id;
        // on ajoute un include pour avoir accès à une propriété products sur l'objet category contenant les recettes dans un tableau 
        const category = await Category.findByPk(id, {
            include: 'recipes',
        });
        res.render('category', {
            category,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
},

// level
level: async (req, res) => {
    try {
        // on récupère l'id de la route paramétrée
        const id = req.params.id;
        // on ajoute un include pour avoir accès à une propriété products sur l'objet category contenant les recettes dans un tableau 
        const level = await Level.findByPk(id, {
            include: 'recipes',
        });
        res.render('level', {
            level,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
},
// showRecipe

// submitRecipe

// addRecipeInDb

// searchRecipe


};

module.exports = recipeController;