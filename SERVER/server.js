// express server 
const express = require('express');
const app = express();

const PORT = 3333;

app.get('/',(req, res)=> {
    res.send('This is the homepage');
})

app.listen(PORT);
console.log(`Server listening on localhost:${PORT}!`);