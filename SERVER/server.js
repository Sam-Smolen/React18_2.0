// express server
const express = require('express');
const app = express();


app.use('/css',express.static( __dirname + '/public/css'));


app.get('/',(req,res)=>{
    res.send(`
        <html>
            <head>
                <link type="text/css" rel="stylesheet" href="/css/styles.css">
            </head>
            <body>
                <h1>Hello !!</h1>
            </body>
        </html>
    `)
});
app.get('/api/:user/:id',(req,res)=>{
    let id = req.params.id;
    let username = req.params.user;
    res.send(`
        <html>
            <body>
                <h1>The username is ${username} and the ID is ${id}</h1>
            </body>
        </html>
    `)
});

// /api/car?brand=lexus&year=2001

app.get('/api/car',(req,res)=> {
    let brand = req.query.brand
    let year = req.query.year
    res.send({
        brand,
        year
    })
})


const port = process.env.PORT || 3000;
app.listen(port);