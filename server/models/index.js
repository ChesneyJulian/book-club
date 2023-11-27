const User = require('./User');
const Group = require('./Group');
const Leader = require('./Leader');
const Book = require('./Book');
const Chapter = require('./Chapter');
const Post = require('./Post');

Group.hasMany(User, {
  foreignKey: "groups"
});

User.belongsToMany(Group, {
  foreignKey: "groups"
});

Leader.hasOne(Group, {
  foreignKey: "leader"
});

Group.belongsTo(Leader, {
  foreignKey: "leader"
});

User.hasOne(Leader, {
  foreignKey: "name",
});

Leader.belongsTo(User, {
  foreignKey: "name"
});

Group.hasMany(Book, {
  foreignKey: "groups"
});

Book.belongsToMany(Group, {
  foreignKey: "groups"
});

User.hasMany(Post, {
  foreignKey: "creator"
});

Post.belongsTo(User, {
  foreignKey: "creator"
});

Book.hasMany(Chapter, {
  foreignKey: "book"
});

Chapter.belongsTo(Book, {
  foreignKey: "book"
});

Chapter.hasMany(Post, {
  foreignKey: "chapter"
});

Post.belongsTo(Chapter, {
  foreignKey: "chapter"
});