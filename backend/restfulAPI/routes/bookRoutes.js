const express = require('express');
const { createBook, getBooks, updateBook, deleteBook } = require('../controllers/bookController');
const { protect, authorize } = require('../middleware/authMiddleware');
const router = express.Router();

// Rute CRUD buku (dengan autentikasi dan otorisasi)
router.post('/', protect, authorize('admin'), createBook);
router.get('/', protect, getBooks);
router.put('/:id', protect, authorize('admin'), updateBook);
router.delete('/:id', protect, authorize('admin'), deleteBook);

module.exports = router;
