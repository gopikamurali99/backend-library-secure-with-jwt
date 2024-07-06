const express = require('express')
const app = express()
const bookRouts=require('./routes/bookRouts')
const AuthorRouts=require('./routes/AuthorRouts')
const cors = require('cors')
const port = 3000

app.use(cors())
app.use('/book', bookRouts)
app.use('/author',AuthorRouts)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  

