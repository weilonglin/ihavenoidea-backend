"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("votes", "resourceId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "resources",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("votes", "resourceId");
  },
};
