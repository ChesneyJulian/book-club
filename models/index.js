const User = require('./User');
const Group = require('./Group');
const GroupMembers = require('./GroupMembers');

Group.belongsToMany(User, {
  through: GroupMembers,
  foreignKey: 'group_id'
});

User.belongsToMany(Group, {
  through: GroupMembers,
  foreignKey: 'member_id',
});

module.exports = { User, Group, GroupMembers }