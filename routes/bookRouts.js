const express = require('express');
const Book = require('../Models/Book');
const router = express.Router()

// middleware that is specific to this router
//1.get all category
router.get('/', async(req, res) => {
  const book=await Book.find(req.query);
  res.json(book)
  })
//2.get a category by id
router.get('/:bookid', async(req, res) => {
  try{
    const booksid=await Book.findById(req.params.bookid).exec();
    res.status(200).json(booksid)
  }
  catch(error){
    res.status(404).send("book not found")
  }
  })
//3.add a category
router.post('/', async(req, res) => {
    
  const BookData= req.body
  const books= new  Book(BookData)
  await books.save()
  console.log(books);
  res.status(201).json(books)

  })
//4.update a category
router.patch('/:bookid', async(req, res) => {
  try{
    const updatedBook = await Book.findByIdAndUpdate(req.params.bookid, req.body, {new:true})
     res.json(updatedBook)
   }
   catch(error){
       res.send("not updated")
   }
     
  })
//5.delete a category
router.delete('/:bookid', async(req, res) => {
  try{
    const Bookdelete=await Book.findById(req.params.bookid).exec();
    res.status(200).send('Item deleted')
  }
  catch(error){
    res.status(404).send("cannot find the athor")
  }
  })


module.exports = router