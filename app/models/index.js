const Recipe = require('./Recipe');
const Category = require('./Category');  
const Level = require('./Level');
const User = require('./User');
const Role = require('./Role');

/* 
-------------- Level----------------
*/

// une recette a un niveau
Recipe.belongsTo(Level, {
    foreignKey: "level_id", 
    as: "level" // alias de l'association 
});

// réciproque : un niveau concerne plusieurs recettes
Level.hasMany(Recipe, {
    foreignKey: "level_id",
    as: "recipes"
});


/* 
-------------- Category----------------
*/

// une recette a une categorie
Recipe.belongsTo(Category, {
    foreignKey: "category_id",
    as: "category"
});

// réciproque : une categorie concerne plusieurs recettes
Category.hasMany(Recipe, {
    foreignKey: "category_id",
    as: "recipes"
});


/* 
-------------- Roles / Users ----------------
*/

// un user n'a qu'un rôle
User.belongsTo(Role, {
    foreignKey: 'role_id',
    as: 'role',
});

// réciproque : un role peut etre attribué à plusieurs users
Role.hasMany(User, {
    foreignKey: 'role_id',
    as: 'users',
});



module.exports = { Recipe, Category, Level, User, Role };