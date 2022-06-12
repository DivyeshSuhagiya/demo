const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()
require('./config/db')

app.use(
    express.json({
        limit: '1024mb',
    }),
)
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

const routes = require('./routes/index')
app.use('/', routes)


const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`The web server has started on port ${port}`);
});