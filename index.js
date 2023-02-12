const express = require('express');
const app = express();
require('dotenv').config();


//
app.use(express.urlencoded({ extended: true }));




const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
