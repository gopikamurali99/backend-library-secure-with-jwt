const express = require('express');
const User=require('../Models/User')
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')

const router = express.Router()


//3.add a category
router.post('/login', async(req, res) => {
    
  const{email,password}=req.body
  const user=await User.findOne({ email: email}).exec()
  if(!user)
  {
    return res.status(401).send('no user found')
  }
  const passwordMatch=bcrypt.compareSync(password,user.password)
  if(passwordMatch){
    const token=jwt.sign({_id: user._id,email:user.email},'d5435139bdc9ab2032f6371f2f34f3eb913c0a81be47a054c3b6921a9cb822639e026fae3f708b7777259473d166f7e6ca17c82bc7c37fed3e74586c83feab6c',{expiresIn:'1h'})

    res.status(200).cookie('token',token,{httpOnly:true})
    res.send("login success")
  }
  else{
    res.send('password does not match')
  }

  

  })
 
  router.get('./verify',async(req,res)=>{
 
    if(req.cookies.token){
        res.send('login')

    }
  else{
    res.status(401).send('cannot login')
  }
})


module.exports = router