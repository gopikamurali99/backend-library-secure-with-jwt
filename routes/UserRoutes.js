const express = require('express');
const User = require('../Models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const router = express.Router()

// middleware that is specific to this router
//1.get all Author
router.get('/', async(req, res) => {
   const user=await User.find({});
   console.log('Request Body:', req.body);
    res.json(user)
  })
//2.get a Author by id
router.get('/:authorid', async(req, res) => {
  try{
    const userid=await User.findById(req.params.authorid).exec();
    res.status(200).json(userid)
  }
  catch(error){
    res.status(404).send("author not found")
  }
  
  })
//3.add a Author
router.post('/', async(req, res) => {
  
    const userData= req.body
    const hash = bcrypt.hashSync(userData.password, saltRounds);
    const users= new User({
      ...userData,
      password:hash
    });
    
    await users.save()
    console.log(users);
    res.status(201).json(users)

  
  
  
  })
//4.update a Author
router.patch('/:userid', async(req, res) => {
  try{
   const updatedUser = await User.findByIdAndUpdate(req.params.authorid, req.body, {new:true})
    res.json(updatedUser)
  }
  catch(error){
      res.send("not updated")
  }
    
    
  })
//5.delete a Author
router.delete('/:userid', async(req, res) => {
  try{
    const userdelete=await User.findById(req.params.authorid).exec();
    res.status(200).send('Item deleted')
  }
  catch(error){
    res.status(404).send("cannot find the athor")
  }
  })


module.exports = router