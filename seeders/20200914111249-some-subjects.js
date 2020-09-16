"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "subjects",
      [
        {
          name: "React",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vanilla Js",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Typescript",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "GraphQL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "HTML",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "CSS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Express",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sequelize",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("subjects", null, {});
  },
};
