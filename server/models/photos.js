const mongoose = require('mongoose');


const PhotoSchema = new mongoose.Schema({
  id:{
      type:Number,
      unique: true,
    },

  name:{type:String, default: ''},
  description:{type:String, default: ''},
  link:{type:String, default: ''},

});

module.exports = mongoose.model('Photos',PhotoSchema);