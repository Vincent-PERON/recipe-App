DROP TABLE IF EXISTS "categories", "recipes", "levels", "roles", "users";

CREATE TABLE "categories" (
    "id"         INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name"       TEXT NOT NULL,
    "slug"       TEXT NOT NULL,
    "picture"       TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "levels" (
    "id"         INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name"       TEXT NOT NULL,
    "slug"       TEXT NOT NULL,
    "picture"    TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "roles" (
    "id"         INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name"       TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "users" (
    "id"         INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name"       TEXT,
    "email"      TEXT NOT NULL,
    "password"   TEXT NOT NULL,
    "role_id"    INTEGER REFERENCES roles("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "recipes" (
    "id"              INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title"           TEXT NOT NULL,
    "ingredients"     varchar[] NOT NULL,
    "instructions"    TEXT NOT NULL,
    "picture"         TEXT NOT NULL,
    "category_id"     INTEGER REFERENCES categories("id"),
    "level_id"        INTEGER REFERENCES levels("id"),
    "created_at"      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at"      TIMESTAMPTZ
);

-- Data for Categories;
INSERT INTO "categories" ("name", "slug", "picture" )
VALUES 
('Américain', 'americain', 'american-food.jpg'),
('Chinois', 'chinois', 'chinese-food.jpg'),
('Indien', 'indien', 'indian-food.jpg'),
('Mexicain', 'mexicain', 'mexican-food.jpg'),
('Espagnol', 'espagnol', 'spanish-food.jpg'),
('Thaï', 'thai', 'thai-food.jpg'),
('Français', 'francais', 'french-food.jpg');

-- Data for Levels;
INSERT INTO "levels" ("name", "slug", "picture" )
VALUES 
('Très facile', 'tres-facile', 'very-easy.jpg'),
('Facile', 'facile', 'easy.jpg'),
('Moyen', 'moyen', 'moyen.jpg'),
('Expert', 'expert', 'expert.jpg');


-- Data for Roles;
INSERT INTO "roles" ("name")
VALUES ('user'),('admin');

-- Data for Recipes;


INSERT INTO recipes (title, ingredients, instructions, picture, category_id, level_id)
VALUES (
'Poulet au coco et curry',
'{
    "gingembre en boite (1 c. à café)",
    "300g de lait de coco",
    "2 c. à soupe de curry",
    "2 oignons jaunes",
    "4 escaloppes de poulet",
    "1 nois de coco"
}',
'Pour 4 personnes\n        
ÉTAPE 1: Faire dorer les oignons dans de l''huile d''olive à feu moyen, jusqu''à ce qu''ils soit transparents.\n
ÉTAPE 2:Ajouter la moitié du curry, puis faites dorer les escalopes en remuant de temps en temps. Saler et poivrer.\n 
ÉTAPE 3:Baisser le feu, et ajouter le gimgembre, puis couvrir de lait de coco, ajouter le reste du curry, et les copeaux de coco, et les champignons si souhaité.\n        
ÉTAPE 4:Laisser mijoter environ 30 mn. Servir chaud accompagné de riz thaï. bon appétit!',
'chinese-steak-tofu-stew.jpg',
7,1 );

INSERT INTO recipes (title, ingredients, instructions, picture, category_id, level_id)
VALUES (
'Pâte à crêpe bretonne',
'{
    "500g Farine de blé noir",
    "1l Eau",
    "0,5l Lait",
    "1 Oeuf",
    "1cuil. à café Gros sel"
}',
'Pour 4 personnes\n        
ÉTAPE 1: Versez la farine de blé noir dans un saladier, et formez un puits au centre. Cassez-y l’œuf, et versez-y le lait et le sel. Mélangez doucement au centre avec une spatule, en incorporant progressivement la farine sur les côtés, jusqu’à obtenir une pâte épaisse homogène.\n
ÉTAPE 2:Versez progressivement l’eau sur cette préparation, et mélangez pour obtenir une pâte lisse. Couvrez le saladier d’un linge et laissez reposer au moins 30 min au réfrigérateur.\n 
ÉTAPE 3:Beurrez une poêle anti-adhésive et placez-la sur feu vif. Lorsqu’elle est bien chaude, versez une louche de pâte à crêpe et répartissez-la sur toute la surface en bougeant la poêle. Lorsque les bords commencent à se détacher de la poêle, passez une spatule sous la crêpe et retournez-la. Laissez encore cuire 2 à 3 minutes puis réservez entre 2 assiettes.\n',
'chinese-steak-tofu-stew.jpg',
7,2 );

