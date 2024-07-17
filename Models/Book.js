const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    BookImage:String,
    Bookname: String,
    AuthorName:String,
    Genre:String,
    Author:{
      type:mongoose.ObjectId,
      ref:'Author'
    }

  });
  const Book = mongoose.model('Book', BookSchema);

  module.exports=Book