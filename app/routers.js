const express = require('express');
const router = express.Router();
// controllers
const recipeController = require('./controllers/recipeController');
const userController = require('./controllers/userController');
const adminController = require('./controllers/adminController');


// Page d'accueil
router.get('/', recipeController.recipesList);

// Affichage d'une catégorie et des recettes associées 
router.get('/category/:id', recipeController.category);

// Affichage d'un niveau et des recettes associés 
router.get('/level/:id', recipeController.level);

// Page de détail d'une recette
router.get('/recipe/:id', recipeController.recipe);

// Page d'ajout d'une recette
router.get('/submit-recipe', recipeController.submitRecipe);

// Ajout d'une recette 
router.post('/submit-recipe', recipeController.addRecipeInDb);

// Recherche d'une recette
router.post('/search', recipeController.searchRecipe);


module.exports = router;