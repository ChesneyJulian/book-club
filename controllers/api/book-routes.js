const router = require("express").Router();
const { Book, Group, User, GroupBooks } = require('../../models');

router.post('/create', async (req, res) => {
  try {
    const newBook = await Book.create({
      name: req.body.name,
      author: req.body.author,
      genre: req.body.genre,
    }).then((book) => {
      if (req.body.groups) {
        const groupBooksData =  GroupBooks.create({
          groups: req.body.groups,
          books: book.id
        });
        console.log(groupBooksData);
        return groupBooksData;
      };
    });
    res.status(200).json(newBook);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.get('/', async (req, res) => {
  try {
    const bookData = await Book.findAll({});
    if (!bookData) {
      console.log("no book data found");
      return;
    } else {
      console.log(bookData);
      res.status(200).json(bookData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;