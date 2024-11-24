const express = require('express');
const { addSolution } = require('../Controllers/Solutions');
const router = express.Router();

router.post('/addSolution', addSolution);
module.exports = router;