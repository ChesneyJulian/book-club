const router = require('express').Router();
const userRoutes = require('./user-routes');
const groupRoutes = require('./group-routes');
const bookRoutes = require('./book-routes');

router.use('/user', userRoutes);
router.use('/group', groupRoutes);
router.use('/book', bookRoutes);


module.exports = router;