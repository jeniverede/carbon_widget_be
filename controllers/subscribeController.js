/* second step */
/* all requests (GET, POST etc) to DB are stored in this file */
/* requires the Schema file Subscribe */
const Subscribe = require('../schemas/Subscribe');

/* create a subscription */
const createSubscribe = async (req, res) => {
    try {
        /* needs to be same object structure and keys from subscribe schema */
        const { email } = req.body;
        const subscribe = await Subscribe.create({ email });
        res.status(201).json(subscribe);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = createSubscribe;
