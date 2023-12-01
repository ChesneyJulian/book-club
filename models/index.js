const User = require('./User');
const Group = require('./Group');
const GroupMembers = require('./junction-tables.js/GroupMembers');
const Book = require('./Book');
const GroupBooks = require('./junction-tables.js/GroupBooks');
const Chapter = require('./Chapter');
const Post = require('./Post');

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

Book.hasMany(Chapter, {
  foreignKey: 'originBook'
});

Chapter.belongsTo(Book, {
  foreignKey: 'originBook'
});

Chapter.hasMany(Post, {
  foreignKey: 'chapterOrigin'
});

Post.belongsTo(Chapter, {
  foreignKey: 'chapterOrigin'
});

User.hasMany(Post, {
  foreignKey: 'creator'
});

Post.belongsTo(User, {
  foreignKey: 'creator'
});

module.exports = { User, Group, GroupMembers, Book, GroupBooks, Chapter, Post }