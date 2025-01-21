require('dotenv').config();//dotenv package loads environment variables from your .env file into process.env .

let bodyParser = require('body-parser');//body-parser to parse post req body
let express = require('express');//loads the Express module into express variable
let app = express();//creates an instance of an Express app that u'll use to define routes and configure your web app.

//mounting bodyParser middleware before all routes
app.use(bodyParser.urlencoded({extended: false}));

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

app.get('/now', (req, res, next) => {
    date = new Date();
    req.time = date.toString();
    next();
}, (req, res) => {
    res.send({time: req.time});
});

app.get('/:word/echo', (req, res) => {
    word = req.params.word;
    res.send({echo: word});
})

app.route('/name').get((req, res) => {
    f = req.query.first;
    l = req.query.last;
    res.send({name: f+' '+l})
}).post((req, res) => {
    res.send({name: req.body.first+' '+req.body.last});
});
























 module.exports = app;
