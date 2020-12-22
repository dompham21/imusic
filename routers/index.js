const express = require('express');
const media = require('./media.routers.js');
const router = express.Router();

router.use('/media', media);

module.exports = router;