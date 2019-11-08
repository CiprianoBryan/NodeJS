const list = [];

addMessage = message => {
    list.push(message);
};

getMessages = () => {
    return list;
};

module.exports = {
    add: addMessage,
    list: getMessages
};