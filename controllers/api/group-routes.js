const router = require('express').Router();
const { Group, User, GroupMembers } = require('../../models');

router.post('/create', async (req, res) => {
  try {
    const newGroup = await Group.create({
      name: req.body.name,
      genres: req.body.genres,
    }).then((group) => {
      if (req.body.members.length) {
        const membersArr = req.body.members.map((member_id) => {
          return {
            group_id: group.id,
            member_id: member_id
          }
        })
        const groupMembersData = GroupMembers.bulkCreate(membersArr);
        console.log(groupMembersData);
        return groupMembersData;
      }
    });

    if (newGroup) {
      res.status(200).json(newGroup);
    };
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const groupData = await Group.findAll({ include: User});
    if (groupData) {
      return res.status(200).json(groupData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;