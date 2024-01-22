
const express = require('express');
const connectToDb = require('./db');
const Book = require('./book');

const app = express();

// Connect to MongoDB
connectToDb();

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

app.get('/books', async (req, res) => {
  try {
    const books = await Book.find().sort({ website: 1 });
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'There has been an error' });
  }
});

