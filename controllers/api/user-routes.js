const router = require('express').Router();
const { User, Group, GroupMembers } = require('../../models');


router.post('/create', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    }).then((user) => {
      if (req.body.groups.length) {
        const userGroupsArr = req.body.groups.map((group_id) => {
          return {
            group_id: group_id,
            member_id: user.id
          }
        })
        return GroupMembers.bulkCreate(userGroupsArr);
      };
    })
    if (newUser) {
      res.status(200).json(newUser);
    }
  } catch (err) {
    res.status(500).json(err);
  };
});

router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({ include: Group });
    if (userData) {
      res.status(200).json(userData);
    }
  } catch (err){
    res.status(500).json(err);
  }
});

module.exports = router;