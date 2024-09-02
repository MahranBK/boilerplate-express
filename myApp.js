let express = require('express');//require('express') function loads the Express module & express variable now holds a reference to this module
let app = express();//creates an instance of an Express app that u'll use to define routes and configure your web app.

absolutePath = __dirname + '/views/index.html';
app.get('/', (req, res) => {
    
    res.sendFile(absolutePath);
});

absPath = __dirname + '/public';
app.use('/public', express.static(absPath));

app.get('/json', (req, res) => {
    res.json({"message": "Hello json"});
});






























 module.exports = app;
