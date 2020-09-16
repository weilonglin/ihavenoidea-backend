"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "resources",
      [
        {
          name: "this is react",
          link: "https://reactjs.org/",
          description: "A JavaScript library for building user interfaces",
          createdAt: new Date(),
          updatedAt: new Date(),
          subjectId: 1,
        },
        {
          name: "this is Vanilla Js",
          link: "http://vanilla-js.com/",
          description:
            "Vanilla JS is a fast, lightweight, cross-platform framework for building incredible, powerful JavaScript applications.",
          createdAt: new Date(),
          updatedAt: new Date(),
          subjectId: 2,
        },
        {
          name: "this is Typescript",
          link: "https://www.typescriptlang.org/",
          description:
            "TypeScript extends JavaScript by adding types. By understanding JavaScript, TypeScript saves you time catching errors and providing fixes before you run code. Any browser, any OS, anywhere JavaScript runs. Entirely Open Source.",
          createdAt: new Date(),
          updatedAt: new Date(),
          subjectId: 3,
        },
        {
          name: "this is HTML",
          link: "https://www.w3schools.com/html/",
          description: "HTML is the standard markup language for Web pages.",
          createdAt: new Date(),
          updatedAt: new Date(),
          subjectId: 4,
        },
        {
          name: "this is GraphQL",
          link: "https://graphql.org/",
          description: "A query language for your API",
          createdAt: new Date(),
          updatedAt: new Date(),
          subjectId: 5,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("resources", null, {});
  },
};
