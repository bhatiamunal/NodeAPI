const mongoose = require('mongoose');
const Comment = new mongoose.Schema({
    name: { type: String, require:true},
    address: { type: String, require:true},
  
  });

  module.exports = mongoose.model('mydb',Comment)