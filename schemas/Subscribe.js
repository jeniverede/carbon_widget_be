/* first step */
const mongoose = require('mongoose')

const SubscribeSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        // need a validatior for email addresses, regex
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please use a valid email address"],
    }
});

module.exports = mongoose.model("Subscribe", SubscribeSchema);