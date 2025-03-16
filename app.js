
const express = require('express');

const routes = require('./Routes/index');

const app = express();

const port = 5000;


// CORS issue will be solved // manual cors issue fixing
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // http://localhost:3000
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Header', 'Content-Type, Authorization');
    next();
});

//npm i cors
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});