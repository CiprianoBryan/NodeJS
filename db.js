const db = require('mongoose');

db.Promise = global.Promise;

exports.connect = async url => {
    await db.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('[db] Conectada con exito');
};