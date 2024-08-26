let express = require('express');//require('express') function loads the Express module & express variable now holds a reference to this module
let app = express();//creates an instance of an Express application that u'll use to define routes and configure your web application.

app.get('/', (req, res) => {
    res.send('Hello Express');
});


































 module.exports = app;
