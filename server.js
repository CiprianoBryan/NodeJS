const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

let app = express();
app.use(bodyParser.json());
app.use(router);

router.get('/', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.send('Hola desde get we');
});

app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');