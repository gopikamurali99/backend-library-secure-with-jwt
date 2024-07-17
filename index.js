require('dotenv').config()
const express = require('express')
const app = express()
const bookRouts=require('./routes/bookRouts')
const AuthorRouts=require('./routes/AuthorRouts')
const authRoutes=require('./routes/authRoutes')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const port = 3000
const mongoose = require('mongoose');
const UserRoutes=require('./routes/UserRoutes')


app.use(cors(
  {
    credentials:true,
    origin:true
  }
))
app.use(express.json())
app.use(cookieParser())
app.use('/book', bookRouts)
app.use('/author',AuthorRouts)
app.use('/user',UserRoutes)
app.use('/auth',authRoutes)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  

  main().then(()=> console.log("connected")).catch(err => console.log(err));
  
  async function main() {
    await mongoose.connect(process.env.DB_URL);
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
