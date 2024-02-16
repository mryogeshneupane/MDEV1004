/*
Group Assignment 2: Use Express API to perform CRUD Operation  
Yogesh Neupane: 200570557
Roshan Khatri: 200575702
Date: 2024/02/16
 */
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bookRoutes = require('./src/routes/booksRoute');
const cors = require('cors');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');


// Parse JSON bodies
app.use(express.json());

app.use(bodyParser.json());

dotenv.config({ path: './config.env' });

const InitiateMongoServer = require('./db');
// Initialize Mongodb Connection
InitiateMongoServer();


app.get('/', async function (req, res) {
    res.send("Welcome to the first express nodejs app");
});

app.use('/book', bookRoutes);

const port = 3000;

// Define a route to handle requests to the root URL "/"
app.get('/', (req, res) => {
    res.send('<h1 style="text-align: center;">Group Assignment - 2</h1>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});