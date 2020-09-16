"use strict";
const { Model } = require("sequelize");
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
      resource.belongsToMany(models.tag, {
        through: "resourceTags",
        foreignKey: "resourceId",
      });
      resource.hasMany(models.vote, { as: "votes", foreignKey: "resourceId" });
    }
  }
  resource.init(
    {
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
    },
    {
      sequelize,
      modelName: "resource",
    }
  );
  return resource;
};
