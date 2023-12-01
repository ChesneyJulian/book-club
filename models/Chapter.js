const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Chapter extends Model {};

Chapter.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    chapterNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    originBook: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "book",
        key: "id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "chapter"
  }
);

module.exports = Chapter;