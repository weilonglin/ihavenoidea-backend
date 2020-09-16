"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("resources", "subjectId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "subjects",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("resources", "subjectId");
  },
};
