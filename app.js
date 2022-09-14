const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');



const searchRoutes = require('./routes/search')
const loginRoutes = require('./routes/login')
const userRoutes = require('./routes/user')
const indexRoutes = require('./routes/index')


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')))

app.use(indexRoutes);
app.use(searchRoutes);
app.use(loginRoutes);
app.use(userRoutes);


// return 404 error
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}.`);
});