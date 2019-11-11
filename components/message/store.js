const db = require('mongoose');
const Model = require('./model');

const pathCredential = '';

db.Promise = global.Promise;
db.connect(pathCredential, {
    useNewUrlParser: true
});

console.log('[db] Conectada con exito');

addMessage = message => {
    const myMessage = new Model(message);
    myMessage.save();
};

getMessages = async () => {
    const messages  = await Model.find();
    return messages;
};

module.exports = {
    add: addMessage,
    list: getMessages
};