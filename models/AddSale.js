const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const statesArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

const AddSaleSchema = new Schema({
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
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    uppercase: true,
    required: true,
    enum: statesArray
  },
  zip: {
    type: Number,
    required: true,
    minimum: 10000,
    maximum: 99999,
    trim: true
  },
  startTime: {
    type: String,
  },
  endTime: {
    type: String,
  },
  image1: {
    type: String
  },
  image2: {
    type: String
  },
  image3: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

const AddSale = mongoose.model("AddSale", AddSaleSchema);


module.exports = AddSale;