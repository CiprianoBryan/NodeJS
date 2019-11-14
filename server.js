const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');
const router = require('./network/routes');

db.connect('mongodb+srv://admin:admin@platzi-kpj7c.mongodb.net/test?retryWrites=true&w=majority');

let app = express();
app.use(bodyParser.json());
router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');