const mongoose = require('mongoose');

const dietSchema = new mongoose.Schema({
    daysPerWeek: {
        type: Number,
        required: true
    },
    carbonProduced: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Diet", dietSchema);