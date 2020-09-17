"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class resource extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      resource.belongsTo(models.subject, {
        as: "category",
        foreignKey: "subjectId",
      });

      resource.hasMany(models.vote, {
        as: "vote",
        foreignKey: "resourceId"
      });

      resource.belongsToMany(models.tag, {
        through: "resourceTags",
        as: "tags",
        foreignKey: "resourceId"
      })

    }
  }
  resource.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: "resource",
  });
  return resource;
};