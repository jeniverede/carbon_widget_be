const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

/* routes */
app.get('/', (req, res) => {
    res.send('Hello Node API!');
});

app.listen(port, () => {
    console.log(`Node API is running on port ${port}`);
});

mongoose.
    connect('mongodb+srv://jenniferrrothrock:4oOYNmlepOtzj31V@dev-carbonwidget-frankf.vxzmc3d.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((error) => {
        console.log(error);
    });