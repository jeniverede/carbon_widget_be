/* third step */
/*  this code is a template you can use in any project, just change the file names */
const express = require('express');

/* create a new instance of express router */
const router = express.Router();

/* import contollers/subscribe */
const createSubscribe  = require("../controllers/subscribeController")

/* decide which controllers to execute on which routes */
/* can run getAll & post route on main path */
/* getOne, update, deleteOne are routes that cannot be run on main path, need /:id */
router.route('/').post(createSubscribe);

module.exports = router;