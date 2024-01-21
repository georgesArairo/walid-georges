
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
    const books = await Book.find().sort({ title: 1 });
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'There has been an error' });
  }
});

//old code 
// const express = require('express')
// const {connectToDb , getDb } = require('./db')

// const app = express()
// let db ;
// connectToDb((err)=>{
// if(!err){
//     app.listen(3000,()=>{
//         console.log('listening to port 3000')
//     })
//         db = getDb()
// }
// })

// app.get('/books',(req , res)=>{
//     const books = [] ;

//         db.collection('books')
//         .find()
//         .sort({website: 1})
//         .forEach(book => books.push(book))
//         .then(()=>{
//                 res.status(200).json(books)
//         }).catch(()=>{
//             res.status(500).json({error:"there has been an error"})
//         })

//         res.json({message:"this is my first message"})

// })
