const express = require('express')
const app = express()
const bookRouts=require('./routes/bookRouts')
const AuthorRouts=require('./routes/AuthorRouts')
const cors = require('cors')
const port = 3000
const mongoose = require('mongoose');


app.use(cors())
app.use(express.json())
app.use('/book', bookRouts)
app.use('/author',AuthorRouts)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  

  main().then(()=> console.log("connected")).catch(err => console.log(err));
  
  async function main() {
    await mongoose.connect('mongodb+srv://rgopikamuralik:o57tKKegzlmEOYSx@cluster0.ats87ms.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
