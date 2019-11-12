const mongoose = require('mongoose');

const model = mongoose.model('Message', new mongoose.Schema({
    user: String,
    message: {
        type: String,
        required: true
    },
    date: Date
}));

module.exports = model;