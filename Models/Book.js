const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    BookImage:String,
    Bookname: String,
    AuthorName:String,
    Genre:String

  });
  const Book = mongoose.model('Book', BookSchema);

  module.exports=Book