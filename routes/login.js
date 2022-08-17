const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('../util/path')

router.use(bodyParser.urlencoded({extended: false}));

router.get('/login', (req, res, next) => {
    // display login form
    res.sendFile(path.join(rootDir, 'views', 'login.html'))
});

module.exports = router;