const router = require("express").Router();
const { Chapter, Post } = require('../../models');

router.post('/create', async (req, res) => {
  try {
    const newPost = await Post.create({
      content: req.body.content,
      chapterOrigin: req.body.chapter,
      creator: req.body.creator
    });

    if (!newPost) {
      return 'issue creating post';
    }
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;