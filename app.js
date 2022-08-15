const dotenv = require('dotenv');
const express = require('express');
const app = express();
const fetch = require('node-fetch');
dotenv.config();

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}.`);
});