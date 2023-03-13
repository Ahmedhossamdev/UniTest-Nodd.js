const express = require('express');
const app = express();
app.use(express.json());



app.get('/' , (req,res) =>{
    res.send("Welcome from get");
});

app.post('/', (req, res) => {
    res.send('Welcome from post');
});

app.put('/', (req, res) => {
    res.send('Welcome from put');
});

app.delete('/', (req, res) => {
    res.send('Welcome from delete');
});



module.exports = app;
