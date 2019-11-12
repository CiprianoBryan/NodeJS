const db = require('mongoose');
const Model = require('./model');

db.Promise = global.Promise;
db.connect('mongodb+srv://admin:admin@platzi-kpj7c.mongodb.net/test?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
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