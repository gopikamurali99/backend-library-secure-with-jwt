const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    Authorname: String,
    AuthorBook:[String]

  });
  const Author = mongoose.model('Author', AuthorSchema);

  module.exports=Author