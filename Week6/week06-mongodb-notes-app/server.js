const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const noteRoutes = require('./routes/NoteRoutes'); // 👈 Adjust the path if needed


const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 8081;

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount the note routes
app.use('/api', noteRoutes);

// Root endpoint
app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});

// Connect to MongoDB Atlas
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("✅ Successfully connected to the MongoDB Atlas database");
    app.listen(PORT, () => {
        console.log(`🚀 Server is listening on port ${PORT}`);
    });
})
.catch(err => {
    console.error('❌ Could not connect to the database. Exiting now...', err);
    process.exit();
});
