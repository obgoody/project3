const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const statesArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

const AdsaleSchema = new Schema({
  user_id: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  address: {
      line1:{
        required: true,
        unique: true,
        trim: true,    
      },
      line2:{
        required: true,
        unique: true,
        trim: true,    
      },
      city:{
        required: true,
        unique: true,
        trim: true,    
      },
      state: {
        type: String,
        uppercase: true,
        required: true,
        enum: statesArray
    },
      zip:{
        required: true,
        unique: true,
        minimum: 10000,
        maximum: 99999,
        trim: true,    
      },
  },
  image: [
    {
        url:{type: String},
        alt: {type: String}
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }  
});


module.exports = AdsaleSchema;