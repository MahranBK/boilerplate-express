require('dotenv').config();//dotenv package loads environment variables from your .env file into process.env .
let express = require('express');//require('express') function loads the Express module & express variable now holds a reference to this module
let app = express();//creates an instance of an Express app that u'll use to define routes and configure your web app.

app.use((req, res, next) => {
    console.log(req.method+' '+req.path+' - '+req.ip);
    next();
});

absolutePath = __dirname + '/views/index.html';
app.get('/', (req, res) => {
    res.sendFile(absolutePath);
});

absPath = __dirname + '/public';
app.use('/public', express.static(absPath));

app.get('/json', (req, res) => {
    if(process.env.MESSAGE_STYLE == 'uppercase'){
        res.json({"message": "HELLO JSON"});
    }
    else{
        res.json({"message": "Hello json"});
    }
});





























 module.exports = app;
