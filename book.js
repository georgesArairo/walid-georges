const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  // Add other fields as needed
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
