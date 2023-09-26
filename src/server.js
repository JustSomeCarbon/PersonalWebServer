const express = require('express');
const path = require('path')
const app = express();

// define the html files and stylesheet files necessary
app.use(express.static(path.join(__dirname, 'frontend/')));

const port = 3000;

app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, 'frontend/index.html'));
    res.sendFile('frontend/index.html');
});

app.listen(port, () => {
    console.log(`Server listening at localhost:${port}/`);
});