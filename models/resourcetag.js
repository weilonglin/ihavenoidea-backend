"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class resourceTag extends Model {
    static associate(models) {
      resourceTag.belongsTo(models.tag, {
        as: "resTag",
        foreignKey: "tagId",
      });
      resourceTag.belongsTo(models.resource, {

        foreignKey: "resourceId"
      });
    }
  }
  resourceTag.init({
    tagId: DataTypes.INTEGER,
    resourceId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: "resourceTag",
  });
  return resourceTag;
};