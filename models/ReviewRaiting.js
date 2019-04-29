const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  user_id: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  raiting: {
    type: Number,
    default: 0
    },
  createdAt: {
    type: Date,
    default: Date.now
  }  
});


module.exports = reviewSchema;