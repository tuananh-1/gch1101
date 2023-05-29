const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
title: String,
author: String,
quantity: Number,
price: Number,
date: Date,
cover: String,
video: String,

})
 
const BookModel = mongoose.model('Buc', BookSchema, 'book')
module.exports = BookModel;