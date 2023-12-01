const router = require('express').Router();
const userRoutes = require('./user-routes');
const groupRoutes = require('./group-routes');
const bookRoutes = require('./book-routes');
const chapterRoutes = require('./chapter-routes');
const postRoutes = require('./post-routes');

router.use('/user', userRoutes);
router.use('/group', groupRoutes);
router.use('/book', bookRoutes);
router.use('/chapter', chapterRoutes);
router.use('/post', postRoutes);


module.exports = router;