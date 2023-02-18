const { Category, Level, Recipe } = require('../models');
const { Op } = require("sequelize");

const recipeController = {

// recipesList
index: async (req, res) => {
    try {
        // How many recipes should be show on homepage
        const showCount = 10
        
        const levels = await Level.findAll();
        const categories = await Category.findAll();
        const recipes = await Recipe.findAll({ 
            limit: showCount, 
            order: [ [ 'created_at', 'DESC' ]] 
        });
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
showRecipe: async (req, res) => {
    try {
        // on récupère l'id de la route paramétrée
        const id = req.params.id;
    
        const recipe = await Recipe.findByPk(id, {
            include: [
                'category',   // Une recette a une categorie
                'level',     // Une recette a un niveau de difficulté
            ]
        });
        res.render('recipe', {
            recipe,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
},

// submitRecipe
submitRecipe: async (req, res) => {
    try {
        const levels = await Level.findAll();
        const categories = await Category.findAll();
        res.render('submitRecipe', {
            categories, 
            levels 
        });
    } catch (error) {
        res.status(500).send('Server Error');
    }
},

// addRecipeInDb
addRecipeInDb: async (req, res) => {
    const recipePicture = req.file.filename
    try {
        // On récupère les données du formulaire
        const  { title, instructions, ingredients, category, level } = req.body;
        
        // on créé un objet "recette" avec les données du formulaire
        await Recipe.create({
            title: title,
            ingredients: ingredients,
            instructions: instructions,
            picture: recipePicture,
            category_id: category,
            level_id: level,
        });
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
},


// searchRecipe
searchRecipe: async (req, res) => {
    try {
        const searchTerm = req.body.searchTerm;
        const searchRecipe = await Recipe.findAll({
            where: {
                title: {
                    [Op.iLike]: `%${searchTerm}%`
                }
            }
    });
        res.render('searchRecipe', {
            searchRecipe 
        });
        console.log(recipes);
    } catch (error) {
        res.status(500).send('Server Error');
    }
},

};

module.exports = recipeController;

