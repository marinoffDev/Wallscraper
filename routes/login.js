const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const path = require('path');
const rootDir = require('../util/path')

router.get('/login', (req, res, next) => {
    // display login form
    res.sendFile(path.join(rootDir, 'views', 'login.html'))
});

module.exports = router;