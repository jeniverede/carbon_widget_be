const express = require('express');
const router = express.Router();

const dietController  = require("../controllers/dietController")

router.post('/calculate', dietController.calculateDietCarbonProducedController);

module.exports = router;