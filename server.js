const express = require('express');
const bodyParser = require('body-parser');
const response = require('./network/response');

const router = express.Router();

let app = express();
app.use(bodyParser.json());
app.use(router);

router.get('/message', (req, res) => {
    if (req.query.erro == 'OK') {
        response.error(req, res, 'Error simulado');
    } else {
        response.success(req, res, 'Creado correctamente', 201);
    }
});

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');