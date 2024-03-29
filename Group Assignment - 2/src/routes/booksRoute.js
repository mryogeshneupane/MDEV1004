/*
Group Assignment 2: Use Express API to perform CRUD Operation  
Yogesh Neupane: 200570557
Roshan Khatri: 200575702
Date: 2024/02/16
 */
const express = require('express');
const router = express.Router();
const Book = require('../models/booksModel.js'); 
const bookController = require('../controllers/bookController.js');
const middleware = require('../middlewares/bookMiddleware.js');

// Routes list
router.post('/books', middleware.logCreateRequest, bookController.addBooks);
router.get('/books', middleware.logReadRequest, bookController.getAllBooks);
router.get('/books/:id', middleware.logReadRequest, bookController.findBooks);
router.put('/books/:id', middleware.logUpdateRequest, bookController.updateBooks);
router.delete('/books/:id', middleware.logDeleteRequest, bookController.deleteBooks);

module.exports = router;
