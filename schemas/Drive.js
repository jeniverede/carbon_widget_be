const mongoose = require('mongoose');

const driveSchema = new mongoose.Schema({
    daysOfDriving: {
        type: Number,
        required: true
    },
    carbonProduced: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Drive", driveSchema);