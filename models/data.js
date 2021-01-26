const mongoose = require('mongoose');
const Comment = new mongoose.Schema({
    name: { type: String, require:true},
    address: { type: String, require:true},
  
  });

  //mydb is  collection name in case it is not available then it will create auto matically 
  module.exports = mongoose.model('mydb',Comment) 