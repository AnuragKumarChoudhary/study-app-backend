const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
    res.send("Hello to Study App.")
})

app.listen(3000, () => {
    console.log("Connected to Server! Hurray");
})