/*
Group Assignment 2: Use Express API to perform CRUD Operation  
Yogesh Neupane: 200570557
Roshan Khatri: 200575702
Date: 2024/02/16
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defining schema for the book model
const BooksSchema = new Schema({
    BookName: {type: String},
    ISBN: {type: String},
    Rating: {type: String},
    Author: [{type: String}],
    Genre:[{type: String}]
  
})
const Books = mongoose.model('Books', BooksSchema);

module.exports = Books;