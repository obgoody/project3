const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewSaleSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    addressLineOne: {
        type: String,
        required: true,
        trim: true,
    },
    addressLineTwo: {
        type: String,
        trim: true,
    },
    city: {
        type: String,
        required: true,
        trim: true,
    },
    state: {
        type: String,
        required: true,
        trim: true,
    },
    zip: {
        type: Number,
        required: true,
        min: 10000,
        max: 99999
    },
    start: {
        type: String,
    },
    end: {
        type: String,
    },
    images: [{
        type: String,
    }]
});

const NewSale = mongoose.model("NewSale", NewSaleSchema);

module.exports = NewSale;