const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const path = require('path');
const rootDir = require('../util/path')

router.get('/', (req, res, next) => {
    // display welcome
    res.sendFile(path.join(rootDir, 'views', 'index.html'))

});

module.exports = router;