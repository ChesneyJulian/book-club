const User = require('./User');
const Group = require('./Group');
const GroupMembers = require('./junction-tables.js/GroupMembers');
const Book = require('./Book');
const GroupBooks = require('./junction-tables.js/GroupBooks');

Group.belongsToMany(Book, {
  through: GroupBooks,
  foreignKey: 'groups'
});

Book.belongsToMany(Group, {
  through: GroupBooks,
  foreignKey: 'books'
});

Group.belongsToMany(User, {
  through: GroupMembers,
  foreignKey: 'group_id'
});

User.belongsToMany(Group, {
  through: GroupMembers,
  foreignKey: 'member_id',
});

module.exports = { User, Group, GroupMembers, Book, GroupBooks }