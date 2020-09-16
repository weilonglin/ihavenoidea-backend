"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tags",
      [
        {
          name: "ReactJs",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "CSS",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "SASS",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Backend",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Frontend",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ES6",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "React native",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Agile",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vue",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "NoSQL",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "SQL",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tags", null, {});
  },
};
