const Model = require('./model');

addMessage = message => {
    const myMessage = new Model(message);
    myMessage.save();
};

getMessages = async (filterUser) => {
    let filter = {};
    if (filterUser !== null) {
        filter = {
            user: filterUser
        }
    }
    const messages  = await Model.find(filter);
    return messages;
};

updateText = async (id, message) => {
    const foundMessage  = await Model.findOne({
        _id: id
    });
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
};

removeMessage = id => {
    return Model.deleteOne({
        _id: id
    });
};

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessage
};