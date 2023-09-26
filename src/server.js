const express = require('express');
const path = require('path')
const app = express();

// define the html files and stylesheet files necessary
app.use(express.static(path.join(__dirname, 'frontend/')));

const port = 3000;


/*
 * Routing functions
 */

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.get('/background', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/background.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/projects.html'));
});


/*
 * Server listen function
 */

app.listen(port, () => {
    console.log(`Server listening at localhost:${port}/`);
});