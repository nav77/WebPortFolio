const express = require('express');
const app = express();

// Routes
app.get('/', home);
app.get('/hello', helloWorld);
app.get('/about', about);

// Controllers
function home (req, res) {
    res.send('Welcome Home');
}

function helloWorld (req, res) {
    res.send('Hello World');
}

function about (req, res) {
    res.send('About Me');
}

// Sets the port and runs the app
app.listen(3000);