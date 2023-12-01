const router = require('express').Router();
const { Book, Chapter, Post } = require('../../models');

router.post('/create', async (req, res) => {
  try {
    if (!req.body.totalChapters) {
      res.status(404).json('no chapters input');
    } else {
      console.log(req.body.totalChapters);
      for (let i = 1; i <= req.body.totalChapters; i++) {
        const chapterData = await Chapter.create({
          chapterNumber: i,
          originBook: req.body.book
        });
        if (!chapterData) {
          console.log('error');
          return res.json(err);
        }
      };
      res.status(200).json('chapters added');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const singleChapterData = await Chapter.findByPk(req.params.id, {
      include: [
        {
          model: Post
        }
      ]
    });
    if (!singleChapterData) {
      return 'Could not locate chapter data'
    }
    res.status(200).json(singleChapterData);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router; 