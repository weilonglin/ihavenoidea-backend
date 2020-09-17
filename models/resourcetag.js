"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class resourceTag extends Model {
    static associate(models) {

    }
  }
  resourceTag.init({
    tagId: {
      type: DataTypes.INTEGER,
      references: {
        model: "tags",
        key: "id",
      }
    },
    resourceId: {
      type: DataTypes.INTEGER,
      references: {
        model: "resources",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: "resourceTag",
  });
  return resourceTag;
};