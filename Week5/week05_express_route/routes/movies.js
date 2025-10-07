const express = require('express');
const movieRoutes = express.Router();

movieRoutes.get('/', (req, res) => {
    res.send('<h1>List of Movies</h1>');
});

movieRoutes.post('/add', (req, res) => {
    res.send('<h1>Create a new Movie</h1>');
});

movieRoutes.get('/error', (req, res) => {
    res.send('A contrieved error from movies route');
});

// Error handling middleware specific to moviesRoutes
movieRoutes.use((err, req, res, next) => {
    //console.error(err.stack);
    console.log('Error handling middleware called')
    res.status(500).send(`Something broke! Error: ${err.message}`);
});

module.exports = movieRoutes; // Exporting this as a module