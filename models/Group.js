const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Group extends Model {};

Group.init(
  {
    id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     primaryKey: true,
     autoIncrement: true 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    // will need route to add genres to group
    genres: {
      type: DataTypes.STRING
    },
  }, 
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "group",
  }
);

module.exports = Group;