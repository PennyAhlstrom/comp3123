const express = require('express');
const movieRoutes = require('./routes/movies');
const studentRoutes = require('./routes/students');
const notesRoutes = require('./routes/notes');

const app = express();
const SERVER_PORT = process.env.PORT || 3000;


// Built-in middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application-level middleware
app.use((req, res, next) => { // Middle ware has three parameters - request, response, next (go to next middle ware or actual route)
    console.log(`${req.method} request for ${req.url} - ${JSON.stringify(req.body)}`); // Used for logging purpuses when users are making requests
    next();
})

// Also Application-level middleware
app.use((req, res, next) => {
    console.log('This always runs');
    next();
})

// Route-level middleware - thsi can be here or be moved into movies.js - but then remove the qualifier: '/movies', 
app.use('/movies', (req, res, next) => {
    console.log('Request made to /movies');
    next();
});


// Add movie routes and students and notes routes as middleware 
// (we have organized multiple routes into multiple modules)
// We organize our endpoints by putting routes into multiple files
app.use('/movies', movieRoutes);
app.use('/students', studentRoutes);
app.use('/notes', notesRoutes);

// Root route
app.get('/', (req, res) => { // Root parameters, two, request and response
    res.send('<h1>Hello, World!</h1>');
});

//http://localhost:3000/error
app.get('/error', (req, res) => {
    throw new Error('A ROOT Level contrived error');
});

// Error-handling as middleware is good to handle errors in one location
// has 4 requesst parameters: error, request, response, next
// Error-handling middleware
// don't add at the top or it will never call
// This is the global error handler
app.use((err, req, res, next) => {
    //console.error(err.stack);
    console.log('Error handling middleware called')
    res.status(500).send(`Something broke! Error: ${err.message}`);
});

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
});

