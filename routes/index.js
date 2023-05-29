var express = require('express');
const BookModel = require('../models/BookModel');
var router = express.Router();

/* GET home page. */
router.get('/', async(req, res) => {
  var books = await BookModel.find({});
  
  res.render('book_list', { books: books });
})
router.get('/drop', async(req, res) => {
  await BookModel.deleteMany({})
  .then(() => console.log ("delete all succeed !"))
  .catch((err) => console.log ("delete all fail"));
  res.redirect('/');
})




router.get('/delete/:id', async(req, res) => {
var id = req.params.id;
var books =BookModel.findById(id);
await BookModel.deleteOne(book)
.then(() => console.log ("delete all succeed !"))
  .catch((err) => console.log ("delete all fail"));
  res.redirect('/');
});



router.get ('/detail/:id', async (req, res) => {
  var book =  await BookModel.findById(req.params.id);
  res.render('book_detail', { book: book})
})



router.get('/add/')
router.get('/edit/:id')


module.exports = router;
