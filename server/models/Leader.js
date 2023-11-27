const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Leader extends Model {}

Leader.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      references: {
        model: "user",
        key: "username"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "leader",
  }
);

module.exports = Leader;