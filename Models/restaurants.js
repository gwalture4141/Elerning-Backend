const mongoose = require('mongoose');

const restaurant = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: truers
    }
});

module.exports = mongoose.model('restaurant', restaurant)