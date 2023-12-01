const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class GroupMembers extends Model {};

GroupMembers.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "group",
        key: "id"
      }
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "group_members",
  }
);

module.exports = GroupMembers;