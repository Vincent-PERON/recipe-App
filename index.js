// Création et configuration du serveur HTTP avec express
const express = require('express');

// File upload
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express();
require('dotenv').config();
const path = require('path');
const router = require('./app/routers');

//
app.use(express.urlencoded({ extended: true }));

// Configuration du moteur de templates EJS
app.set('view engine', 'ejs');
app.set('views', './app/views');

// On déclare le dossier statique que l'on envoit au navigateur
app.use(express.static(path.join(__dirname, './public')));

// On affiche une page de test
// app.get('/', (request, response) => {
//     response.send('Hello World!')
//         });
// Nos Routes
app.use(router);

// On met le serveur en mode écoute
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
