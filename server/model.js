const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cake_db', { useNewUrlParser: true }, errs => console.log(errs?errs:"running api db"));

const ReviewSchema = new mongoose.Schema({
    rating: {type: Number, required: true, min: 0, max: 5},
    comment: {type: String, required: true, minlength: [3, "Comment too short"]}
}, {timestamps: true});

const CakeSchema = new mongoose.Schema({
    baker: {type: String, required: true, minlength: [3, "Name too short"]},
    url: {type: String, required: true},
    review: [ReviewSchema]
}, {timestamps: true});

const Cake = mongoose.model('Cake', CakeSchema);
const Review = mongoose.model('Review', ReviewSchema);

module.exports = {Cake, Review};