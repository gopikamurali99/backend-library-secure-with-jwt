const express = require('express');
const Author = require('../Models/Author');
const router = express.Router()

// middleware that is specific to this router
//1.get all Author
router.get('/', async(req, res) => {
   const author=await Author.find({});
    res.json(author)
  })
//2.get a Author by id
router.get('/:authorid', async(req, res) => {
  try{
    const authorid=await Author.findById(req.params.authorid).exec();
    res.status(200).json(authorid)
  }
  catch(error){
    res.status(404).send("author not found")
  }
  
  })
//3.add a Author
router.post('/', async(req, res) => {
  
    const authorData= req.body
    const authors= new Author(authorData);
    await authors.save()
    console.log(authors);
    res.status(201).json(authors)

  
  
  
  })
//4.update a Author
router.patch('/:authorid', async(req, res) => {
  try{
   const updatedAuthor = await Author.findByIdAndUpdate(req.params.authorid, req.body, {new:true})
    res.json(updatedAuthor)
  }
  catch(error){
      res.send("not updated")
  }
    
    
  })
//5.delete a Author
router.delete('/:authorid', async(req, res) => {
  try{
    const authordelete=await Author.findById(req.params.authorid).exec();
    res.status(200).send('Item deleted')
  }
  catch(error){
    res.status(404).send("cannot find the athor")
  }
  })


module.exports = router