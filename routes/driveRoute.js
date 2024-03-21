const express = require('express');
const router = express.Router();

const driveController  = require("../controllers/driveController")

router.post('/calculate', driveController.calculateCarbonProducedController);

module.exports = router;