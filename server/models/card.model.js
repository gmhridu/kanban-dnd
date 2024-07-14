const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    column: String,
}, {timestamps: true});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;