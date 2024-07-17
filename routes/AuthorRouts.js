const express = require('express');
const Author = require('../Models/Author');
const router = express.Router()

// middleware that is specific to this router
//1.get all category
router.get('/', async(req, res) => {
  const author=await Author.find(req.query);
  res.json(author)
  })
//2.get a category by id
router.get('/:authorid', async(req, res) => {
  try{
    const authorsid=await Author.findById(req.params.authorid).exec();
    res.status(200).json(authorsid)
  }
  catch(error){
    res.status(404).send("Author not found")
  }
  })
//3.add a category
router.post('/', async(req, res) => {
    
  const AuthorData= req.body
  const authors= new  Author(AuthorData)
  await authors.save()
  console.log(authors);
  res.status(201).json(authors)

  })
//4.update a category
router.patch('/:authorid', async(req, res) => {
  try{
    const updatedAuthor = await Author.findByIdAndUpdate(req.params.authorid, req.body, {new:true})
     res.json(updatedAuthor)
   }
   catch(error){
       res.send("not updated")
   }
     
  })
//5.delete a category
router.delete('/:authorid', async(req, res) => {
  try{
    const Authordelete=await Author.findById(req.params.authorid).exec();
    res.status(200).send('Item deleted')
  }
  catch(error){
    res.status(404).send("cannot find the author")
  }
  })

  

module.exports = router