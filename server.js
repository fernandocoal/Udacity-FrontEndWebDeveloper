/* Empty JS object to act as endpoint for all routes */
let projectData = {};

/* Express to run server and routes */
const express = require('express');

// Dependencies
const bodyParser = require('body-parser');

const morgan = require('morgan');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('website'));

// Setup Server
const http = require('http');
const port = 8000;
const hostname = 'localhost';
const server = http.createServer(app);
server.listen(port, hostname, () => console.log(`Server running on http://${hostname}:${port}`));

// Callback function to complete GET '/all'

app.get('/all',getData);

function getData(req,res){
    res.send(projectData);
};

// Post Route

app.post('/add', addInfo);

function addInfo(req, res) { 
  projectData = {
    date: req.body.date,
    temp: req.body.temp,
    content: req.body.content
  };

  res.send(projectData);
};

app.get('/test',(req,res)=>{
  res.send("Hi, the server is working...")
});